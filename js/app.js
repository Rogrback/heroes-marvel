// import fetch from "node-fetch";
// import fetch from 'cross-fetch';
// globalThis.fetch = fetch

const marvel= {
    render: ()=> {
        // const urlAPI= 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=860043ae82babbb67ea5a1b54a27a2a9&hash=751BCFA62E0ACD81B3D3AA4712D8F40F';        
        // const urlAPI= 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=860043ae82babbb67ea5a1b54a27a2a9&hash=751BCFA62E0ACD81B3D3AA4712D8F40F';
        // const urlAPI= 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=860043ae82babbb67ea5a1b54a27a2a9&hash=751BCFA62E0ACD81B3D3AA4712D8F40F';
        const urlAPI= 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=860043ae82babbb67ea5a1b54a27a2a9&hash=751bcfa62e0acd81b3d3aa4712d8f40f';
        const container= document.querySelector('#marvel-row');
        let contentHTML= '';

        // fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=860043ae82babbb67ea5a1b54a27a2a9&hash=751BCFA62E0ACD81B3D3AA4712D8F40F')
        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for( const hero of json.data.results){
                let urlHero= hero.urls[0].url;
                contentHTML+= `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="tittle">
                        ${hero.name}
                    </h3>
                </div>`;                
            }
            container.innerHTML= contentHTML;
        })
    }
};

marvel.render();

// 1d8f3eec530a1d69c57f9f56bf246fd09e6542e08860043ae82babbb67ea5a1b54a27a2a9
// 751BCFA62E0ACD81B3D3AA4712D8F40F


// 1d8f3eec530a1d69c57f9f56bf246fd09e6542e08860043ae82babbb67ea5a1b54a27a2a9
// 751BCFA62E0ACD81B3D3AA4712D8F40F

