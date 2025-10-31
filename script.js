// Update year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: small keyboard easter egg to focus email link with 'e'
document.addEventListener('keydown', (e) => {
  if ((e.key === 'e' || e.key === 'E') && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const link = document.querySelector('.email');
    if (link) link.focus();
  }
});


