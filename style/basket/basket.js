
import data from '../../json/menu.json';
const states = {
    result: data.d.ResultSet
}
const $obj = {
    btnAddBasket: document.getElementsByClassName('js-add-product'),
    basketSection: document.getElementsByClassName('basket-box__items')[0],
    basketNote: document.getElementById('basket-box__note')
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

$obj.basketSection.innerHTML = '';
$obj.basketNote.style.display = 'block';
Object.entries($obj.btnAddBasket).map(( object ) => {
    object[1].addEventListener("click", function() {
        basketArray.push((filterViaCategory(productsArray, this.dataset.id)));
        let templater = "<div>";
        for (let i = 0; i < basketArray.length; i++){
            templater += `<table><tr>
            <td>${basketArray[i][0].DisplayName}</td><td><input type='text' class='product__count' value='1' /></td><td>${basketArray[i][0].ListPrice}</td>`; } templater += "</tr></table>";
        $obj.basketSection.innerHTML = templater;
        $obj.basketNote.style.display = 'none';
    });
});

