<script setup>
import narutoStartImg from '@/assets/images/naruto-start-game.png'
import sasukeStartImg from '@/assets/images/sasuke-start-game.png'

defineProps({
  onStart: { type: Function, required: true },
})
</script>

<template>
  <div class="start-game" role="region" aria-label="Tela inicial do jogo">
    <img
      :src="sasukeStartImg"
      alt="Sasuke em pose de batalha"
      class="h-56 w-fit mr-[-40px]"
    >
    <div class="z-10">
      <h1>Narutinho <br> Game</h1>
      <button
        class="mt-20 start-game-btn"
        aria-label="Iniciar jogo"
        @click="onStart"
      >
        Start Game
      </button>
      <br>
      <p class="pt-20 text-sm">
        >> Click or press Space/Enter to jump
      </p>
    </div>
    <img
      :src="narutoStartImg"
      alt="Naruto em pose de corrida"
      class="h-56 w-fit ml-[-40px]"
    >
  </div>
</template>

<style scoped>
.start-game {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 60%;
  border-radius: 3px;
  margin-bottom: 100px;
  overflow: hidden;
  background: linear-gradient(#0B0B0B, #0C2FDF);
  font-size: 30px;
  text-align: center;
}

.start-game-btn {
  font-size: 20px;
  animation: start-game-btn-animation 1s infinite;
}

@keyframes start-game-btn-animation {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .start-game {
    width: 95%;
    height: 50%;
    margin-bottom: 40px;
    font-size: 20px;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
  }

  .start-game img {
    height: 80px;
    margin: 0;
  }
}
</style>
