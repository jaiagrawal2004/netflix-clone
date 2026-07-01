/* ==============================
   ELEMENTS
============================== */

const trailerModal = document.getElementById("trailerModal")
const trailerFrame = document.getElementById("trailerFrame")
const closeBtn = document.getElementById("close")

const search = document.getElementById("search")
const suggestions = document.getElementById("suggestions")

const heroTitle = document.getElementById("heroTitle")
const heroCategory = document.getElementById("heroCategory")
const heroTrailer = document.getElementById("heroTrailer")
const hero = document.querySelector(".hero")

const categoryFilter = document.getElementById("categoryFilter")


/* ==============================
   WATCHLIST
============================== */

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || []

function addWatchlist(title){

watchlist = JSON.parse(localStorage.getItem("watchlist")) || []

if(!watchlist.includes(title)){

watchlist.push(title)

localStorage.setItem("watchlist", JSON.stringify(watchlist))

alert("Added to Watchlist")

showWatchlist()

}else{

alert("Already in Watchlist")

}

}

function showWatchlist(){

watchlist = JSON.parse(localStorage.getItem("watchlist")) || []

const list = movies.filter(movie => watchlist.includes(movie.title))

display(list, document.getElementById("watchlist"))

}


/* ==============================
   TRAILER PLAYER
============================== */

function playTrailer(url){

trailerModal.style.display = "flex"

trailerFrame.src = ""
trailerFrame.src = url

}

closeBtn.onclick = () => {

trailerModal.style.display = "none"
trailerFrame.src = ""

}


/* ==============================
   DISPLAY MOVIES
============================== */

function display(list,row){

row.innerHTML=""

list.forEach(movie=>{

const div=document.createElement("div")
div.classList.add("movie")

div.innerHTML = `

<img src="${movie.image}" alt="${movie.title}">

<video class="previewVideo" muted loop>
<source src="${movie.preview || ""}" type="video/mp4">
</video>

<div class="hoverCard">

<h4>${movie.title}</h4>

<p>${movie.description || ""}</p>

<p>⭐ ${movie.rating}</p>

<button onclick="playTrailer('${movie.trailer}'); event.stopPropagation();">
Trailer
</button>

<button onclick="addWatchlist('${movie.title}'); event.stopPropagation();">
+ Watchlist
</button>

</div>
`

/* hover preview */

div.addEventListener("mouseenter",()=>{

const video = div.querySelector("video")

if(video && video.querySelector("source").src){
video.style.display="block"
video.muted=true
video.play()
}

})

div.addEventListener("mouseleave",()=>{

const video = div.querySelector("video")

if(video){
video.pause()
video.currentTime=0
video.style.display="none"
}

})

/* remember category */

div.onclick = () => {
localStorage.setItem("lastCategory", movie.category)
}

row.appendChild(div)

})

}


/* ==============================
   TRENDING
============================== */

function trending(){

const sorted=[...movies].sort((a,b)=>{

let scoreA = a.rating*3 + a.views/500
let scoreB = b.rating*3 + b.views/500

return scoreB-scoreA

})

display(sorted.slice(0,8), document.getElementById("trending"))

}


/* ==============================
   AI RECOMMENDATION
============================== */

function recommend(){

let category = localStorage.getItem("lastCategory") || "Action"

const rec = movies.filter(m => m.category === category)

display(rec, document.getElementById("recommended"))

}


/* ==============================
   CATEGORY ROWS
============================== */

function categoryRows(){

const categories = ["Action","SciFi","Drama","Comedy","Thriller"]

categories.forEach(cat=>{

const list = movies.filter(m => m.category === cat)

display(list, document.getElementById(cat))

})

}


/* ==============================
   HERO AUTO SLIDER
============================== */

let heroIndex = 0

function heroSlider(){

const heroMovies = movies.slice(0,5)

const movie = heroMovies[heroIndex]

hero.style.background =
`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8)), url(${movie.image}) center/cover`

heroTitle.innerText = movie.title
heroCategory.innerText = movie.category

heroTrailer.onclick = () => playTrailer(movie.trailer)

heroIndex++

if(heroIndex >= heroMovies.length){
heroIndex = 0
}

}

setInterval(heroSlider,4000)

heroSlider()


/* ==============================
   SEARCH SUGGESTIONS
============================== */

search.addEventListener("input",()=>{

const value = search.value.toLowerCase()

suggestions.innerHTML=""

if(value.length===0) return

const result = movies.filter(m =>
m.title.toLowerCase().includes(value)
)

result.slice(0,6).forEach(movie=>{

const div=document.createElement("div")

div.innerText = movie.title

div.onclick = () => {

playTrailer(movie.trailer)

suggestions.innerHTML=""
search.value=""

}

suggestions.appendChild(div)

})

})


/* ==============================
   CATEGORY FILTER
============================== */

if(categoryFilter){

categoryFilter.addEventListener("change", function(){

const selected = this.value

const sections = document.querySelectorAll(".categorySection")

if(selected === "All"){

sections.forEach(section=>{
section.style.display="block"
})

trending()
recommend()
categoryRows()

return
}

if(selected === "Watchlist"){

sections.forEach(section=>{
section.style.display="none"
})

document.querySelector('[data-category="Watchlist"]').style.display="block"

showWatchlist()

return
}

sections.forEach(section=>{

const cat = section.getAttribute("data-category")

if(cat === selected){
section.style.display="block"
}
else{
section.style.display="none"
}

})

})

}


/* ==============================
   CAROUSEL SLIDERS
============================== */

document.querySelectorAll(".right").forEach(btn=>{

btn.onclick = ()=>{

const row = btn.parentElement.querySelector(".row")

row.scrollBy({
left:400,
behavior:"smooth"
})

}

})

document.querySelectorAll(".left").forEach(btn=>{

btn.onclick = ()=>{

const row = btn.parentElement.querySelector(".row")

row.scrollBy({
left:-400,
behavior:"smooth"
})

}

})


/* ==============================
   LOADING SCREEN
============================== */

window.onload = () => {

setTimeout(()=>{

document.getElementById("loader").style.display="none"

},1200)

trending()
recommend()
categoryRows()
showWatchlist()

}