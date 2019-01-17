import css from "./style.css";
import getRandom from "./random";
import search from "./searchPhotos";
import render from "./renderWrap";
import openPhoto from "./openPhoto.js";

const accessKey = `52c3d62dc6f33bff0dac38c7059d6db1a145860ada7ef777194f7653ab8161e7`;
const wrapper = document.querySelector('main .wrapper');

let req = search(accessKey, 'car', wrapper);
req.then((data)=> console.log(data));

document.getElementById('searchButton').addEventListener('click', function(e){
    e.preventDefault();
    // Лучше использовать const, вместо let, где можно
    let searchElem = document.getElementById('mainSearch');
    let value = searchElem.value;
    search(accessKey, value, wrapper);
    searchElem.value = '';
});

window.addEventListener('load', function(){
    getRandom(accessKey, wrapper);
});

document.addEventListener('click', openPhoto);