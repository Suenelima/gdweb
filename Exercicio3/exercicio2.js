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

    // Parseando o XML com DOMParser
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // Pegando todos os elementos <titulo>
    const titulos = xmlDoc.getElementsByTagName("titulo");

    // Acessando o texto do segundo <titulo>
    const segundoTitulo = titulos[1].firstChild.nodeValue;

    // Mostrando no console
    console.log("Segundo título:", segundoTitulo);

    // (Opcional) Mostrar no HTML também
    document.getElementById("titulos").innerText = segundoTitulo;
