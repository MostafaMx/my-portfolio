const licenses = {
  license1: {
    title: 'Python Advanced',
    img: 'assets/pictures/pyadvancedjpg.jpg',
    text: 'Completing the Python Advanced course was a valuable and rewarding experience. While I found the material straightforward to understand thanks to a solid foundation, I also gained a wealth of new knowledge, advanced skills, and insights into complex Python concepts.The program deepened my practical understanding and expanded my capabilities in writing efficient and scalable code.Beyond the technical growth, the course provided me with the opportunity to connect with key professionals in the field, enriching my network and exposing me to real-world applications and industry standards.'
  },
  license2: {
    title: 'Python Project Based',
    img: 'assets/pictures/pyproject.jpg',
    text: 'Participating in the Python Project-Based program was a transformative experience that helped me grow both technically and professionally. Through hands-on projects and collaborative tasks, I learned to approach coding in a more structured, efficient, and team-oriented way. This experience sharpened my problem-solving skills and introduced me to real-world scenarios that pushed me beyond theoretical knowledge.I’m especially grateful to Mr.Mohsen Rezaei for his invaluable guidance and support throughout the journey. His mentorship played a key role in helping me refine my skills and gain confidence in applying Python in practical environments.'}
};

function showDetails(key) {
  const data = licenses[key];
  const panel = document.getElementById('details');
  const overlay = createOverlay();
  document.getElementById('datalis-title').textContent = data.title;
  document.getElementById('details-img').src = data.img;
  document.getElementById('details-text').textContent = data.text;

  panel.classList.remove('hide');
  panel.classList.add('show');
  panel.style.display = 'flex';

  overlay.style.display = 'block';

  if (!document.querySelector('.close-btn')) {
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-btn';
    closeBtn.onclick = function () {
      panel.classList.remove('show');
      panel.classList.add('hide');
      overlay.style.display = 'none';

      setTimeout(() => {
        panel.style.display = 'none';
      }, 300);
    };
    panel.appendChild(closeBtn);
  }
}

function createOverlay() {
  let overlay = document.querySelector('.blur-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'blur-overlay';
    document.body.appendChild(overlay);
  }
  return overlay;
}