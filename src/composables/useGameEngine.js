import { computed, onUnmounted, reactive, ref } from 'vue'
import { useTimer } from './useTimer'
import { hasWonGame } from './useGameState'

const LEVELS = [
  { duration: 18, bambooSpeed: 3, cloudsSpeed: 8 },
  { duration: 23, bambooSpeed: 2.7, cloudsSpeed: 6 },
  { duration: 28, bambooSpeed: 2.4, cloudsSpeed: 4 },
]

const COUNTDOWN_SECONDS = 3
const COLLISION_THRESHOLD_X = 50
const COLLISION_THRESHOLD_Y = 35

export function useGameEngine() {
  const state = reactive({
    phase: 'idle', // 'idle' | 'countdown' | 'playing' | 'won' | 'over'
    level: 0,
  })

  const isJumping = ref(false)
  const countdown = useTimer()
  const gameTimer = useTimer()

  let animationFrameId = null
  let levelTimeoutId = null
  const narutoRef = ref(null)
  const bambooRef = ref(null)

  const currentLevel = computed(() => LEVELS[state.level - 1] || null)
  const isIdle = computed(() => state.phase === 'idle')
  const isCountdown = computed(() => state.phase === 'countdown')
  const isPlaying = computed(() => state.phase === 'playing')
  const isGameOver = computed(() => state.phase === 'over')
  const isWon = computed(() => state.phase === 'won')

  function jump() {
    if (state.phase !== 'playing' || isJumping.value)
      return
    isJumping.value = true
    setTimeout(() => {
      isJumping.value = false
    }, 2000)
  }

  function startCollisionDetection() {
    function detect() {
      if (state.phase !== 'playing')
        return

      const bamboo = bambooRef.value
      const naruto = narutoRef.value
      if (!bamboo || !naruto) {
        animationFrameId = requestAnimationFrame(detect)
        return
      }

      const bambooPosition = bamboo.offsetLeft
      const narutoBottom = Number.parseFloat(
        window.getComputedStyle(naruto).bottom,
      )

      if (
        bambooPosition <= COLLISION_THRESHOLD_X
        && bambooPosition > 0
        && narutoBottom < COLLISION_THRESHOLD_Y
      ) {
        triggerGameOver()
        return
      }

      animationFrameId = requestAnimationFrame(detect)
    }
    animationFrameId = requestAnimationFrame(detect)
  }

  function stopCollisionDetection() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  }

  function triggerGameOver() {
    state.phase = 'over'
    stopCollisionDetection()
    countdown.stop()
    gameTimer.stop()
    clearLevelTimeout()
  }

  function clearLevelTimeout() {
    if (levelTimeoutId) {
      clearTimeout(levelTimeoutId)
      levelTimeoutId = null
    }
  }

  function startLevel(levelNumber) {
    state.level = levelNumber
    state.phase = 'countdown'
    countdown.start(COUNTDOWN_SECONDS)

    levelTimeoutId = setTimeout(() => {
      if (state.phase === 'over')
        return
      state.phase = 'playing'
      gameTimer.start(LEVELS[levelNumber - 1].duration)
      startCollisionDetection()

      levelTimeoutId = setTimeout(() => {
        if (state.phase === 'over')
          return
        stopCollisionDetection()

        if (levelNumber < LEVELS.length)
          startLevel(levelNumber + 1)

        else {
          state.phase = 'won'
          hasWonGame.value = true
        }
      }, LEVELS[levelNumber - 1].duration * 1000)
    }, COUNTDOWN_SECONDS * 1000)
  }

  function startGame() {
    state.phase = 'countdown'
    startLevel(1)
  }

  function restart() {
    stopCollisionDetection()
    clearLevelTimeout()
    countdown.reset()
    gameTimer.reset()
    isJumping.value = false
    state.phase = 'idle'
    state.level = 0
    hasWonGame.value = false
  }

  onUnmounted(() => {
    stopCollisionDetection()
    clearLevelTimeout()
  })

  return {
    state,
    isJumping,
    countdown,
    gameTimer,
    currentLevel,
    isIdle,
    isCountdown,
    isPlaying,
    isGameOver,
    isWon,
    narutoRef,
    bambooRef,
    jump,
    startGame,
    restart,
  }
}
