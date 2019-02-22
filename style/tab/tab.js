

function openCity(cityName) {
    let i;
    let x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
}

document.getElementsByClassName('w3-button').click = () => {
    let el = $(this).data('name');
    openCity(el);
}

