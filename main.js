var i = 0;

function addToCart() {
    document.getElementById("cart").innerHTML = "ADDED TO CART!";
    setTimeout(
        function(){
            document.getElementById("cart").innerHTML = "ADD TO CART!";
        }, 2000
    );
    document.getElementById('inc').value = ++i;
}

/*
function selectGlaze(){
    document.getElementByClassName("option").style.backgroundColor = "#2E1900";
    document.getElementByClassName("option").style.color = "white";
}*/

function deleteRow(item) {
    var row = item.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
