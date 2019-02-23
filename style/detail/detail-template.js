
import data from '../../json/restoran.json';

const $obj = {
    detailTemplate: document.getElementById('js-detail-template'),
    detailBoxPoint: document.getElementsByClassName('detail-box__point')
}

const states = {
    result: data.d.ResultSet
}

const htmlTemplate = `<article>
    <div class='detail-box'>
        <div class='detail-box__rating'> 
            <div class='detail-box__head'><h2>Restoran Puanları</h2></div>
            <div class='detail-box__point'>Hız <br> <span>${states.result.Speed} </span></div>
            <div class='detail-box__point'>Lezzet <br> <span>${states.result.Flavor} </span></div>
            <div class='detail-box__point'>Servis <br> <span>${states.result.Serving}</span></div>
        </div>
        <div class='detail-box__short-info'> 
            <div><h2>Minimum Paket Tutarı</h2> <span>${states.result.DeliveryAreas[0].MinimumPrice} TL</span></div>
            <div><h2>Servis Süresi </h2> <span>${states.result.DeliveryTime} dk.</span></div>
            <div><h2>Çalışma Saatleri </h2> <span>${states.result.WorkingHours[0].WorkingHours}</span></div>
        </div>
        <div class='detail-box__image'> 
            <img src='../../images/demo-image.gif' width='120'/>
        </div>
    </div>
    </article>`;

$obj.detailTemplate.innerHTML = htmlTemplate;