const images = [
    "/img/placeholder-2.jpg", "/img/placeholder-3.jpg", "/img/placeholder-4.jpg", 
    "/img/placeholder-5.jpg", "/img/placeholder-6.jpg", "/img/placeholder-7.jpg"
]

let i = 0

function placeImage(x, y) {

    const nextImage = images[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextImage)
    img.style.left = x + "px"
    img.style.top = y + "px"

    document.body.appendChild(img)
    
    i = i + 1

    if (i>= images.length) {

        i = 0
    }

}

document.addEventListener("click", function (event) {

    event.preventDefault()
    placeImage(event.pageX, event.pageY)
    
})