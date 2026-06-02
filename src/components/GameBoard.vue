<script setup>
import { ref } from 'vue'
import narutoRunningGif from '@/assets/images/naruto-running.gif'
import narutoAngryImg from '@/assets/images/naruto-angry.png'
import bambooImg from '@/assets/images/bamboo-1.png'
import cloudsImg from '@/assets/images/clouds.png'

defineProps({
  level: { type: Number, required: true },
  countdownTime: { type: Number, required: true },
  gameTime: { type: Number, required: true },
  isJumping: { type: Boolean, default: false },
  isGameOver: { type: Boolean, default: false },
  bambooSpeed: { type: Number, default: 3 },
  cloudsSpeed: { type: Number, default: 8 },
})

const narutoEl = ref(null)
const bambooEl = ref(null)

defineExpose({ narutoEl, bambooEl })
</script>

<template>
  <div class="game-board" role="region" aria-label="Área do jogo" aria-live="polite">
    <!-- Countdown -->
    <div
      v-show="countdownTime > 0"
      class="text-center flex flex-col justify-center items-center h-full"
      aria-label="Contagem regressiva"
    >
      <p class="mb-10 text-5xl">
        Level {{ level }}
      </p>
      <p class="text-7xl" aria-live="assertive">
        {{ countdownTime }}
      </p>
    </div>

    <!-- Game area -->
    <div v-show="countdownTime === 0 && !isGameOver">
      <div class="m-2">
        <p class="mb-1 text-xl">
          Level {{ level }}
        </p>
        <p aria-label="Tempo restante">
          Time Left: {{ gameTime }}
        </p>
      </div>
      <img
        :src="cloudsImg"
        alt=""
        aria-hidden="true"
        class="clouds"
        :style="{ '--animation-duration': `${cloudsSpeed}s` }"
      >
      <img
        ref="bambooEl"
        :src="bambooImg"
        alt="Obstáculo de bambu"
        class="bamboo"
        :style="{ '--animation-duration': `${bambooSpeed}s` }"
      >
      <img
        ref="narutoEl"
        :src="isGameOver ? narutoAngryImg : narutoRunningGif"
        alt="Naruto correndo"
        class="naruto"
        :class="{ jump: isJumping }"
        :style="isGameOver ? { width: '70px', height: '70px', animation: 'none' } : {}"
      >
    </div>
  </div>
</template>

<style scoped>
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
  animation: bamboo-animation var(--animation-duration) infinite linear;
}

.naruto {
  width: 60px;
  height: 70px;
  position: absolute;
  bottom: 0;
}

.clouds {
  width: 200px;
  position: absolute;
  bottom: 50%;
  animation: clouds-animation var(--animation-duration) infinite linear;
}

.jump {
  animation: jump 2000ms ease-out;
}

@keyframes bamboo-animation {
  from { right: 0; }
  to { right: 100%; }
}

@keyframes jump {
  0% { bottom: 0; }
  50% { bottom: 150px; }
  100% { bottom: 0; }
}

@keyframes clouds-animation {
  from { right: -60%; }
  to { right: 100%; }
}

@media (max-width: 768px) {
  .game-board {
    width: 95%;
    height: 50%;
    margin-bottom: 40px;
  }

  .naruto {
    width: 40px;
    height: 50px;
  }

  .bamboo {
    height: 35px;
    width: 20px;
  }

  .clouds {
    width: 120px;
  }
}
</style>
