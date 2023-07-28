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
  <div class="background">
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
  </div>
</template>

<style scoped>
.background {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(5, 73, 20);
}

.game-board {
  width: 80%;
  height: 50%;
  border: 1px solid #333333;
  border-radius: 10px;
  margin: 16px;
  position: relative;
  overflow: hidden;
  background-color: antiquewhite;
}

.sakura {
  position: absolute;
  bottom: 0;
  width: 100px;
  animation: sakura-animation 3s infinite linear;
}

.naruto {
  width: 100px;
  position: absolute;
  bottom: 0;
}

.jump {
  animation: jump 1000ms ease-out;
}

@keyframes sakura-animation {
  from {
    right: 0;
  }

  to {
    right: 100%;
  }
}

@keyframes jump {
  0% {
    bottom: 0;
  }

  50% {
    bottom: 250px;
  }

  100% {
    bottom: 0;
  }
}
</style>
