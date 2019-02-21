//main.js

import data from '../json/menu.json';

const $obj = {
    category: ''
}

for (let i = 0; i < data.d.TotalRowCount; i++) {
    $obj.category += data.d.ResultSet[i].CategoryDisplayName;
}

console.log($obj.category);

