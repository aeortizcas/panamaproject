const COLORS = [
  '#f5f5f0', '#ffffff', '#e8dcc8', '#d4c5a9',
  '#f9e4b7', '#f7d794', '#f5cd79', '#e15f41',
  '#c44569', '#574b90', '#3dc1d3', '#78e08f',
  '#e77f67', '#f19066', '#3c6382', '#82ccdd',
];

let selectedRoom = null;
let selectedColor = '#f5f5f0';

const paletteEl = document.getElementById('palette');
const houseEl = document.getElementById('house');
const selectedRoomEl = document.getElementById('selectedRoom');
const selectedColorEl = document.getElementById('selectedColor');
const resetBtn = document.getElementById('resetBtn');

function buildPalette() {
  COLORS.forEach((hex) => {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = hex;
    swatch.dataset.color = hex;
    swatch.addEventListener('click', () => selectColor(swatch, hex));
    paletteEl.appendChild(swatch);
  });
  document.querySelector('.color-swatch').classList.add('active');
}

function selectColor(el, hex) {
  document.querySelectorAll('.color-swatch').forEach((s) => s.classList.remove('active'));
  el.classList.add('active');
  selectedColor = hex;
  selectedColorEl.style.backgroundColor = hex;
  if (selectedRoom) {
    selectedRoom.style.backgroundColor = hex;
  }
}

function selectRoom(el) {
  document.querySelectorAll('.room').forEach((r) => r.classList.remove('selected'));
  el.classList.add('selected');
  selectedRoom = el;
  selectedRoomEl.textContent = el.querySelector('span').textContent;
  el.style.backgroundColor = selectedColor;
}

houseEl.addEventListener('click', (e) => {
  const room = e.target.closest('.room');
  if (room) selectRoom(room);
});

function resetAll() {
  document.querySelectorAll('.room').forEach((r) => {
    r.style.backgroundColor = '#f5f5f0';
    r.classList.remove('selected');
  });
  selectedRoom = null;
  selectedRoomEl.textContent = 'Ninguna';
  selectedColor = '#f5f5f0';
  selectedColorEl.style.backgroundColor = '#ccc';
  document.querySelectorAll('.color-swatch').forEach((s) => s.classList.remove('active'));
  document.querySelector('.color-swatch').classList.add('active');
}

resetBtn.addEventListener('click', resetAll);

buildPalette();
