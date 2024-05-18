// Selecciona todos los elementos con la clase 'item'
const items = document.querySelectorAll('.item');
// Selecciona el elemento con la clase 'sortable-list'
const sortableList = document.querySelector('.sortable-list');

// Convierte la NodeList 'items' en un array y asigna un 'event listener' a cada 'item'
[...items].map(item => {
    // Evento que se dispara al iniciar el arrastre del 'item'
    item.addEventListener('dragstart', () => {
        // Añade la clase 'dragging' al 'item' después de un breve retraso
        // para permitir que el navegador prepare la representación del arrastre
        setTimeout(() => item.classList.add('dragging'), 0);
    });
    // Evento que se dispara al finalizar el arrastre del 'item'
    item.addEventListener('dragend', () => {
        // Elimina la clase 'dragging' del 'item'
        item.classList.remove('dragging');
    });
});

// Función para inicializar la lista ordenable durante un evento de arrastre
const initSortableList = e => {
    // Previene el comportamiento predeterminado del evento
    e.preventDefault();

    // Selecciona el 'item' que está siendo arrastrado
    const draggingItem = sortableList.querySelector('.dragging');
    // Obtiene todos los 'items' que no están siendo arrastrados
    const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')];

    // Encuentra el siguiente elemento hermano basado en la posición del cursor
    let nextSibling = siblings.find(sibling =>
        e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
    );
    // Inserta el 'item' arrastrado antes del siguiente elemento hermano
    sortableList.insertBefore(draggingItem, nextSibling);
};

// Agrega 'event listeners' para los eventos 'dragover' y 'dragenter' en la lista ordenable
sortableList.addEventListener('dragover', initSortableList);
sortableList.addEventListener('dragenter', e => e.preventDefault());
