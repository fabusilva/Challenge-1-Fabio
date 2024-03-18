const hora = document.getElementById("hora_atual");
const min = document.getElementById("min_atual");
const diaSemana = document.getElementById("dia_semana");
const diaMes = document.getElementById("dia_mes");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

const cidade = document.getElementById("cidade");
const grau = document.getElementById("grau");

const apiKey = "3f70ae60bae19009e720294eaa655fa0"
setInterval(() =>{
    let data = new Date();
    let semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

    let hr = data.getHours();
    let mn = data.getMinutes();
    let ds = semana[data.getDay()];
    let d = data.getDate()
    let m = meses[data.getMonth()];
    let a = data.getFullYear();
    hora.innerHTML = `${formatTime(hr)}`;
    min.innerHTML = `${formatTime(mn)}`;
    diaSemana.innerHTML = `${ds}`;
    diaMes.innerHTML = `${formatTime(d)}`;
    mes.innerHTML = `${m}`;
    ano.innerHTML = `${a}`;

}, 1000)
function formatTime(time){
    return time < 10 ? '0' + time : time;
}

function pegarCidadeURL(palavraChave) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == palavraChave) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return JSON.parse(decodeURIComponent(param_value));   
    }   
    else {   
        return undefined;   
    }   
}
const apiTempo = async(cidadeBusca) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeBusca}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
        cidade.innerHTML = "Error getting city data"
        grau.innerHTML ="N/A"
        throw new Error('Erro ao obter dados da API');
    }
    console.log(data)
    cidade.innerHTML = data.name;
    grau.innerHTML = parseInt(data.main.temp)
}

var cidadeURL = pegarCidadeURL("city");
apiTempo(cidadeURL);