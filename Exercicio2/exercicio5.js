fetch('livros.xml')
  .then(r => r.text())
  .then(data => {
    const xml = new DOMParser().parseFromString(data, 'application/xml');
    const livros = xml.getElementsByTagName('livro');
    const ultimoLivro = livros[livros.length - 1];

    let node = ultimoLivro.lastChild;
    while (node && node.nodeName !== 'ano') {
      node = node.previousSibling;
    }

    const ano = node.firstChild.nodeValue;
    document.getElementById('ultimo_ano').innerText = ano;
  });
