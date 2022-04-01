// 1. Consumir la API que prefieras (Swapi, Pokeapi)
// 2. Carga el listado de personajes (1ra página)
// 3. Crear un diseño de tarjetas (cards) para cada personaje usando Bootstrap
// https://getbootstrap.com/docs/5.1/components/card/
// 4. Agregar un input que permit a la busqueda de un personaje de los cargados en la página
// 5. El input puede ser activador por medio de la escritura o por medio de un botón

// PUNTOS EXTRAS:
// 1. Guardar una tarjeta como favorito (agregar estrella)
// 2. Si guardo un favorito, que aparezca una fila extra sobre los resultados de busqueda o repsuesta de la API con los favoritos

const marvel= {
    render: ()=> {
        const urlAPI= 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=860043ae82babbb67ea5a1b54a27a2a9&hash=751bcfa62e0acd81b3d3aa4712d8f40f';
        const container= document.querySelector('#marvel-row');
        let contentHTML= '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            for( const hero of json.data.results){
                let urlHero= hero.urls[0].url;
                contentHTML+= `                
                <div class="card container mt-right mt-2 mb-2 rounded border border-5 border-warning" style="width: 18rem;">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="img-thumbnail" alt="${hero.name}">
                    <div class="card-body g-col-6 g-col-md-4">
                        <h5 class="card-title">${hero.name}</h5>
                        <p class="card-text"></p>
                        <a href="${urlHero}" class="btn btn-primary" target="_blank">See hero</a>
                    </div>
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

