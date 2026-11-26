// Mobile navigation toggle
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}
// Contact form: opens WhatsApp with the message (change the number below)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const text = `Hi Rich Think Technologies, I'm ${d.get('name')} (${d.get('phone')}). Interested in: ${d.get('topic')}. ${d.get('message')}`;
    window.open('https://wa.me/923000000000?text=' + encodeURIComponent(text), '_blank');
  });
}
