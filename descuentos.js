//const precioOriginal = 120;
// const descuento = 18;

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});


function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.Value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.Value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");

    resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
}
*/
  
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
  }
  
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

  const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
    ];

function onClickButtonPriceDiscountCuopon(){
    const inputPrice = document.getElementById("InputPriceCoupon");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  

    let descuento;  
        switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
          descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
          descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
          descuento = 25;
        break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  //const  resultPC = document.getElementById("ResultPC");
  // resultPC.innerText = "El precio con cupon de descuento es de: $" + precioConDescuento;
  alert("Felicidades, tu cupon de descuento da el precio de: $" + precioConDescuento);
  console.log(descuento)
  console.log(priceValue)
  }
