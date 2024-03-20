// main.js
import { renderInventory, addTileToInventory, removeTileFromInventory } from './inventory.js';

const gameState = {
    world: [],
    inventory: [],
    selectedTool: null
};

function initWorld() {
    gameState.world = []; // Очищаем мир перед генерацией
    const worldSize = 1000; // Примерный размер мира
    const types = ['grass', 'tree', 'rock', 'dirt']; // Возможные типы тайлов

    for (let i = 0; i < worldSize; i++) {
        const type = types[Math.floor(Math.random() * types.length)]; // Случайный выбор типа тайла
        gameState.world.push({ type: type, id: i });
    }
    renderWorld();
}

function renderWorld() {
    const worldElement = document.getElementById('world');
    worldElement.innerHTML = '';
    gameState.world.forEach(tile => {
        const tileElement = document.createElement('div');
        tileElement.className = 'tile ' + tile.type;
        tileElement.dataset.id = tile.id;
        worldElement.appendChild(tileElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initWorld();
    renderInventory(gameState.inventory);
});
