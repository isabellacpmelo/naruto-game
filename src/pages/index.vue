<!-- @format -->
<script setup>
const startGame = ref(false)
const gameOver = ref(false)
const gameStage = ref(0)

function narutoJump() {
  document.querySelector('.naruto').classList.add('jump')
  setTimeout(() => {
    document.querySelector('.naruto').classList.remove('jump')
  }, 2000)
}

const loop = setInterval(() => {
  if (startGame.value) {
    const bambooPosition = document.querySelector('.bamboo').offsetLeft
    const narutoPosition = +window.getComputedStyle(document.querySelector('.naruto')).bottom.replace('px', '')

    if (bambooPosition <= 60 && bambooPosition > 0 && narutoPosition < 46) {
      document.querySelector('.bamboo').style.animation = 'none'
      document.querySelector('.bamboo').style.left = `${bambooPosition}px`

      document.querySelector('.naruto').style.animation = 'none'
      document.querySelector('.naruto').style.bottom = `${narutoPosition}px`

      document.querySelector('.naruto').src = 'https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/naruto-angry.png?raw=true'
      // diminuir o tamanho do naruto
      document.querySelector('.naruto').style.width = '70px'
      document.querySelector('.naruto').style.height = '70px'

      clearInterval(loop)
      setTimeout(() => {
        gameOver.value = true
      }, 2000)
    }
  }
}, 10)

function restartGame() {
  window.location.reload()
}

const timeLeft = ref(3)
let timer = null

function startTimer() {
  if (timer)
    clearInterval(timer)
  timeLeft.value = 3
  timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value === 0)
      clearInterval(timer)
  }, 1000)
}

function startGameOnFirstStage() {
  startGame.value = true
  gameStage.value = 1
  startTimer()

  setTimeout(() => {
    gameStage.value++
    startTimer()
  }, 33000)

  setTimeout(() => {
    gameStage.value++
    startTimer()
  }, 66000)

  setTimeout(() => {
    gameStage.value++
    startTimer()
  }, 99000)
}
</script>

<template>
  <div>
    <p>{{ timeLeft }}</p>
    <p>Stage: {{ gameStage }}</p>
  </div>
  <div class="background">
    <div v-if="!startGame && !gameOver" class="start-game">
      <img
        src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/sasuke-start-game.png?raw=true"
        alt="Sasuke"
        class="h-56 w-fit mr-[-40px]"
      >
      <div class="z-10">
        <p>Narutinho <br> Game</p>
        <button class="mt-20 start-game-btn" @click="startGameOnFirstStage">
          Start Game
        </button>
      </div>
      <img
        src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/naruto-start-game.png?raw=true"
        alt="Naruto"
        class="h-56 w-fit ml-[-40px]"
      >
    </div>
    <div v-else-if="startGame && !gameOver" class="game-board">
      <!-- Criar fase do jogo -->
      <!-- Criar cronometro -->
      <!-- criar tela de vitória -->
      <!-- Adicionar mensagem especial -->
      <div v-show="timeLeft > 0 && gameStage < 4" class="text-center flex flex-col justify-center items-center h-full">
        <p class="mb-10 text-5xl">
          Fase {{ gameStage }}
        </p>
        <p class="text-7xl">
          {{ timeLeft }}
        </p>
      </div>
      <div v-show="timeLeft === 0 && gameStage < 4">
        <img
          src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/clouds.png?raw=true"
          alt="Clouds"
          class="clouds"
        >
        <img
          src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/bamboo-1.png?raw=true"
          alt="bamboo"
          class="bamboo"
        >
        <img
          src="https://github.com/isabellacpmelo/naruto-game/blob/main/src/assets/images/naruto-running.gif?raw=true"
          alt="Naruto Running"
          class="naruto"
          @click="narutoJump"
        >
      </div>
      <div v-show="gameStage > 3" class="text-center flex flex-col justify-center items-center h-full">
        <p class="mb-10 text-5xl">
          You won!
        </p>
        <button class="mt-20 start-game-btn">
          <a href="#/prize">Click here to claim your prize</a>
        </button>
      </div>
    </div>
    <div v-else class="game-over">
      Game Over!
      <button class="mt-20 start-game-btn" @click="restartGame">
        Restart Game
      </button>
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

.start-game {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 60%;
  border-radius: 3px;
  margin-bottom: 100px;
  overflow: hidden;
  /* background: linear-gradient(#395766, #145c40); */
  background: linear-gradient(#0B0B0B, #0C2FDF);
  font-size: 30px;
  text-align: center;
}

.start-game-btn {
  font-size: 20px;
  animation: start-game-btn-animation 1s infinite;
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

.bamboo {
  position: absolute;
  bottom: -7.5px;
  height: 50px;
  width: 30px;
  animation: bamboo-animation 3s infinite linear;
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
  /* background: linear-gradient(#395766, #145c40); */
  background: #0B0B0B;
  text-align: center;
}

@keyframes start-game-btn-animation {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

@keyframes bamboo-animation {
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
