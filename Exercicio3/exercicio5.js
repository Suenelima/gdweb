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

// Parseia o XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Encontra o elemento <produto> com id="A45"
const produto = xmlDoc.querySelector('produto[id="A45"]');

// Adiciona o novo atributo moeda="BRL"
produto.setAttribute("moeda", "BRL");

// Exibe no console para confirmar
console.log("Novo atributo 'moeda':", produto.getAttribute("moeda"));

// Também mostra no HTML (opcional)
document.getElementById("resultado").innerText = `Atributo adicionado: moeda = ${produto.getAttribute("moeda")}`;
