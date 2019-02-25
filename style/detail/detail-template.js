/*restoran detail information. Speed, Flavor exc.*/

import data from '../../json/restoran.json';

const $obj = {
    detailTemplate: document.getElementById('js-detail-template'),
    detailBoxPoint: document.getElementsByClassName('detail-box__point'),
    companyName: document.getElementById('js-name')
};

const states = {
    resultDetail: data.d.ResultSet
};

const htmlTemplate = `<article>
    <div class='detail-box'>
        <div class='detail-box__rating'> 
            <div class='detail-box__head'><h2>Restoran Puanları</h2></div>
            <div class='detail-box__point'>Hız <br> <span>${states.resultDetail.Speed} </span></div>
            <div class='detail-box__point'>Lezzet <br> <span>${states.resultDetail.Flavor} </span></div>
            <div class='detail-box__point'>Servis <br> <span>${states.resultDetail.Serving}</span></div>
        </div>
        <div class='detail-box__short-info'> 
            <div><h2>Minimum Paket Tutarı</h2> <span>${states.resultDetail.DeliveryAreas[0].MinimumPrice} TL</span></div>
            <div><h2>Servis Süresi </h2> <span>${states.resultDetail.DeliveryTime} dk.</span></div>
            <div><h2>Çalışma Saatleri </h2> <span>${states.resultDetail.WorkingHours[0].WorkingHours}</span></div>
        </div>
        <div class='detail-box__image'> 
            <img src='../../images/demo-image.gif' width='120'/>
        </div>
    </div>
    </article>`;

$obj.detailTemplate.innerHTML = htmlTemplate;

$obj.companyName.innerHTML = `${states.resultDetail.DisplayName}`;