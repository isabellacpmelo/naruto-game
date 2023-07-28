<!-- @format -->
<script setup>
function narutoJump() {
  document.querySelector('.naruto').classList.add('jump')
  setTimeout(() => {
    document.querySelector('.naruto').classList.remove('jump')
  }, 2000)
}

const loop = setInterval(() => {
  const cactusPosition = document.querySelector('.cactus').offsetLeft
  const narutoPosition = +window.getComputedStyle(document.querySelector('.naruto')).bottom.replace('px', '')

  if (cactusPosition <= 60 && cactusPosition > 0 && narutoPosition < 46) {
    document.querySelector('.cactus').style.animation = 'none'
    document.querySelector('.cactus').style.left = `${cactusPosition}px`

    document.querySelector('.naruto').style.animation = 'none'
    document.querySelector('.naruto').style.bottom = `${narutoPosition}px`

    document.querySelector('.naruto').src = 'https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/sakura.gif?raw=true'

    clearInterval(loop)
  }
}, 10)
</script>

<template>
  <div class="background">
    <div class="game-board">
      <!-- Criar Tela Inicial -->
      <!-- Criar fase do jogo -->
      <!-- Criar tela Game Over -->
      <!-- Criar cronometro -->
      <!-- criar tela de vitória -->
      <!-- Adicionar mensagem especial -->
      <div>
        <img
          src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/clouds.png?raw=true"
          alt="Clouds"
          class="clouds"
        >
        <img
          src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/cacto.png?raw=true"
          alt="Cactus"
          class="cactus"
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
  background-color: rgb(236, 118, 64);
}

.game-board {
  width: 80%;
  height: 60%;
  border-bottom: 10px solid rgb(3, 95, 23);
  border-radius: 3px;
  margin-bottom: 100px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(#87CEEB, #E0F6FF);
}

.cactus {
  position: absolute;
  bottom: -7.5px;
  height: 50px;
  width: 30px;
  animation: cactus-animation 3s infinite linear;
}

.naruto {
  width: 60px;
  height: 70px;
  position: absolute;
  bottom: 0px;
}

.clouds {
  width: 200px;
  position: absolute;
  bottom: 50%;
  animation: clouds-animation 10s infinite linear;
}

.jump {
  animation: jump 2000ms ease-out;
}

@keyframes cactus-animation {
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
    bottom: 150px;
  }

  100% {
    bottom: 0;
  }
}

@keyframes clouds-animation {
  from {
    right: -60%;
  }

  to {
    right: 100%;
  }
}
</style>
