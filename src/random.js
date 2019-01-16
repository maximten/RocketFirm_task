import getImg from './getImg';
import renderWrap from './renderWrap';

function add(arr, wrapper){
    wrapper.innerHTML = '';
    arr.forEach((index) =>{
      let container = renderWrap(index.urls.small, index.urls.raw);
      wrapper.append(container);
    });
};

function randomPhoto(access, wrapper){
    let count = 12;
    getImg(`https://api.unsplash.com/photos/random?count=${count}&client_id=${access}`)
        .then((res)=> {
            console.log(res);
            add(res, wrapper);
        });
}

export default randomPhoto;