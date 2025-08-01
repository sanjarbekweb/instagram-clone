const user = {
    username: "hanszimmer⭐",
    posts: 526,
    followers: 2300,
    following: 275,
    fullname: "Hans Zimmer",
    email: "@hanszimmer",
    threat: "linktr.ee/hanszimmer",
    videoss: [
        ["/c1.jpg", 524, 2131],
        ["/c2.jpg", 525, 2132],
        ["/c3.jpg", 526, 2133],
        ["/c4.jpg", 527, 2134],
        ["/c5.jpg", 528, 2135],
        ["/c6.jpg", 529, 2136],
        ["/c2.jpg", 530, 2137],
        ["/c1.jpg", 531, 2138],
        ["/c4.jpg", 532, 2139],
        ["/c3.jpg", 533, 2141],
        ["/c6.jpg", 534, 2151],
        ["/c5.jpg", 535, 2161],
        ["/c6.jpg", 536, 2171],
        ["/c5.jpg", 537, 2181],
        ["/c4.jpg", 538, 2191],
        ["/c3.jpg", 539, 2101],
        ["/c2.jpg", 540, 2331],
        ["/c1.jpg", 570, 2731],
    ]
}

const videos = document.querySelector(".videos")
const videossnew = user.videoss

const imgBox = document.querySelector(".img")
const imgself = document.querySelector(".img img")

const imgfor = new Image()

imgfor.src = `/hero.jpg`
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
        postsNum.textContent = `${Number((valuesArray[i + 1] / 1000).toFixed(1))}M`
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



for (const vid of videossnew) {
    const box = document.createElement("div")
    box.className = "box"
    const actimg = document.createElement("div")
    actimg.className = "loader"
    // actimg.src = `https://placehold.co/400x800`

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


const mainn = document.querySelector(".main")

const loadMore = document.createElement("button")
loadMore.className = "loadButton"
loadMore.textContent = "Load More"
mainn.appendChild(loadMore)
const themer = document.querySelector("#themer")

themer.addEventListener('click', () => {
    document.documentElement.classList.toggle("dark-theme")
    document.querySelector(".themer").classList.toggle("night")
})