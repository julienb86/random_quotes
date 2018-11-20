const getQuote = document.querySelector('.button');
const blockquote = document.querySelector(".citation");
const author = document.querySelector(".author");
const season = document.querySelector(".season");


////////FETCH/////////////////////
// const endpoints = './quotation.json';
//
// const quotes = [];
// fetch(endpoints)
//   .then(blob => blob.json())
//   .then(data => quotes.push(...data));
//   console.log(quotes);




function makeRequest(e){
  let xhr = new XMLHttpRequest();
  e.preventDefault();
  xhr.open('GET', 'quotation.json', true);
  xhr.send();

xhr.onreadystatechange = () =>{
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      const response = JSON.parse(xhr.responseText);
      for(var i in response){
        let quote = response[i];
        var random = Math.floor(Math.random()*response.length);

      }

      blockquote.textContent =`"${response[random].quote}"`;
      author.textContent = response[random].author;
      season.textContent = response[random].season;

      }
    }
  }
}
getQuote.addEventListener("click", makeRequest);
