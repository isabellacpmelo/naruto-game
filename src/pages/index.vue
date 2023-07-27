<!-- @format -->
<script setup>
// when keydown is pressed, naruto will recive the class .jump
function narutoJump() {
  console.warn('naruto jumping')
  // document.querySelector(".naruto").classList.add("jumppnpp");
}
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
        @keyup="narutoJump()"
      >
    </div>
  </div>
</template>
