function renderWrap(small, full){
    let item = document.createElement('div');
    item.className = 'item';
    
    let photo = document.createElement('div');
    photo.className = 'photo';
    
    let img = new Image();
    img.src = small;
    img.dataset.full = full;
   
    photo.append(img);
    item.append(photo);
    return item;
}



export default renderWrap;