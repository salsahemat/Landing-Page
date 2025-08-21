// IMAGE MODAL
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

function openModal(src) {
  modalImg.src = src;
  modal.classList.remove('hidden');
  document.documentElement.classList.add('overflow-lock');
}
function closeModal() {
  modal.classList.add('hidden');
  modalImg.src = '';
  document.documentElement.classList.remove('overflow-lock');
}

document.querySelectorAll('[data-modal-src]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.getAttribute('data-modal-src')));
});
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modal.firstElementChild) closeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
