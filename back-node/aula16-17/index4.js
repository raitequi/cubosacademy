const fs = require("fs")
const csvParser = require("csv-parser") //instalar via npm install csv-parser, antes
const createCsvWriter = require('csv-writer').createObjectCsvWriter; //instalar via npm install

const stream = fs.createReadStream("countries.csv")

//stream.pipe(csvParser()) //a função PIPE vai jogando os dados pouco a pouco

let conteudo = [] //lista vazia que vai armazenar a saída de countries.csv

stream.pipe(csvParser()).on('data', (data) => {
    conteudo.push({
        id: conteudo.length +1,
        Country: data['Country'].trim(),
        Region: data['Region'].trim(),
        Population: Number(data['Population']),
        'Pop. Density (per sq. mi.)': Number(data['Pop. Density (per sq. mi.)'].replace(',', '.')),
        'Coastline (coast/area ratio)': Number(data['Coastline (coast/area ratio)'].replace(',', '.')),
        'Net migration': Number(data['Net migration'].replace(',', '.')),
        'Infant mortality (per 1000 births)': Number(data['Infant mortality (per 1000 births)'].replace(',', '.')),
        'GDP ($ per capita)': Number(data['GDP ($ per capita)'].replace(',', '.')),
        'Literacy (%)': Number(data['Literacy (%)'].replace(',', '.')),
        'Phones (per 1000)': Number(data['Phones (per 1000)'].replace(',', '.')),
        'Birthrate': Number(data['Birthrate'].replace(',', '.')),
        'Deathrate': Number(data['Deathrate'].replace(',', '.')),
        'Agriculture': Number(data['Agriculture'].replace(',', '.')),
        'Industry': Number(data['Industry'].replace(',', '.')),
        'Service': Number(data['Service'].replace(',', '.')),
    })
    console.log(conteudo[0]) 
})

stream.on('end', () => {
    const csvWriter = createCsvWriter({
        path: 'paises.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'Country', title: 'pais'},
            {id: 'Region', title: 'regiao'},
            {id: 'Population', title: 'populacao'},
            {id: 'Pop. Density (per sq. mi.)', title: 'densidade_populacional'},
            {id: 'Coastline (coast/area ratio)', title: 'area_costeira'},
            {id: 'Net migration', title: 'taxa_migratoria'},
            {id: 'Infant mortality (per 1000 births)', title: 'mortalidade_infantil'},
            {id: 'GDP ($ per capita)', title: 'pib'},
            {id: 'Literacy (%)', title: 'alfabetizacao'},
            {id: 'Phones (per 1000)', title: 'telefonia_movel'},
            {id: 'Birthrate', title: 'taxa_natalidade'},
            {id: 'Deathrate', title: 'taxa_mortalidade'},
            {id: 'Agriculture', title: 'agricultura_porcentagem'},
            {id: 'Industry', title: 'industria_porcentagem'},
            {id: 'Service', title: 'servicos_porcentagem'},
        ]
    });
    csvWriter.writeRecords(conteudo)
    .then(() => {
        console.log('...Feito! Convertido para paises.csv');
    });
})

