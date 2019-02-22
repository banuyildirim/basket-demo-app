
import data from '../json/menu.json';

const objects = data.d.ResultSet;
let domTemplate = document.getElementById('js-template');

const htmlTemplate = (values) => `<article>
    ${ values.map(value => 
        `<div class='product' id=${value.Oid}><div class='product__head'> <h2>${value.CategoryDisplayName} </h2></div><div class='product__content'>
        <ul>${value.Products.map(el => `<li><div class='product__actions'><input type='text' class='product__count' data-product-id=${el.ProductId} value='1' /><button class='btn-primary' type='button' data-product-id=${el.ProductId}>+</button></div><div class='product__info'> <div class='product__info--middle'>${el.DisplayName}</div> <div class='product__info--small'>${el.Description}</div></div><div class='product__price'>${el.ExtendedPrice}</div></li>`
        ).join(' ')}</ul>
        </div></div>`
    ).join(' ') }</article>`;

const template = htmlTemplate(objects);
domTemplate.innerHTML = template;


