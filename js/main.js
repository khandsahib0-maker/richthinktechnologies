// WhatsApp number used across the site (international format, no + or leading 0)
const WA_NUMBER = '923290739313';

// Mobile navigation toggle
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}

function openWhatsApp(text) {
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
}

// CNIC: auto-format as 12345-1234567-1
const cnic = document.getElementById('cnic');
if (cnic) {
  cnic.addEventListener('input', () => {
    const d = cnic.value.replace(/\D/g, '').slice(0, 13);
    let v = d.slice(0, 5);
    if (d.length > 5) v += '-' + d.slice(5, 12);
    if (d.length > 12) v += '-' + d.slice(12);
    cnic.value = v;
  });
}

// Student admission form: sends the details to our WhatsApp
const apply = document.getElementById('apply-form');
if (apply) {
  apply.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!apply.reportValidity()) return;
    const d = new FormData(apply);
    const text = [
      'Admission Application - Rich Think Technologies',
      '',
      'Student Name: ' + d.get('student_name'),
      'Father Name: ' + d.get('father_name'),
      'CNIC / B-Form No: ' + d.get('cnic'),
      'City: ' + d.get('city'),
      'Email: ' + d.get('email'),
      'WhatsApp: ' + d.get('whatsapp'),
      'Address: ' + d.get('address'),
      'Course: ' + d.get('course'),
      '',
      'I have read and accepted the Terms & Conditions.'
    ].join('\n');
    openWhatsApp(text);
  });
}

// Quick contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    openWhatsApp(`Hi Rich Think Technologies, I'm ${d.get('name')} (${d.get('phone')}). Interested in: ${d.get('topic')}. ${d.get('message')}`);
  });
}
