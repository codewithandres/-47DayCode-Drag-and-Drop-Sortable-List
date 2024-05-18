
const items = document.querySelectorAll('.item');
const sortableList = document.querySelector('.sortable-list');

[...items].map(item => {
    item.addEventListener('dragstart', () => {
        setTimeout(() => item.classList.add('dragging'), 0);
    });
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
});

const initSortableList = e => {
    e.preventDefault();

    const dragginItem = sortableList.querySelector('.dragging');
    const siblings = [...sortableList.querySelectorAll('.item:not(.draggin)')];

    let nextSibligns = siblings.find(sibling =>
        e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
    );
    sortableList.insertBefore(dragginItem, nextSibligns);
};

sortableList.addEventListener('dragover', initSortableList);
sortableList.addEventListener('dragenter', e => e.preventDefault());