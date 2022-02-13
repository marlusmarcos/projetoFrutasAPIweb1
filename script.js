
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
    url += value;
    break;
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function carregarSelect (response) {
    frutas = document.getElementById("frutasid");
    let dados = JSON.parse(response);
    var tam = dados.data.length;
    for(i = 0; i < tam; i++) {
        //console.log (dados.data[i].name); 
        option = new Option(dados.data[i].name, dados.data[i].id);
        frutas.options[frutas.options.length] = option;
        option.innerHTML = dados.data[i].name; 
   }
}
xhttpAssincrono(carregarSelect,1,null);

function gerarInformacao(response) {
    var cards = document.getElementById("cardid");
    let dados = JSON.parse(response);

    for(i = 0; i < dados.data.length; i++) {
        var cardMain = document.createElement('div');
        cardMain.className="card";
        cardMain.style="width: 18rem;";
        
        let pathimg = dados.data[i].imageUrl;
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
        title.innerHTML = dados.data[i].name;

        let infor = document.createElement('p');
        infor.class="card-text"
        if (dados.data[i].films[0] != null ) {
            infor.innerHTML = dados.data[i].films[0];
        } else {
            infor.innerHTML = "sem filmes";
        }

        let bntMostrar = document.createElement('button');
        bntMostrar.type="button";
        bntMostrar.className = "btn btn-primary";
        bntMostrar.innerText = "mostrar informações";
        bntMostrar.onclick=exibirUnico();
        cardMain.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(infor);
        cardMain.appendChild(cardBody);
        cardMain.appendChild(bntMostrar)
        cards.appendChild(cardMain);
    }
}

xhttpAssincrono(gerarInformacao,1,null);


function exibirUnico() {
    console.log("exibindo unico");
}

