'use client';
import React from 'react';
import './globals.css'
export default function Home() {

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
          intelligence:  <span style={{width:`${data.powerstats.intelligence}`+'%', background:"#F9B32F"}} ></span>
          </p>

          <p>
          strength:  <span style={{width:`${data.powerstats.strength}`+'%', background:"#FF7C6C"}} ></span>
            
          </p>
        </article>
      </div>
    );
  }

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

  return (
    <div style={{ display: "flex" }}>
      {hero1}
      {hero2}
    </div>
  );
}