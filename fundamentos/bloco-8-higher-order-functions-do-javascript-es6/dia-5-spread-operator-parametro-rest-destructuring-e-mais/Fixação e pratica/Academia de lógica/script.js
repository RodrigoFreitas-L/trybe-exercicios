// Dado um arquivo com dados de regiões, estados e cidades, crie uma função (mapCities) que retorna um objeto no qual as chaves são as siglas das regiões  (N, NE, CW, SE e S) e os valores são arrays compostos por objetos com o nome da cidade e o nome do estado.

const expectedResult =  {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ]
}

const regions = [
    { short: 'N', name: 'Norte' },
    { short: 'NE', name: 'Nordeste' },
    { short: 'CW', name: 'Centroeste' },
    { short: 'SE', name: 'Sudeste' },
    { short: 'S', name: 'Sul' },
];

const states = [
    { short: 'AM', name: 'Amazonas' },
    { short: 'PA', name: 'Pará' },
    { short: 'TO', name: 'Tocantins' },
    { short: 'MG', name: 'Minas Gerais' },
    { short: 'BA', name: 'Bahia' },
    { short: 'PR', name: 'Paraná' },
    { short: 'SP', name: 'São Paulo' },
    { short: 'RN', name: 'Rio Grande do Norte' },
    { short: 'CE', name: 'Ceará' },
];

const cities = [
    { state: 'AM', name: 'Manaus', region: 'N' },
    { state: 'PA', name: 'Belém', region: 'N' },
    { state: 'TO', name: 'Porto Nacional', region: 'N' },
    { state: 'MG', name: 'Lavras', region: 'SE' },
    { state: 'BA', name: 'Feira de Santana', region: 'NE' },
    { state: 'PR', name: 'Cascavel', region: 'S' },
    { state: 'SP', name: 'Presidente Prudente', region: 'SE' },
    { state: 'RN', name: 'Touros', region: 'NE' },
    { state: 'CE', name: 'Jericoacoara', region: 'NE' },
];

// module.exports = {
//     regions,
//     states,
//     cities,
// };

const mapCities = () => {
    return cities.reduce((citiesWithRegion, currentCity) => {

        if (!citiesWithRegion[currentCity.region]) {
            citiesWithRegion[currentCity.region] = [];
        }

        const newState = states.find((state) => state.short === currentCity.state);

        const newObject = {
            city: currentCity.name,
            state: newState.name,
        }

        citiesWithRegion[currentCity.region].push(newObject);

        return citiesWithRegion;
    }, {});
}

console.log(mapCities());