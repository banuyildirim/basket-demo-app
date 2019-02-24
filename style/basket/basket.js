
import data from '../../json/menu.json';
const states = {
    result: data.d.ResultSet
}
const $obj = {
    btnAddBasket: document.getElementsByClassName('js-add-product'),
    basketSection: document.getElementsByClassName('basket-box-list')[0],
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

function getSum(total, num) {
    return total + num;
}

let price = [];
$obj.basketSection.innerHTML = '';
$obj.basketNote.style.display = 'block';
Object.entries($obj.btnAddBasket).map(( object ) => {
    object[1].addEventListener("click", function() {
        basketArray.push((filterViaCategory(productsArray, this.dataset.id)[0]));
        let templater = "";
        for (let i = 0; i < basketArray.length; i++){
            price.push(parseFloat((basketArray[i].ListPrice).replace(',','.')));
            templater += `<tr>
            <td class="basket-box-list__name">${basketArray[i].DisplayName}</td><td><input type='text' class='product__count' value='1' /></td><td class="basket-box-list__price">${basketArray[i].ListPrice} TL</td>`;} templater += "</tr><tr><td>Toplam</td><td></td><td id='js-total-value' class='basket-box-list__total'></td></tr>";
        $obj.basketSection.innerHTML = templater;
        $obj.basketNote.style.display = 'none';
        console.log(price);
        document.getElementById('js-total-value').innerHTML = price.reduce(getSum) + " TL";
        price = [];
    });
});

