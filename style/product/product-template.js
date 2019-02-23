
import data from '../../json/menu.json';

const $obj = {
    productTemplate: document.getElementById('js-product-template')
}

const states = {
    result: data.d.ResultSet
}

const htmlTemplate = (values) => `<article>
    ${ values.map(value => 
        `<div class='product' id=${value.Oid}><div class='product__head'> <h2>${value.CategoryDisplayName} </h2></div><div class='product__content'>
        <ul>${value.Products.map(el => `<li><div class='product__actions'><input type='text' class='product__count' data-id=${el.ProductId} value='1' /><button class='btn-primary js-add-product' type='button' data-id=${el.ProductId}>+</button></div><div class='product__info'> <div class='product__info--middle' data-id=${el.ProductId}>${el.DisplayName}</div> <div class='product__info--small'>${el.Description}</div></div><div class='product__price'>${el.ExtendedPrice}</div></li>`
        ).join(' ')}</ul>
        </div></div>`
    ).join(' ') }</article>`;

const template = htmlTemplate(states.result);
$obj.productTemplate.innerHTML = template;


