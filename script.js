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

const toTop = document.getElementById('toTop');
const revealAt = 320; // px
const onScroll = () => {
  const y = window.scrollY || window.pageYOffset;
  if (y > revealAt) toTop.classList.remove('hidden');
  else toTop.classList.add('hidden');
};
window.addEventListener('scroll', onScroll);
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
onScroll();
