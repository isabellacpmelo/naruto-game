<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useGameEngine } from '@/composables/useGameEngine'
import StartScreen from '@/components/StartScreen.vue'
import GameBoard from '@/components/GameBoard.vue'
import GameOverScreen from '@/components/GameOverScreen.vue'
import WinScreen from '@/components/WinScreen.vue'

const gameBoardRef = ref(null)

const {
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
} = useGameEngine()

watch(gameBoardRef, (board) => {
  if (board) {
    narutoRef.value = board.narutoEl
    bambooRef.value = board.bambooEl
  }
}, { flush: 'post' })

function handleJump() {
  jump()
}

function handleKeydown(event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    event.preventDefault()
    jump()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    class="background"
    role="main"
    aria-label="Naruto Running Game"
    tabindex="0"
    @click="handleJump"
    @keydown.space.prevent="handleJump"
  >
    <StartScreen v-if="isIdle" :on-start="startGame" />

    <template v-else-if="!isGameOver && !isWon">
      <GameBoard
        ref="gameBoardRef"
        :level="state.level"
        :countdown-time="countdown.timeLeft.value"
        :game-time="gameTimer.timeLeft.value"
        :is-jumping="isJumping"
        :is-game-over="isGameOver"
        :bamboo-speed="currentLevel?.bambooSpeed || 3"
        :clouds-speed="currentLevel?.cloudsSpeed || 8"
      />
    </template>

    <div v-else-if="isWon" class="win-container">
      <WinScreen />
    </div>

    <GameOverScreen v-else :on-restart="restart" />
  </div>
</template>

<style scoped>
.background {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 118, 64);
  outline: none;
}

.background:focus-visible {
  outline: 3px solid #ffd700;
  outline-offset: -3px;
}

.win-container {
  width: 80%;
  height: 60%;
  border-radius: 3px;
  margin-bottom: 100px;
  overflow: hidden;
  background: linear-gradient(#0B0B0B, #0C2FDF);
}
</style>
