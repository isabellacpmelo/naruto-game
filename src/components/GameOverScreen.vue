<script setup>
defineProps({
  onRestart: { type: Function, required: true },
})
</script>

<template>
  <div
    class="game-over"
    role="alert"
    aria-label="Fim de jogo"
  >
    <h2>Game Over!</h2>
    <button
      class="mt-20 start-game-btn"
      aria-label="Voltar à tela inicial"
      @click="onRestart"
    >
      Return to Home
    </button>
  </div>
</template>

<style scoped>
.game-over {
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 60%;
  border-radius: 3px;
  margin-bottom: 100px;
  overflow: hidden;
  background: #0B0B0B;
  text-align: center;
}

.start-game-btn {
  font-size: 20px;
  animation: start-game-btn-animation 1s infinite;
}

@keyframes start-game-btn-animation {
  from { transform: scale(0.9); }
  to { transform: scale(1); }
}
</style>
