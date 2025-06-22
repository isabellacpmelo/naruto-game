<!-- @format -->

<script setup>
const isGiftOpened = ref(false)
function DownloadPrize() {
  const imageUrl =
    'https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/naturo-and-sasuke.jpg?raw=true'
  window.open(imageUrl, '_blank')
}
</script>

<template>
  <div
    class="bg-black h-screen flex flex-col items-center justify-center text-center">
    <p class="text-2xl mb-8">You have completed the game!</p>
    <p class="mb-8">And your prize is...</p>
    <div v-if="!isGiftOpened">
      <p
        class="p-10"
        :class="
          isGiftOpened
            ? 'i-streamline-emojis:wrapped-gift-2'
            : 'i-noto-wrapped-gift closed-gift'
        "
        @click="isGiftOpened = true" />
    </div>

    <div v-if="isGiftOpened">
      <img
        src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/naturo-and-sasuke.jpg?raw=true"
        alt="Naruto and Sasuke"
        class="h-64 w-fit" />
      <div class="flex justify-center">
        <button
          type="button"
          class="flex justify-center items-center gap-2 mt-8"
          @click="DownloadPrize">
          <div>Download</div>
          <div class="i-carbon-download text-orange" />
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
