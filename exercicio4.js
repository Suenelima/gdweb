fetch('livros.xml')
  .then(r => r.text())
  .then(data => {
    const xml = new DOMParser().parseFromString(data, 'application/xml');
    const livro = xml.getElementsByTagName('livro')[0];
    let node = livro.firstChild;

    while (node && node.nodeName !== 'autor') {
      node = node.nextSibling;
    }

    const nomeAutor = node.firstChild.nodeValue;
    document.getElementById('primeiro_autor').innerText = nomeAutor;
  });
