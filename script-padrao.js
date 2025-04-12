function atualizarImagensTema() {
    const modoEscuro = document.body.classList.contains('dark-mode');
    const imagens = document.querySelectorAll('.imagem-projeto');
  
    imagens.forEach(img => {
      const novaSrc = modoEscuro ? img.dataset.dark : img.dataset.light;
      img.src = novaSrc;
    });
  }

function mudaTema(btn){
    document.body.classList.toggle('dark-mode');
    atualizarImagensTema();
}