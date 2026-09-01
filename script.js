document.querySelector(".open").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("open");
    
})

const video = document.getElementById('video-intro');
const boasVindas = document.getElementById('boas-vindas');

video.addEventListener('ended', function() {
  document.querySelector('.tela-video').style.display = 'none';
  boasVindas.classList.add('visivel');
});

