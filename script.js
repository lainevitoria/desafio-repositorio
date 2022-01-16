const botao = document.querySelector('button');

pegarPersonagem = () => {
    return fetch('https://rickandmortyapi.com/api/character/' + Math.floor(Math.random() * 20) + 1, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        return data;
    })
};


atualizarPersonagens = () => {

    personagem1 = pegarPersonagem().then((data) => {
        const imagem1 = document.querySelector('#ima');
        const nomeDoPersonagem1 = document.querySelector('#nomea');
        const especie1 = document.querySelector('#especiea');
        const condicao1 = document.querySelector('#statusa');
    
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = data.status;        
    });
  

    personagem2 = pegarPersonagem().then((data) => {
        const imagem2 = document.querySelector('#imb');
        const nomeDoPersonagem2 = document.querySelector('#nomeb');
        const especie2 = document.querySelector('#especieb');
        const condicao2 = document.querySelector('#statusb');
    
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;        
    });
  
    personagem3 = pegarPersonagem().then((data) => {
        const imagem3 = document.querySelector('#imc');
        const nomeDoPersonagem3 = document.querySelector('#nomec');
        const especie3 = document.querySelector('#especiec');
        const condicao3 = document.querySelector('#statusc');
    
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;        
    });
      
}

botao.onclick = atualizarPersonagens;
