//main.js

import '../style/detail/detail-template';
import '../style/product/product-template';
import '../style/tab/tab';

const $obj = {
    btnClick: document.getElementsByClassName('js-add-product')
}

$obj.btnClick.onclick = () => {
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());
    value = value + 1;
    $input.val(value);
    console.log(value);
};



