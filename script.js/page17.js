document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const content = box.querySelector('p').textContent.toLowerCase();
        if (content.includes(searchTerm)) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });
});