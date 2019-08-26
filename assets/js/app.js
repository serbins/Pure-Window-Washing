/* Site Functionality */

/* Mobile Navigation */

/* Qoute App */
document.getElementById('qouteOutput').style.visibility = 'hidden';
document.getElementById('windowQty').addEventListener('input', function(e){
document.getElementById('qouteOutput').style.visibility = 'visible';
var windowQty = e.target.value;
document.getElementById('qoute').innerHTML = '$' + windowQty*7;
});
