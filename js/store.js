//main site
const modeicon = document.getElementsByClassName("modeswitchicon")
const sidenav = document.getElementsByClassName("sidenav")
const showcase = document.getElementsByClassName("showcase")
const arrow = document.getElementsByClassName("arrowicon")
const navbar = document.getElementsByClassName("navbar");

//buy sties
const buyimgmain = document.getElementById("buyimgmain")

const pro = document.getElementById("pro")
const promax = document.getElementById("promax")

const purple = document.getElementById("purple")
const gold = document.getElementById("gold")
const silver = document.getElementById("silver")
const black = document.getElementById("black")

//color scheme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function dark() {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        icocheck()
    } else {
        document.body.classList.toggle("dark-theme");
        icocheck()
    }
}

function icocheck(){
    if (document.body.classList.contains('light-theme')){
        modeicon[0].innerHTML = `dark_mode`
    } else{
        modeicon[0].innerHTML = `light_mode`
    }
}
//menu button
function menu(x){
    x.classList.toggle("change")
}
//side nav open
function openNav(){
    sidenav[0].classList.toggle("open")
}

function hidearrow(x){
    arrow[x].style.cssText = 'color: blue;'
}
//arrow hover
function showarrow(x){
    arrow[x].style.cssText = 'color: white;'
}
//buy sites
function openbuysite(x){
    if(x.id == 'iphone14'){
        window.open("html/buy-iphone14.html", "_self")
    }else if(x.id == 'ps5'){
        window.open("html/buy-playstation5.html", "_self")
    }else if(x.id == 'rtx3090'){
        window.open("html/buy-rtx3090.html", "_self")
    }else if(x.id == 'index'){
        window.open("html/buy-index.html", "_self")
    }else if(x.id == 'deck'){
        window.open("html/buy-deck.html", "_self")
    }else if(x.id == 'jordan1'){
        window.open("html/buy-jordan1.html", "_self")
    }
}
//iphone configuration
function iphoneselect(x){
    if(x.id == 'pro'){
        pro.classList.add("selected")
        promax.classList.remove("selected")
        var size = ['pro']
    }else if (x.id == 'promax'){
        promax.classList.add("selected")
        pro.classList.remove("selected")
        var size = ['promax']
    }else if(x.id == 'purple'){
        purple.classList.add("selected")
        gold.classList.remove("selected")
        silver.classList.remove("selected")
        black.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_purple_buy.png"
        var color = ['purple']
    }else if(x.id == 'gold'){
        gold.classList.add("selected")
        purple.classList.remove("selected")
        silver.classList.remove("selected")
        black.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_gold_buy.png"
        var color = ['gold']
    }else if(x.id == 'silver'){
        silver.classList.add("selected")
        gold.classList.remove("selected")
        purple.classList.remove("selected")
        black.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_white_buy.png"
        var color = ['silver']
    }else if(x.id == 'black'){
        black.classList.add("selected")
        gold.classList.remove("selected")
        purple.classList.remove("selected")
        silver.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_black_buy.png"
        var color = ['black']
    }
}

var date = new Date()
document.cookie(`itemsinbag=0; expire=${date.setDate(date.getDate() + 1)}; path=/`)
