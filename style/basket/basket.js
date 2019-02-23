
let xx = document.getElementsByClassName('js-add-product');
import data from '../../json/menu.json';
const states = {
    result: data.d.ResultSet
}

let items = document.getElementsByClassName('items');
Object.entries(xx).map(( object ) => {
    object[1].addEventListener("click", function() {
        if(this.dataset.id ==! states.result[0].Products[0].ProductId){
            console.log('cbjbcd');
        }
    });
});