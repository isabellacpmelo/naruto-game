# Naruto Game

<div align="left">
<a href="https://naruto-running-game.netlify.app/#/"><img height="355em" alt="Narutinho Game" src="https://github.com/isabellacpmelo/naruto-game/assets/42364778/c0b4b219-209d-4ecc-8f2c-b2c4cca24a06" /></a>
</div>
</br>
<a href="https://naruto-running-game.netlify.app/naruto-game/">Click here to access the website</a>

## About the project

Naruto Game is a Naruto-themed running game inspired by the classic T-Rex Game from Chrome. Run through obstacles, aim for the highest score, and unlock surprise rewards along the way. A nostalgic and fun experience for fans of the anime!

### Screenshots

#### Home Page

<img height="330em" alt="Home Page Print Screen" src="https://github.com/isabellacpmelo/naruto-game/assets/42364778/086a14e2-0a06-48b9-8013-f6c12db2bc4e" />

#### Game Page

<img height="330em" alt="Game Page Print Screen" src="https://github.com/isabellacpmelo/naruto-game/assets/42364778/8686f820-789c-4e8b-b8db-de241684046a" />

#### Game Over Page

<img height="330em" alt="Game Over Page Print Screen" src="https://github.com/isabellacpmelo/naruto-game/assets/42364778/e84a0b52-3306-472a-a995-7fb90f753c74" />

#### Prize Page

<img height="330em" alt="Prize Page Print Screen" src="https://github.com/isabellacpmelo/naruto-game/assets/42364778/e7b66880-beee-40bd-bac3-5e966137dd99" />

### Technologies

- [Vue.js 3](https://vuejs.org/)
- [Vite 4](https://vitejs.dev/)
- [UnoCSS 0.54](https://unocss.dev/)
- [VueUse](https://vueuse.org/)
- [ESLint 8](https://eslint.org/)

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Architecture

### Game Flow (State Machine)

```
┌───────┐   startGame()   ┌───────────┐   3s elapsed   ┌─────────┐
│ IDLE  │ ──────────────►  │ COUNTDOWN │ ─────────────►  │ PLAYING │
└───────┘                  └───────────┘                 └─────────┘
    ▲                                                     │       │
    │              restart()                              │       │
    └──────────────────────────────────── ◄───────────────┘       │
                                         │                        │
                                    collision                all levels
                                         │                   completed
                                         ▼                        │
                                    ┌──────────┐            ┌─────▼───┐
                                    │ GAME OVER│            │   WON   │
                                    └──────────┘            └─────────┘
```

### Levels

| Level | Duration | Bamboo Speed | Cloud Speed |
|-------|----------|--------------|-------------|
| 1     | 18s      | 3s/cycle     | 8s/cycle    |
| 2     | 23s      | 2.7s/cycle   | 6s/cycle    |
| 3     | 28s      | 2.4s/cycle   | 4s/cycle    |

### Project Structure

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂images          # Game sprites and images
 ┃ ┗ 📜style.css       # Global styles and fonts
 ┣ 📂components
 ┃ ┣ 📜StartScreen.vue # Start game UI
 ┃ ┣ 📜GameBoard.vue   # Active game area with collision elements
 ┃ ┣ 📜GameOverScreen.vue # Game over UI
 ┃ ┗ 📜WinScreen.vue   # Victory screen with prize link
 ┣ 📂composables
 ┃ ┣ 📜useGameEngine.js # Core game logic, state machine, collision detection
 ┃ ┣ 📜useGameState.js  # Global game state (win flag for route guard)
 ┃ ┗ 📜useTimer.js     # Reusable countdown/timer utility
 ┣ 📂layouts
 ┃ ┗ 📜default.vue     # Base layout wrapper
 ┣ 📂pages
 ┃ ┣ 📜index.vue       # Main game page (orchestrator)
 ┃ ┗ 📜prize.vue       # Prize reveal page
 ┣ 📜App.vue           # Root component
 ┣ 📜main.js           # App initialization and plugin setup
 ┗ 📜router.js         # Vue Router with route guards and catch-all redirect
```

### Key Design Decisions

- **State Machine Pattern**: Game state is managed via a reactive `phase` property (`idle` → `countdown` → `playing` → `won`/`over`) instead of multiple boolean flags
- **requestAnimationFrame**: Collision detection uses `requestAnimationFrame` instead of `setInterval(10ms)` for better performance and battery efficiency
- **Composables**: Game logic is extracted into reusable composables, separating concerns from UI components
- **Local Assets**: Images are imported as local assets for bundler optimization and offline capability
- **Keyboard Support**: Players can jump using Space/Enter keys in addition to mouse click
- **Route Guard**: The `/prize` page is only accessible after winning the game; direct URL access redirects to home
- **Catch-all Route**: Any invalid URL redirects to the home page

## How to use

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Project setup

```bash
pnpm i
```

### Development

```bash
pnpm dev
```

or

```bash
pnpm dev --port=5173
```

### Production build

```bash
pnpm build
```

```bash
pnpm preview
```

### Lint

```bash
pnpm lint:fix
```

## Deploy Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/9a75d183-7cf4-4482-aa3d-508615b30171/deploy-status)](https://app.netlify.com/sites/naruto-running-game/deploys)
