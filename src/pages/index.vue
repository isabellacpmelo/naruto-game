<!-- @format -->
<script setup>
function narutoJump() {
  document.querySelector('.naruto').classList.add('jump')
  setTimeout(() => {
    document.querySelector('.naruto').classList.remove('jump')
  }, 1000)
}

const loop = setInterval(() => {
  const pipePosition = document.querySelector('.sakura').offsetLeft
  if (pipePosition <= 100) {
    document.querySelector('.sakura').style.animation = 'none'
    document.querySelector('.sakura').style.left = `${pipePosition}px`
  }
}, 10)
</script>

<template>
  <div class="game-board">
    <div>
      <img
        src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/sakura.gif?raw=true"
        alt="Sakura Fighting"
        class="sakura"
      >
      <img
        src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/naruto-running.gif?raw=true"
        alt="Naruto Running"
        class="naruto"
        @click="narutoJump"
      >
    </div>
  </div>
</template>
