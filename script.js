function process() {
    let fruits = document.getElementById('fruits').value;
    let kg = document.getElementById('kg').value;
    let disc = document.getElementById('discount').value;

    total(fruits, kg, disc);
};

function total(fruits, kg, disc) {
    let price = getPrice(fruits);
    document.getElementById('total').innerHTML = (`Jenis buah : ${fruits} <br>`);
    document.getElementById('total').innerHTML += (`Harga buah per kilogram : ${price} <br>`);
    document.getElementById('total').innerHTML += (`Banyak (berat) : ${kg} kg <br>`);
    document.getElementById('total').innerHTML += (`Diskon : ${disc}% <br>`);
    document.getElementById('total').innerHTML += ("Potongan harga : Rp" + (disc/100) * (price*kg) + "<br>");
    document.getElementById('total').innerHTML += ("Sub total : Rp" + (price*kg) + "<br></br>");
    document.getElementById('total').innerHTML += ("<b>Total : Rp" + ((price*kg) - (disc/100) * (price*kg)) +"</b>");
};

function getPrice(fruits) {
    let price;

    if (fruits === "Apel") {
        price = 23000;
    } 
    else if (fruits === "Pisang") {
        price = 12000;
    }
    else if (fruits === "Anggur") {
        price = 35000;
    }
    else if (fruits === "Mangga") {
        price = 17000;
    }

    return price;
};