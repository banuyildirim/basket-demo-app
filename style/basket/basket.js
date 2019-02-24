
import data from '../../json/menu.json';
const states = {
    result: data.d.ResultSet
}
const $obj = {
    btnAddBasket: document.getElementsByClassName('js-add-product')
}

const productsArray = new Array();
const basketArray = new Array();

states.result.map((value) => {
    for (let i = 0; i < value.Products.length; i++) {
        productsArray.push(value.Products[i]);
    }
});

function filterViaCategory(arr, category) {
    return arr.filter((obj) => {
        if (obj.ProductId === category) {
            return true;
        }
        return false;
    });
}

const tableTemplate = (values) => `<table border='1' width='100%'><tr>
    ${ values.map(value => 
    `<td align='center'>${value.DisplayName} </td>`
    ).join(' ') }</tr></table>`;

document.getElementsByClassName('items').innerText = "";

Object.entries($obj.btnAddBasket).map(( object ) => {
    object[1].addEventListener("click", function() {
        basketArray.push((filterViaCategory(productsArray, this.dataset.id)));
        console.log(basketArray);
        setTimeout(() => {
            document.getElementsByClassName('items').innerText = tableTemplate(basketArray);
        }, 3000);
    });
});

