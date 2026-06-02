import { onUnmounted, ref } from 'vue'

export function useTimer() {
  const timeLeft = ref(0)
  let intervalId = null

  function start(seconds) {
    stop()
    timeLeft.value = seconds
    intervalId = setInterval(() => {
      timeLeft.value--
      if (timeLeft.value <= 0)
        stop()
    }, 1000)
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  function reset() {
    stop()
    timeLeft.value = 0
  }

  onUnmounted(stop)

  return { timeLeft, start, stop, reset }
}
