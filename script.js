
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
        console.log (dados.data[i].name); 
        option = new Option(dados.data[i].name, dados.data[i].id);
        frutas.options[frutas.options.length] = option;
        option.innerHTML = dados.data[i].name; 
   }
}
xhttpAssincrono(carregarSelect,1,null);

function gerarInformacao(response) {
    let cards = document.getElementById("cardid");
    let dados = JSON.parse(response);
    let pathimg = dados.data[0].imageUrl;
    var img = document.createElement('img');
    img.src=pathimg; 
    img.class="card-img-top";
    
    console.log(pathimg);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    let title = document.createElement('h5');
    title.className = 'card-title';    
    title.innerHTML = dados.data[0].name;

    let infor = document.createElement('p');
    infor.class="card-text"
    infor.innerHTML = dados.data[0].films[0];
    
    cards.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(infor);
    cards.appendChild(cardBody);
}
xhttpAssincrono(gerarInformacao,1,null);