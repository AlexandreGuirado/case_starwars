/* Váriaveis */
let button          = document.querySelector('#button')
let name            = document.querySelector('#name')
let height          = document.querySelector('#height')
let mass            = document.querySelector('#mass')
let birthYear       = document.querySelector('#birth-year')
let hairColor       = document.querySelector('#hairColor')
let skinColor       = document.querySelector('#skinColor')
let gender          = document.querySelector('#gender')
let homeworld       = document.querySelector('#homeworld')
let planetName      =  document.getElementById('#name')
 
// Função getInfo
function getInfo(){

    // Animação de Carregando antes de procurar o personagem
    updateWithLoading()
        
    // Variável de Pesquisa de personageme de Conexão com a API
    let search =  document.getElementById("search").value;    
    let apiUrl = 'https://swapi.dev/api/people/?search=' + search
   
    // Axios recebendo a função updateInfo
    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e =>{
        updateInfoWithError()
    })
    
    // Matriz que contém a lista de nomes de sugestão
    let items = ['Yoda', 'Luke Skywalker', 'Anakin Skywalker', 'Greedo', 'R2-D2', 'Darth Vader', 
                 'Leia Organa', 'Owen Lars', 'Beru Whitesun Lars', 'R5-D4', 'Biggs Darklighter', 
                 'Obi-Wan Kenobi', 'Wilhuff Tarkin', 'Chewbacca', 'Han Solo', 'Jabba Desilijic Tiure',
                 'Wedge Antilles', 'Jek Tono Porkins', 'Palpatine', 'Boba Fett', 'IG-88', 'Bossk',
                 'Lando Calrissian', 'Lobot', 'Ackbar', 'Mon Mothma', 'Arvel Crynyd', 'Wicket Systri Warrick'];
    
    // Três variaveis que tem a função de escolher um Item randomicamente
    let item_1 = items[Math.floor(Math.random() * items.length)];    
    let item_2 = items[Math.floor(Math.random() * items.length)];
    let item_3 = items[Math.floor(Math.random() * items.length)];

    // Div de recomendado que fica dentro do arquivo index.html recebendo o valor randômico
    recommended_1.innerHTML = "Research Suggestion: " + item_1
    recommended_2.innerHTML = item_2
    recommended_3.innerHTML = item_3     

}

// Função udateInfo
function updateInfo(data){
    
    // IDs HTML recebendo as informações da pesquisa feita ao Personagem
    name.innerText      = 'Name: ' + data.results[0].name 
    height.innerText    = 'Height: ' + data.results[0].height
    mass.innerText      = 'Mass: ' + data.results[0].mass
    birthYear.innerText = 'Birth Year: ' + data.results[0].birth_year 
    hairColor.innerText = 'Hair Color: ' + data.results[0].hair_color  
    skinColor.innerText = 'Skin Color: ' + data.results[0].skin_color  
    gender.innerText    = 'Gender: ' + data.results[0].gender    
        
    // Variável planetaNatal recebendo o Link que da acesso a página HomeWorld
    let planetaNatal = data.results[0].homeworld

    // Axios recebendo as informações da página HomeWorld
    axios.get(planetaNatal).then(response => {
        updatePlanetInfo(response.data)
    })
    
    // ID HTML recebendo a informação da pesquisa feita pela Funçao updatePlanetInfo e setando o nome do planeta
    homeworld.innerText = 'Homeworld: ' + planetName;

// ************ TENTATIVA DE CRIAR O RANKING DE MAIS PESQUISADO **************** // 


/* Variaveis para a tentativa do top list
    let vote = 0;
    let filtro = JSON.parse(localStorage.getItem('value'));
*/    

/*
    // For para filtrar o nome e os votos, vendo pelo tamanho dos mesmos
    for(var i = 0; i < filtro.length; i++){		
        var nome = filtro[i].Nome
        var vote = filtro[i].Votes
    }

    // Se localStorage retornar um valor nulo, entrar no SE
    if(localStorage.getItem("value") == null ){
        
        // criando variavel: name_1 = vazia
        var name_1 = [];	        

        // criando variavel: p = nome: resultado da pesquisa e voto: 1
        var p = {
            Nome : data.result[0].name,
            Votes: 1
        }

        // atribuindo o valor da variável "p" para a variavel name_1 que estava vazia
        name_1.push(p);
        name_1.sort(function(a,b){
            return a.vote - b.vote;
        })

        // armazena no Localstorage
        localStorage.setItem('value', JSON.stringify(name_1));
                   
        // criando e atribuindo a variavel tbody o o valor do documento tbodyResultados
        let tbody = document.getElementById("tbodyResultados");

        // tbody dentro de html está mostrando que tem duas colunas e criando uma nova linha toda vez que uma consulta for realizada.
        tbody.innerHTML += '<tr id="rowTable'+i+'">'+
        '<td>'+nome+'</td>'+
        '<td>'+"    "+'</td>'+
        '<td>'+vote+'</td>';    
        
    }
    // SENAO
    else{
        
        // tbody dentro de html está mostrando que tem duas colunas e criando uma nova linha toda vez que uma consulta for realizada.
        let tbody = document.getElementById("tbodyResultados");

        tbody.innerHTML += '<tr id="rowTable'+i+'">'+
        '<td>'+nome+'</td>'+
        '<td>'+"    "+'</td>'+
        '<td>'+vote+'</td>';
                
    }*/

}                 


// Função updatePlanetInfo
function updatePlanetInfo(data){

    // Recebendo o nome do planet que está localizado dentro da página Homeworld
    planetName = data.name

}


// Função para reportar caso ocorra algum erro
function updateInfoWithError(){

    // Alerta com a mensagem de erro
    alert("Sorry, an error occurred while looking for a character, try to find it again !!")
    
}

// Função que contém o carregamento das informações
function updateWithLoading(){

    // ID HTML recebendo a animação de carregamento, em quanto as outras ficam vazias.
    name.innerHTML      = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
    height.innerText    = ''
    mass.innerText      = ''
    birthYear.innerText = '' 
    hairColor.innerText = ''
    skinColor.innerText = ''
    gender.innerText    = '' 
    homeworld.innerText = ''

}

// exportando a funçao getInfo
module.exports = getInfo;
