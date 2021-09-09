/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let articles = document.querySelectorAll('section');
const ulNav = document.getElementById('navbar__list');
let liNavs = []



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

articles.forEach(article =>{
    //geting the data value of each article from data-nav attribute
    let artName = article.getAttribute('data-nav')
    //geting the id of each article from id attribute
    let idArt = article.getAttribute('id')
    // add them to array to be easy to loop of them and add them direct to the dom
    liNavs.push(`<a class="menu__link">${artName}</a>`)
})



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// loop on the array that have the anchors 
for(liNav of liNavs){
    // create li element 
    let liHtml = document.createElement('li');
    // add  the anchor to the li element
    liHtml.innerHTML = liNav
    // add li that contatin the anchor to the ul 
    ulNav.appendChild(liHtml)
}

// Add class 'active' to section when near top of viewport

// get all li
let liItems = document.querySelectorAll('.menu__link')

// window EventListener to listen to the dom if window scrolled 
window.addEventListener('scroll',event =>{
    // loop on articless or sections
    for(article of articles){
        // get the destance between our article and the top of the window
        let distanceToTop = article.getBoundingClientRect().top;
        // condition check if the window is about to reach the distance of the article range
        if (window.screenTop >= distanceToTop -100 && window.screenTop <= distanceToTop + article.offsetHeight) {
            article.classList.add('your-active-class');
            // loop on li elments to get the text content 
            for(liItem of liItems){
                //check the li text content equal to the data-nav that mean we are in the same article
                if(liItem.textContent == article.getAttribute('data-nav')){
                    liItem.style.backgroundColor="rgba(0,13,60,1)";
                    liItem.style.color="#fff";
                }else{
                    liItem.style.backgroundColor="";
                    liItem.style.color="#000";
                }
            }
        }else{
            article.classList.remove('your-active-class');

        }
    }
})

// Scroll to anchor ID using scrollTO event

// that was the required part in the review ////////////////////////////////////////////////////////////////////
// that was the required part in the review ////////////////////////////////////////////////////////////////////

for(liItem of liItems){
    liItem.addEventListener('click',(e) =>{
        articles.forEach(article =>{
            if (article.getAttribute('data-nav') == e.target.textContent){
                article.scrollIntoView({behavior: "smooth"});
            }
        })
    })
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
    //made it in line 93

// Set sections as active
    // made that i line 71 

