function closePhoto(e){
    if(e.target.tagName == "A"){
        console.log(e.target);
        document.body.removeChild(document.querySelector('.overlay'));
    }
}

function openPhoto(e){
    if(e.target.tagName!= 'IMG') return;
    let src = e.target;
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    let wrap = document.createElement('div');
    wrap.className = 'overlay-wrapper';
    let span = document.createElement('span');
    span.innerHTML = "&#10006;";
    let img = new Image();
    img.src = src.dataset.full;
    wrap.append(img);
    wrap.append(span);
    overlay.append(wrap);
    document.body.append(overlay);
    span.onclick = function(e){
        overlay.remove();
    }
};



export  default openPhoto;