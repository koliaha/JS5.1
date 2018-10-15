let n = document.getElementsByClassName('menu-item');
let five = document.createElement('li'),
    upl = document.querySelector('.menu'),
    col = document.getElementsByClassName('column'),
    ad = document.getElementsByClassName('adv'),
    title = document.getElementById('title'),
    prom = document.getElementById('prompt');

five.classList.add('menu-item');
upl.appendChild(five);
upl.insertBefore(n[2],n[1]);
col[1].removeChild(ad[0]);
five.innerHTML = 'Пятый пункт';

let stroka = title.innerText.split(' '),
podlin = 'подлинную';
stroka.splice(3,0,podlin);
title.innerText = stroka.join(' ');
let ans = prompt('Apple любишь?');
prom.innerText = ans;
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
