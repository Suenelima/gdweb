fetch('livros.xml')
  .then(r => r.text())
  .then(data => {
    const xml = new DOMParser().parseFromString(data, 'application/xml');
    const autor = xml.getElementsByTagName('livro')[1].getElementsByTagName('autor')[0];
    const livro = autor.parentNode;

    let node = livro.firstChild;
    while (node && node.nodeName !== 'titulo') {
      node = node.nextSibling;
    }

    document.getElementById('navegacao').innerText = node.textContent;
  });
