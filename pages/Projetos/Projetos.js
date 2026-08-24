const projetos = [

    {
        nome: "Projeto Orion",
        subtitulo: "Luva tecnológica musical",
        curso: "Informática para Internet",
        sala: "2A",
        bloco: "A",
        imagem: "../../img/orion.jpg",
        ods: [4, 9],
        link: "#"
    },

    {
        nome: "EcoTech",
        subtitulo: "Tecnologia sustentável",
        curso: "Administração",
        sala: "3B",
        bloco: "B",
        imagem: "../../img/ecotech.jpg",
        ods: [11, 12],
        link: "#"
    }

];


const container = document.getElementById("lista-projetos");


projetos.forEach(projeto => {

    container.innerHTML += criarCard(projeto);

});