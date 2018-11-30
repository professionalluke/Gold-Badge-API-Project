const baseURL = 'https://www.songsterr.com/a/ra/songs.json?pattern=';
let url;

const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');



searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
   e.preventDefault()
   console.log(e);
   url = baseURL + search.value;
   fetch(url)
   .then(function(result) {
   console.log(result)
   return result.json();
   }).then(function(json) {
   displayResults(json);
   });
}

function displayResults(json) {

   while (section.firstChild) {
   section.removeChild(section.firstChild); }
   let theJsonResponse = json;

   if(theJsonResponse.length === 0) {
     console.log("No results");
     } else {

         for(let i = 0; i < theJsonResponse.length && i <= 30; i++) {
         let article = document.createElement('article');
         let heading = document.createElement('h4');
         let link = document.createElement('a');
         let linkToSong= "http://www.songsterr.com/a/wa/song?id=";
         

         let current = theJsonResponse[i];
         console.log("Current:", current);
         idNum = current.id;
         link.href = linkToSong+idNum;
         artistName = current.artist.name;
         songName = current.title;
         link.textContent = artistName + "  |  " + songName;
         article.appendChild(heading);
         heading.appendChild(link);
         section.appendChild(article);
         }
     }
};
