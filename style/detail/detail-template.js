
import data from '../../json/restoran.json';

const $obj = {
    data: data.d.ResultSet,
    detailTemplate: document.getElementById('js-detail-template')
}

const htmlTemplate = `<article>
    <div class='detail-box'>
        <div class='detail-box__rating'> 
            <div class='detail-box__head'><h2>Restoran Puanları</h2></div>
            <div class='detail-box__point'>Hız <br> <span>${$obj.data.Speed} </span></div>
            <div class='detail-box__point'>Lezzet <br> <span>${$obj.data.Flavor} </span></div>
            <div class='detail-box__point'>Servis <br> <span>${$obj.data.Serving}</span></div>
        </div>
        <div class='detail-box__short-info'> 
            <div><h2>Minimum Paket Tutarı</h2> ${$obj.data.DeliveryAreas[0].MinimumPrice} TL</div>
            <div><h2>Servis Süresi <br>(Ortalama)</h2> ${$obj.data.DeliveryTime} dk.</div>
            <div><h2>Çalışma Saatleri <br>(Bugün)</h2> ${$obj.data.WorkingHours[0].WorkingHours}</div>
        </div>
        <div class='detail-box__image'> 
            <img src='../../images/demo-image.gif' width='120'/>
        </div>
    </div>
    </article>`;

$obj.detailTemplate.innerHTML = htmlTemplate;