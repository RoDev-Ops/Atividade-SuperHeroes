Rodrigo Mello | RA: 10409316

<h1 style="text-align:center">Atividade SuperHeroes</h1>

### OBJETIVO

Reconstrua a seguinte aplicação utilizando NextJS
https://codepen.io/joaquimp/pen/RwaYrYo

## 

## Como Ficou: 
![printDaTela](./public/paginaFinal.png)

## Código Explicado:

Este componente React exibe informações sobre super-heróis utilizando a API SuperHero. Ele importa as dependências necessárias (Estado do react é o CSS Global) e define uma função principal que será exportada como o componente padrão.

Dentro do componente, há uma função assíncrona que busca dados de super-heróis a partir de um código específico. Esta função constrói a URL da API usando um token de autenticação e o código do herói, faz uma requisição HTTP e processa a resposta JSON. Os dados do herói são então renderizados em um elemento HTML, incluindo uma imagem, nome e estatísticas de inteligência e força, representadas por barras de progresso estilizadas.

    async function getSuperHeroData(code) {
        const token = '64ac5074f4f93aad5aaefff350160580';
        const baseUrl = "https://superheroapi.com/api.php/" + token + "/";
        const url = baseUrl + code;
        const response = await fetch(url);
        const data = await response.json();
        return (
          <div id="heroes">
            <article>
              <img src={data.image.url} alt={data.name} />
              <h1>{data.name}</h1>
              <p>
              intelligence:  <span style={{width:`${data.powerstats.    intelligence}`+'%', background:"#F9B32F"}} ></span>
              </p>

              <p>
              strength:  <span style={{width:`${data.powerstats.strength}`  +'%', background:"#FF7C6C"}} ></span>

              </p>
            </article>
          </div>
        );
    }


O componente utiliza dois estados locais para armazenar os dados de dois super-heróis diferentes. Quando o componente é montado, um efeito colateral é executado para buscar os dados dos heróis usando a função assíncrona definida anteriormente. Os dados obtidos são armazenados nos estados locais.

    const [hero1, setHero1] = React.useState(null);
    const [hero2, setHero2] = React.useState(null);

    React.useEffect(() => {
        async function fetchData() {
            const hero1Data = await getSuperHeroData(200);
            const hero2Data = await getSuperHeroData(465);
            setHero1(hero1Data);
            setHero2(hero2Data);
        }
        fetchData();
    }, []);


Finalmente, o componente retorna um elemento HTML que exibe os dados dos dois super-heróis lado a lado, utilizando um contêiner flexível para layout.

    return (
        <div style={{ display: "flex" }}>
          {hero1}
          {hero2}
        </div>
    );