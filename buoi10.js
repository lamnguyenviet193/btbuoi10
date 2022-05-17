function Dong_ho() {
    let thu = document.getElementById("thu");  
    let ngay = document.getElementById("ngay");
    let gio = document.getElementById("gio");
    let phut = document.getElementById("phut");
    let giay = document.getElementById("giay");
    
    let Thu_hien_tai = new Date () .getDay();
    let Ngay_hien_tai = new Date ().getDate();
    let Gio_hien_tai = new Date().getHours();
    let Phut_hien_tai = new Date().getMinutes();
    let Giay_hien_tai = new Date().getSeconds();
    
    thu.innerHTML = Thu_hien_tai +1;
    ngay.innerHTML = Ngay_hien_tai;
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
let Dem_gio = setInterval(Dong_ho, 1000);