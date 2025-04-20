fetch('livros.xml')
  .then(r => r.text())
  .then(data => {
    const xml = new DOMParser().parseFromString(data, 'application/xml');
    const livro = xml.getElementsByTagName('livro')[0];
    const id = livro.getAttribute('id');
    const titulo = livro.getElementsByTagName('titulo')[0].textContent;
    const autor = livro.getElementsByTagName('autor')[0].textContent;
    const ano = livro.getElementsByTagName('ano')[0].textContent;

    document.getElementById('livro_especifico').innerText = 
      `ID: ${id}, Título: ${titulo}, Autor: ${autor}, Ano: ${ano}`;
  });
