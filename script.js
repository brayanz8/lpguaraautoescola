const contactNumber = '5547984662295';
document.querySelectorAll('[data-whatsapp], [data-interest]').forEach(link => {
  const interest = link.dataset.interest;
  const message = interest ? `Olá, Guará! Gostaria de saber mais sobre ${interest}.` : 'Olá, Guará! Vim pelo site e gostaria de saber mais sobre minha primeira habilitação.';
  link.href = `https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => { element.classList.add('ready'); observer.observe(element); });
}

// A animação da moto funciona somente enquanto ela aparece na tela.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const motionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    entry.target.classList.toggle('is-in-view', entry.isIntersecting);
  }), { threshold: 0.15 });
  document.querySelectorAll('.moto-cutout').forEach(image => motionObserver.observe(image));
}
