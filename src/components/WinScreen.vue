<template>
  <div
    class="text-center flex flex-col justify-center items-center h-full"
    role="alert"
    aria-label="Você venceu o jogo"
  >
    <p class="mb-10 text-5xl">
      You won!
    </p>
    <RouterLink
      to="/prize"
      class="mt-20 start-game-btn"
      aria-label="Receber prêmio"
    >
      Click here to claim your prize
    </RouterLink>
  </div>
</template>

<style scoped>
.start-game-btn {
  font-size: 20px;
  animation: start-game-btn-animation 1s infinite;
  display: inline-block;
}

@keyframes start-game-btn-animation {
  from { transform: scale(0.9); }
  to { transform: scale(1); }
}
</style>
