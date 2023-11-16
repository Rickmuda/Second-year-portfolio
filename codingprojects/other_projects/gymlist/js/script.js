document.addEventListener('DOMContentLoaded', function() {
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryLists = document.querySelectorAll('.category-list');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        categoryLists.forEach(list => {
            if (list.dataset.category === category) {
                list.classList.add('show');
            } else {
                list.classList.remove('show');
            }
        });
    });
});
});
