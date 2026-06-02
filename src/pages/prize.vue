<script setup>
import narutoSasukeImg from '@/assets/images/naturo-and-sasuke.jpg'

const isGiftOpened = ref(false)

function downloadPrize() {
  const link = document.createElement('a')
  link.href = narutoSasukeImg
  link.download = 'naruto-and-sasuke.jpg'
  link.click()
}
</script>

<template>
  <div
    class="bg-black h-screen flex flex-col items-center justify-center text-center"
    role="main"
    aria-label="Página de prêmio"
  >
    <h1 class="text-2xl mb-8">
      You have completed the game!
    </h1>
    <p class="mb-8">
      And your prize is...
    </p>
    <div v-if="!isGiftOpened">
      <button
        class="p-10 i-noto-wrapped-gift closed-gift"
        aria-label="Abrir presente"
        @click="isGiftOpened = true"
      />
    </div>

    <div v-if="isGiftOpened">
      <img
        :src="narutoSasukeImg"
        alt="Naruto e Sasuke juntos"
        class="h-64 w-fit"
      >
      <div class="flex justify-center">
        <button
          type="button"
          class="flex justify-center items-center gap-2 mt-8"
          aria-label="Baixar imagem de prêmio"
          @click="downloadPrize"
        >
          <span>Download</span>
          <span class="i-carbon-download text-orange" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.closed-gift {
  animation: gift-animation 1s infinite;
}

@keyframes gift-animation {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}
</style>
