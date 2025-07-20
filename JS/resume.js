const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebarNav');

menuBtn.onclick = function() {
    sidebar.classList.toggle('open');
};
window.addEventListener('click', function(e) {
    if (
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        e.target !== menuBtn
    ) {
        sidebar.classList.remove('open');
    }
});


document.querySelectorAll('.sidebar a, .snip1226 a').forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (hash.startsWith('#') && document.querySelector(hash)) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
      // Close sidebar if open (for mobile)
      document.getElementById('sidebarNav').classList.remove('open');
    }
  });
});

const skillBars = document.querySelectorAll('.skill-percentage');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const percent = bar.getAttribute('data-percentage');
      bar.style.width = percent + '%';
      observer.unobserve(bar); // فقط یک‌بار اجرا بشه
    }
  });
}, {
  threshold: 0.3
});

skillBars.forEach(bar => {
  bar.style.width = '0%'; // از ابتدا صفر باشه
  observer.observe(bar);
});
