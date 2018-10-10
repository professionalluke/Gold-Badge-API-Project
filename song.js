const baseURL = 'http://www.songsterr.com/a/wa/song?id={id}'
const key = '';
let url = '';

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.');
const endDate = document.querySelector('.end-date');
const SearchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit',fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e){
e.preventDefault();
url = baseURL +'?api-key='+ key +'&q=' + searchTerm.value;
console.log("URL:", url);

if(startDate.value !==''){
    console.log(startDate.value)
    url +='&begin_date=' + startDate.value;
};
 if(endDate.value !=='') {
     url += '&end_date='+ endDate.value;
     console.log(url);
 };
 fetch(url)
    .then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
}

function displayResults(json){
    while (section.firstChild){
        section.removeChild(section.firstChild);
        }
;

let articles = json.response.docs;

if(articles.length===10){
    nav.style.display = 'block';
}   else {
    nav.style.display = 'none';
}
    if(articles.length ===0){
        console.log("No results found");
    }   else {
        for(let i = 0; i<articles.length; i++){
            let article = document.createElement('article');
            let heading= document.createElement('h2');
            let link= document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;
        
        }
    }
}