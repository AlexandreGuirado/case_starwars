// O teste foi realizado com yarn. Para rodar, digite no Terminal: yarn test

// Exportando a funçao getInfo de script/app_People.js

const getInfo = require('./scripts/app_People.js')

//Descrição do Test
describe(getInfo, () => {

    // Falando para que o teste deve filtrar por um termo de pesquisa
    test.todo("it should filter by a search term (https://swapi.dev/api/people)"), () => {
        
    // Dando input na entrada esperada
        const input = [
          { id: 1, url: "https://swapi.dev/api/people" },         
        ];
    
        // Resultado esperado 
        const output = [{ id: 1, url: "https://swapi.dev/api/people" }];
    
        // Filtrando por link minusculo
        expect(filterByTerm(input, "link")).toEqual(output);
        // Filtrando por link maiusculo
        expect(filterByTerm(input, "LINK")).toEqual(output);
      };   
  });

  // Criando uma expressão que não diferencia maiusculas de minusculas
  function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }