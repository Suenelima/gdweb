fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const xml = new DOMParser().parseFromString(data, 'application/xml');
    const titulos = xml.getElementsByTagName('titulo');
    const div = document.getElementById('titulos');

    for (let i = 0; i < titulos.length; i++) {
      const p = document.createElement('p');
      p.textContent = titulos[i].textContent;
      div.appendChild(p);
    }
  });
