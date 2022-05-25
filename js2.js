//<![CDATA[
setTimeout("function1()", 1000);


function function1(){
var mprice=0;
for(var i=0;i<$('#checkout-box .product-cart').length;i++){
mprice += parseInt($('#checkout-box .hargaasli')[i].outerText.match(/\d+/)[0])*parseInt($('#checkout-box .sijumlah')[i].outerText.match(/\d+/)[0]);
$('#sub-total b').html(mprice); $('#all-total b').html(mprice);}
$("span#sub-total").fadeIn()
}

$('#ongkos-kirim').change(function() {
  var $option = $(this).find('option:selected');
  var val = $option.val();
setTimeout(function2(val), 1000);
});



function function2(val){
$("#ongkir-plus b").val(val)
$("#ongkir-plus b").fadeIn()
}
const cuponlength = Object.getOwnPropertyNames(cupon);
// cuponlength.length
$("#Cuponapply").click(function(){
// $("#Cupon").val()
for(var i=0;i<cuponlength.length;i++){
if(cupon[i][0]==$("#Cupon").val()){
$('#Cuponapply').text("Applied")
$('#discount b').text(cupon[i][1]);
break;
}
}
});




//]]>
