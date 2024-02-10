<script setup>
const isGiftOpened = ref(false)
</script>

<template>
  <div class="bg-black h-screen flex flex-col items-center justify-center text-center">
    <p class="text-2xl mb-8">
      You have completed the game!
    </p>
    <p class="mb-8">
      And your prize is...
    </p>
    <p v-if="!isGiftOpened" class="p-10" :class="isGiftOpened ? 'i-streamline-emojis:wrapped-gift-2' : 'i-noto-wrapped-gift closed-gift'" @click="isGiftOpened = true" />
    <img
      v-if="isGiftOpened"
      src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/naruto-start-game.png?raw=true"
      alt="Naruto"
      class="h-56 w-fit ml-[-40px]"
    >
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
