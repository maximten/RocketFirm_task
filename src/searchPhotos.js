import getImg from "./getImg";
import renderWrap from "./renderWrap";

function add(obj, wrapper){
    wrapper.innerHTML = '';
    let arr = obj.results;

    arr.forEach((index) =>{
        let container = renderWrap(index.urls.small, index.urls.raw);
        wrapper.append(container);
    });
}

function search(access, key, wrapper){
    return getImg(`https://api.unsplash.com/search/photos?query=${key}&client_id=${access}`)
        .then((data)=>{
            add(data, wrapper);
        });
}
export default search;