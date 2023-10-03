document.body.style.backgroundColor="grey";
document.body.style.color="orange";

let headingDOM = document.querySelector('#heading')
let greetingDOM = document.querySelector('#greeting')
let dateDOM = document.querySelector('#date')
let infoDOM = document.querySelector('#info')
let name=prompt()

headingDOM.innerHTML="KODLUYORUZ"
greetingDOM.innerHTML=`Merhaba, ${name}! Hoş Geldin!`

const now = new Date(); const day = now
function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    dateDOM.innerHTML = date;
}

setInterval(tarihSaat, 1000);
tarihSaat()
let text="Kodluyoruz Frontend Web Development Patikası"
infoDOM.innerHTML=`tarihinde ${text}'nın Javascript bölümü 1. Ödevindesiniz`