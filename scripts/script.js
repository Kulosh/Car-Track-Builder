const homeNavBtn = document.querySelector('#nav-home');
const editorNavBtn = document.querySelector('#nav-editor');

homeNavBtn.addEventListener('click', () => {
    window.location.replace('./index.html');
})

editorNavBtn.addEventListener('click', () => {
    window.location.replace('./editor.html');
})

