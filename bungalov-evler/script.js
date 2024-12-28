let btntop = document.getElementById("btntop");

window.onscroll = function(){
    btngoster()
};

function btngoster() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btntop.style.display = "block";
    }
    else {
        btntop.style.display="none";
    }
}


function yukaricik() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }