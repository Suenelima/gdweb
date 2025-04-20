fetch('livros.xml')
  .then(r => r.text())
  .then(data => {
    const xml = new DOMParser().parseFromString(data, 'application/xml');
    const livros = xml.getElementsByTagName('livro');
    const div = document.getElementById('ids');

    for (let livro of livros) {
      const id = livro.getAttributeNode('id').nodeValue;
      const p = document.createElement('p');
      p.textContent = `ID: ${id}`;
      div.appendChild(p);
    }
  });
