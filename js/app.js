
const items = document.querySelectorAll('.item');
const sortableList = document.querySelector('.sortable-list');

[...items].map(item => {
    item.addEventListener('dragstart', () => {
        setTimeout(() => item.classList.add('dragging'), 0);
    });
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
});
