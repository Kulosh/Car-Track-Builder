const gridDiv = document.querySelector('#grid');

const fragment = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
    for (let i = 0; i < 20; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-field');
        div.classList.add('grass');
        fragment.appendChild(div);
    }
}
gridDiv.appendChild(fragment);