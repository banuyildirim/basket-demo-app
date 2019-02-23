
import data from '../../json/restoran.json';

const $obj = {
    data: data.d.ResultSet,
    detailTemplate: document.getElementById('js-name')
}

$obj.detailTemplate.innerHTML = `${$obj.data.DisplayName}`;