const user = {
    username: "hanszimmer⭐",
    posts: 526,
    followers: 2300,
    following: 275,
    fullname: "Hans Zimmer",
    email: "@hanszimmer",
    threat: "linktr.ee/hanszimmer",
    videoss: [
        ["./public/c1.jpg", 524, 2131],
        ["./public/c2.jpg", 525, 2132],
        ["./public/c3.jpg", 526, 2133],
        ["./public/c4.jpg", 527, 2134],
        ["./public/c5.jpg", 528, 2135],
        ["./public/c6.jpg", 529, 2136],
        ["./public/c2.jpg", 530, 2137],
        ["./public/c1.jpg", 531, 2138],
        ["./public/c4.jpg", 532, 2139],
        ["./public/c3.jpg", 533, 2141],
        ["./public/c6.jpg", 534, 2151],
        ["./public/c5.jpg", 535, 2161],
        ["./public/c6.jpg", 536, 2171],
        ["./public/c5.jpg", 537, 2181],
        ["./public/c4.jpg", 538, 2191],
        ["./public/c3.jpg", 539, 2101],
        ["./public/c2.jpg", 540, 2331],
        ["./public/c1.jpg", 570, 2731],
    ]
}

const videos = document.querySelector(".videos")
const videossnew = user.videoss

const imgBox = document.querySelector(".img")
const imgself = document.querySelector(".img img")

const imgfor = new Image()

imgfor.src = `./public/hero.jpg`
imgfor.onload = () => {
    imgself.remove()
    imgBox.appendChild(imgfor)

}





const buts = document.querySelector(".buts")
const heroname = document.createElement("span")
heroname.className = "heroname"
heroname.textContent = user.username
buts.prepend(heroname)
const valuesArray = Object.values(user);
const statuss_p = document.querySelectorAll(".status p")
statuss_p.forEach((e, i) => {
    const postsNum = document.createElement("b")
    postsNum.textContent = valuesArray[i + 1]
    if (valuesArray[i + 1] > 1000) {
        postsNum.textContent = Number((valuesArray[i + 1] / 1000).toFixed(1))
    }
    e.prepend(postsNum)
})


const linksof = document.querySelector(".links")
const fullname = document.createElement("p")
fullname.textContent = user.fullname

const dogName = document.createElement("span")
dogName.textContent = user.email

const threatName = document.createElement("p")
threatName.textContent = user.threat


linksof.prepend(fullname)
linksof.append(dogName)
linksof.append(threatName)



for (vid of videossnew) {

    const box = document.createElement("div")
    box.className = "box"
    const actimg = document.createElement("img")
    actimg.src = `https://placehold.co/400x800`

    const overlay = document.createElement("div")
    overlay.className = "overlay"

    const pelement = document.createElement("p")

    pelement.innerHTML = `
            <span class="material-symbols-outlined">
                favorite
            </span>
              ${vid[1]}
    `
    pelement.innerHTML += " , "
    pelement.innerHTML += `
            <span class="material-symbols-outlined">
                chat_bubble
            </span>
            ${vid[2]}
    `


    box.appendChild(actimg)

    overlay.appendChild(pelement)

    box.appendChild(overlay)

    videos.appendChild(box)

    const img = new Image()

    img.src = `${vid[0]}`

    img.onload = () => {
        actimg.remove()
        box.appendChild(img)

    }

}

const togg = document.querySelector(".add")

togg.addEventListener('click', () => {
    document.documentElement.classList.toggle("dark-theme")
})