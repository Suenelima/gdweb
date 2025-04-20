// XML como string
const xmlString = `
<catalogo>
  <produto id="A45">
    <nome>Caneta Azul</nome>
    <preco>2.50</preco>
    <estoque>150</estoque>
  </produto>
</catalogo>
`;

// Parseia a string XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Encontra o <produto> com id="A45"
const produto = xmlDoc.querySelector('produto[id="A45"]');

// Encontra o elemento <preco> dentro do produto
const preco = produto.getElementsByTagName("preco")[0];

// Altera o valor do nó de texto para "3.00"
preco.firstChild.nodeValue = "3.00";

// Exibe o novo valor no console
console.log("Novo valor do preço:", preco.firstChild.nodeValue);

// Opcional: exibir na página também
document.getElementById("resultado").innerText = `Novo preço: ${preco.firstChild.nodeValue}`;
