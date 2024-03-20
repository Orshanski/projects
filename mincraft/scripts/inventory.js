// inventory.js
export function renderInventory(inventory) {
    const inventoryElement = document.querySelector('.inventory-items');
    inventoryElement.innerHTML = ''; // Очищаем текущее содержимое инвентаря

    if (inventory.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Инвентарь пуст';
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.flexBasis = '100%'; // Растягиваем сообщение на всю ширину контейнера
        emptyMessage.style.color = '#666'; // Цвет текста для пустого инвентаря
        inventoryElement.appendChild(emptyMessage);
    } else {
        inventory.forEach(tile => {
            const tileElement = document.createElement('div');
            tileElement.className = 'inventory-tile ' + tile.type;
            tileElement.dataset.id = tile.id;
            inventoryElement.appendChild(tileElement);
        });
    }
}

// Пример функции добавления тайла в инвентарь
export function addTileToInventory(tile, inventory) {
    inventory.push(tile);
    renderInventory(inventory);
}

// Пример функции удаления тайла из инвентаря
export function removeTileFromInventory(tileId, inventory) {
    const tileIndex = inventory.findIndex(tile => tile.id === tileId);
    if (tileIndex > -1) {
        inventory.splice(tileIndex, 1);
        renderInventory(inventory);
    }
}
