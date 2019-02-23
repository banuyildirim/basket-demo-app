
import data from '../../json/restoran.json';

const $obj = {
    detailTemplate: document.getElementById('js-name')
}

const states = {
    result: data.d.ResultSet,
}

$obj.detailTemplate.innerHTML = `${states.result.DisplayName}`;