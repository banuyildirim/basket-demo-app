
import data from '../../json/restoran.json';

const objects = data.d.ResultSet;
let domTemplate = document.getElementById('js-detail-template');

const htmlTemplate = `<article>
    <div class='detail-box'>
        <div class='detail-box__rating'> 
            <div class='detail-box__head'><h2>Restoran Puanları</h2></div>
            <div class='detail-box__point'>Hız <br> <span>${objects.Speed} </span></div>
            <div class='detail-box__point'>Lezzet <br> <span>${objects.Flavor} </span></div>
            <div class='detail-box__point'>Servis <br> <span>${objects.Serving}</span></div>
        </div>
        <div class='detail-box__short-info'> 
            <div><h2>Minimum Paket Tutarı</h2> ${objects.DeliveryAreas[0].MinimumPrice} TL</div>
            <div><h2>Servis Süresi <br>(Ortalama)</h2> ${objects.DeliveryTime} dk.</div>
            <div><h2>Çalışma Saatleri <br>(Bugün)</h2> ${objects.WorkingHours[0].WorkingHours}</div>
        </div>
        <div class='detail-box__image'> 
            <img src='../../images/demo-image.gif' width='120'/>
        </div>
    </div>
    </article>`;

domTemplate.innerHTML = htmlTemplate;