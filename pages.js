/*const tag = document.querySelector('h2')

tag.innerHTML = "this is a test";


tag.style.color = "red";

<img src="images/benicio.png" style="display: block;
    margin-left: auto; margin-right: auto;
width: 15%; padding: 20px;">

*/

//data for holding which page we're on
let pageNumber = 0

//content for pages
const pages = [
    {copy: "a product designer relocating to Los Angeles", background:"#00FF75", circle:"#5F26FF"},
    {copy: `currently a product designer at<img src="images/mc.png" style="display: block;
    margin-left: auto; margin-right: auto;
width: 15%; padding: 20px;">`, background: "#5F26FF", circle:"#00FF75"},
    {copy: `here's my <a href="NB-Resume.pdf" target="_blank">resume</a>`, background:"#00FFFF", circle:"#FE3B99" },
    {copy:`feel free to get in touch!`, background:"#FE3B99", circle:"#00FFFF"},
    
]

// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const prevTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')


//make next function to increase page number
const next = function () {
    pageNumber = pageNumber + 1;
    
    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updateSection()
;}


//make previous function to go to previous page number
const prev = function () {
    pageNumber = pageNumber -1;

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()

}


//pick a random slide
const random = function () {
     pageNumber = Math.floor(Math.random() * pages.length)

     updateSection()
}


//update section content and style
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
}

//on click next run
nextTag.addEventListener('click', function(){
    next()
})


//on click prev run
prevTag.addEventListener('click', function(){
    prev()
})


//on click random run this
randomTag.addEventListener('click', function () {
    random()
})


//when a user presses a key check for arrow left or right
//go to next or previous side accordingly
document.addEventListener("keyup", function (event) {
    console.log(event)

    //if the key being pressed is ArrowRight
    if (event.key == "ArrowRight") {
            next()
    }

    //if the key being pressed is ArrowLeft
    if (event.key == "ArrowLeft") {
        prev()
}

})