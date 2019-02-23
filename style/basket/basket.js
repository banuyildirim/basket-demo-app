
import data from '../../json/menu.json';
const states = {
    result: data.d.ResultSet
}
let btnAddBasket = document.getElementsByClassName('js-add-product');
const productsArray = [];
states.result.map((value) => {
    productsArray.push(value.Products);
});
console.log(productsArray);

Object.entries(btnAddBasket).map(( object ) => {
    object[1].addEventListener("click", function() {
        const res2 = productsArray.filter((item) => {
            return item.ProductId === this.dataset.id;
        });
        console.log(res2);
    });
});