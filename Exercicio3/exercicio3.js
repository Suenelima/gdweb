// XML como string
const xmlString = `
<biblioteca>
  <livro categoria="ficcao">
    <titulo>O Guia do Mochileiro das Galáxias</titulo>
    <autor>Douglas Adams</autor>
  </livro>
  <livro categoria="tecnico">
    <titulo>Introdução ao XML</titulo>
    <autor>Professor Exemplo</autor>
  </livro>
</biblioteca>
`;

// Parseando o XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Acessando o nó raiz <biblioteca>
const biblioteca = xmlDoc.documentElement;

// Iterando sobre os nós filhos do nó raiz
for (let i = 0; i < biblioteca.childNodes.length; i++) {
  const filho = biblioteca.childNodes[i];

  // Verifica se é um nó de elemento (nodeType === 1)
  if (filho.nodeType === 1) {
    console.log("Elemento filho:", filho.nodeName);
  }
}
