const hora = document.getElementById("hora_atual");
const min = document.getElementById("min_atual");
const diaSemana = document.getElementById("dia_semana");
const diaMes = document.getElementById("dia_mes");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

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