fetch('livros.xml')
  .then(r => r.text())
  .then(data => {
    const xml = new DOMParser().parseFromString(data, 'application/xml');
    const livros = xml.getElementsByTagName('livro');
    const div = document.getElementById('autores_anos');

    for (let livro of livros) {
      const autor = livro.getElementsByTagName('autor')[0].textContent;
      const ano = livro.getElementsByTagName('ano')[0].textContent;
      const p = document.createElement('p');
      p.textContent = `Autor: ${autor}, Ano: ${ano}`;
      div.appendChild(p);
    }
  });
