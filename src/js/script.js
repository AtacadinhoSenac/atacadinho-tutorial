// Controle do Acordeão
const accordionBtn = document.querySelector('.accordion-btn');
if (accordionBtn) {
  accordionBtn.addEventListener('click', () => {
    accordionBtn.classList.toggle('active');
    const content = document.querySelector('.accordion-content');
    content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
  });
}

// Controle da Playlist
document.querySelectorAll('.playlist-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.playlist-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const videoId = item.dataset.video;
    const videoTitle = item.dataset.title;
    const videoDescription = item.dataset.description;

    document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('videoTitle').textContent = videoTitle;
    document.getElementById('videoDescription').textContent = videoDescription;
  });
});

// Controle do Botão de Documentação
document.querySelector('.doc-button').addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1P9QCG2ak9D7NiiR22D_lCdx8ZLFjoerC/view?pli=1', '_blank');
});