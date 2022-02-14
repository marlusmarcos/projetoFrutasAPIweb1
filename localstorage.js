
function xhttpAssincrono(callBackFunction, type, value) {
    var xhttp = new XMLHttpRequest();;
    xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    // Chama a função em callback e passa a resposta da requisição
    callBackFunction(this.responseText);
    }
    };
    // Path para a requisição AJAX.
    var url = "https://api.disneyapi.dev/characters";
    switch (type) {
    case 1:
        url += ""
    break;
    case 2:
    url += "/"+value;
    break;
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function contarFavorito(id, nome) {
    localStorage.setItem(id, nome);
    //listarFavotitos();
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( keys[i]);
    }

    return values;
}
function buscarFavotitos () {
    valores = allStorage();
    for (i = 0; i < valores.length; ++i) {
        xhttpAssincrono (listarFavotitos, 2,  valores[i]);
    }
}

function listarFavotitos (response) {
    var cards = document.getElementById("cardidfav");
    let dados = JSON.parse(response);

    var cardMain = document.createElement('div');
        cardMain.className="card";
        cardMain.style="width: 18rem;";
        
        let pathimg = dados.imageUrl;
        var img = document.createElement('img');
        img.src=pathimg; 
        img.className="card-img-top";
    
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.style ="margin-left: 0px;";
        cardBody.style ="margin-right: 0px;";
        cardBody.style = "width = 100%;";

        let title = document.createElement('h5');
        title.className = 'card-title';    
        title.innerHTML = dados.name;

        let infor = document.createElement('p');
        infor.class="card-text"
        var filmestitulo = document.createElement("ul");
        filmestitulo.innerHTML = "Filmes:";
        cardBody.appendChild(filmestitulo);
        for (i = 0; i < dados.films.length; i++) {
            var filmes = document.createElement("li");
            filmes.innerHTML += (dados.films[i]);
            cardBody.appendChild (filmes);
        }

        cardMain.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(infor);
        cardMain.appendChild(cardBody);
        
        cards.appendChild(cardMain);


    
}
