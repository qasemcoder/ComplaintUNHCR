var i = 0;
var images = [];
var time = 3000;
let Y = 700
images[0] = '/images/1.jpg'
images[1] = '/images/3.jpg'
images[2] = '/images/2.jpg'
let card = document.getElementsByClassName("img_dev")
let cards = []
for (let i = 0; i < card.length; i++) {
    cards.push(card[i])
}

function changeImage() {
    document.getElementById("img").src = images[i];
    document.getElementById("img").setAttribute("class", "slid_image-fade")
    setTimeout(() => {
        document.getElementById("img").setAttribute("class", "slid_image")
    }, 2000)
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;


window.document.addEventListener("scroll", e => {
    if (window.scrollY >= Y) {
        console.log(true)

        cards.forEach((v) => {

            v.setAttribute("class", "img_dev_An")

        })

    }
})