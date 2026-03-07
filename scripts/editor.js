const gridDiv = document.querySelector('#grid');
const trackName = document.querySelector('#track-name');
const saveBtn = document.querySelector('#save-track');
const trackSelect = document.querySelector('#track-select');
const loadBtn = document.querySelector('#load-track');
const terrains = ['grass', 'road', 'water'];
let mapModel = createEmptyModel();
let counter = initCounter();

renderGridFromModel(mapModel);

const defOpt = document.createElement('option');
defOpt.value = '0';
defOpt.innerText = "Select a track";
defOpt.disabled = true;
defOpt.selected = true;
trackSelect.appendChild(defOpt);

if (counter > 1) {
    const optFrag = document.createDocumentFragment();
    for (let i = 1; i < counter; i++) {
        const opt = document.createElement('option');
        opt.value = i.toString();
        opt.innerText = localStorage.getItem(`ctbName-${i}`);
        optFrag.appendChild(opt);
    }

    trackSelect.appendChild(optFrag);
}

function initCounter() {
    if (localStorage.getItem('ctbCounter') === null) {
        localStorage.setItem('ctbCounter', '1');
        return 1;
    } else {
        return parseInt(localStorage.getItem('ctbCounter'));
    }
}

loadBtn.addEventListener('click', () => {
    if (trackSelect.value !== "0") {
        mapModel = JSON.parse(localStorage.getItem(`ctbMap-${trackSelect.value}`));
        renderGridFromModel(mapModel);
    }
})

gridDiv.addEventListener('click', (e) => {
    const selectedField = e.target.closest('.grid-field');
    if (!selectedField) return;

    const x = parseInt(selectedField.dataset.x);
    const y = parseInt(selectedField.dataset.y);

    const current = mapModel[y][x];
    const next = nextTile(current);
    mapModel[y][x] = next;

    applyFieldClass(selectedField, next);
})

// Creates an array for grid with
// pre-set .grid-field values to .grass

function createEmptyModel() {
    const model = [];
    for (let y = 0; y < 20; y++) {
        const row = [];
        for (let x = 0; x < 20; x++) {
            row.push('grass');
        }
        model.push(row);
    }
    return model;
}

function nextTile(current) {
    const idx = terrains.indexOf(current);
    const nextIdx = (idx + 1) % terrains.length;
    return terrains[nextIdx];
}

// Creates .grid-fields based on values from an array

function renderGridFromModel(model) {
    gridDiv.innerHTML = ''; // reset
    const frag = document.createDocumentFragment();

    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 20; x++) {
            const field = document.createElement('div');
            field.classList.add('grid-field');
            field.dataset.x = String(x);
            field.dataset.y = String(y);
            applyFieldClass(field, model[y][x]);
            frag.appendChild(field);
        }
    }

    gridDiv.appendChild(frag);
}

// Adds terrain class to .grid-field

function applyFieldClass(fieldEl, tile) {
    fieldEl.classList.remove('grass', 'road', 'water');

    if (tile === 'grass') fieldEl.classList.add('grass');
    else if (tile === 'road') fieldEl.classList.add('road');
    else if (tile === 'water') fieldEl.classList.add('water');
}

saveBtn.addEventListener('click', () => {
    localStorage.setItem(`ctbName-${counter}`, (trackName.value).toString());
    localStorage.setItem(`ctbMap-${counter}`, JSON.stringify(mapModel));
    counter++;
    localStorage.setItem('ctbCounter', counter.toString());
})