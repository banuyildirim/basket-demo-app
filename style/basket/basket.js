/* add to basket product*/

import data from '../../json/menu.json';

const states = {
    result: data.d.ResultSet
};

const $obj = {
    btnAddBasket: document.getElementsByClassName('js-add-product'),
    basketSection: document.getElementsByClassName('basket-box-list')[0],
    basketNote: document.getElementById('basket-box__note')
};

const productsArray = new Array();
const basketArray = new Array();

states.result.map((value) => {
    for (let i = 0; i < value.Products.length; i++) {
        productsArray.push(value.Products[i]);
    }
});

function filterData(arr, data) {
    return arr.filter((obj) => {
        if (obj.ProductId === data) {
            return true;
        }
        return false;
    });
};

function getSum(total, num) {
    return total + num;
};

$obj.basketSection.innerHTML = '';
$obj.basketNote.style.display = 'block';
Object.entries($obj.btnAddBasket).map(( object ) => {
    object[1].addEventListener("click", function() {
        basketArray.push((filterData(productsArray, this.dataset.id)[0]));
        let templater = "";
        let price = [];
        if(templater == ""){
            for (let i = 0; i < basketArray.length; i++){
                price.push(parseFloat((basketArray[i].ListPrice).replace(',','.')));
                templater += `<tr id="product${i}">
                <td class="basket-box-list__name">${basketArray[i].DisplayName}</td><td><input type='text' class='product__count product-add-count' value='1' id="${i}"/></td><td id="price${i}" class="basket-box-list__price">${parseFloat((basketArray[i].ListPrice).replace(',','.'))} TL</td>`;
            } templater += "</tr><tr><td>Toplam</td><td></td><td id='js-total-value' class='basket-box-list__total'></td></tr>";
        }
        $obj.basketSection.innerHTML = templater;
        $obj.basketNote.style.display = 'none';
        document.getElementById('js-total-value').innerHTML = price.reduce(getSum) + " TL";
        let control = true;
        Object.entries(document.getElementsByClassName('product-add-count')).map(( object ) => {
            object[1].addEventListener('focusout', function(e) {
                let deger = [];
                for(var i=0; i < basketArray.length; i++){
                    if(parseInt(this.id) == i && control != false){
                        document.getElementById("price" + i).innerHTML = parseInt(this.value) * parseFloat(basketArray[i].ListPrice.replace(',','.')) + " TL";
                    }
                    if (control != false){
                        deger.push((parseFloat(basketArray[i].ListPrice.replace(',','.')) * document.getElementById(i).value));
                        document.getElementById('js-total-value').innerHTML = deger.reduce(getSum) + " TL";
                    }
                }
                control = !control;
                e.preventDefault();
            });
        });
    });
});
