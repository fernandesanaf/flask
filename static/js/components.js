function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = '<h1>Avaliação contínua: Aula 03</h1>';
    return header;
}

const header = createHeader();
document.getElementById('header-template').appendChild(header);
