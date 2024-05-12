// fetch Api
// HTTP requests
// Return a Promise

const API_URL_ID = `https://www.omdbapi.com/?apikey=ffa5acbc&plot=full&i=`
async function init() {

  // Getting exiting elements
  const userInput = document.querySelector("#input");
  const searchButton = document.querySelector("#search-button");
  const moviesContainer = document.querySelector(".movies-container");
  
  async function searchMovie () {
    const userInputValue = userInput.value;
    try {
      if(userInputValue === ""){
        throw "something went wrong"
      }
      addSpinner()

      const response = await fetch(`https://www.omdbapi.com/?s=${userInputValue}&apikey=a3d6fb3c`);
      const data = await response.json();
      
      console.log(data);
      moviesContainer.innerHTML = ""
      
      setTimeout(() => {
        data.Search.forEach(element => {
          const card = document.createElement("div")
          const title = document.createElement("h2")
          const year = document.createElement("p")
          const type = document.createElement("p")
          const imdbID = document.createElement("button")
          imdbID.id = element.imdbID
          imdbID.addEventListener("click", getSummery)
          const poster = document.createElement("img")
  
          title.innerText = element.Title
          year.innerText = "Release Year: " + element.Year
          type.innerText = "Type Of :" + element.Type
          imdbID.innerText = "Movie ID: " +element.imdbID
          poster.src = element.Poster
                    
          card.append(title, year, type, imdbID, poster)
          moviesContainer.append(card)
        });

        const result = data.Search.reduce((acc, currentMovie) => {
          if (acc[currentMovie.Type]) {
          acc[currentMovie.Type] = acc[currentMovie.Type] + 1;
          } else {
          acc[currentMovie.Type] = 1;
          }
          return acc;
          }, {});
          console.log(result);

          let chartCanvas = document.createElement("canvas");
          chartCanvas.id = "chart-canvas";
          let chartCard = document.createElement("div");
          chartCard.id = "chart-card";
          chartCard.append(chartCanvas);
          document.querySelector("body").append(chartCard);
          let ctx = chartCanvas.getContext("2d");
          const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
          new Chart(ctx, {
          type: "pie",
          data: {
          labels: Object.keys(result),
          datasets: [
          {
          backgroundColor: barColors,
          data: Object.values(result),
          },
          ],
          },
          options: {
          title: {
          display: true,
          text: "Types",
          },
          },
          });



        spinnerOverlay = document.querySelector(".spinner-overlay")
        spinnerOverlay.remove()
        
      }, 2500);      
      
    } catch(error) {
      let errorElement = document.createElement("p")
      errorElement.classList.add("errorElement")
      errorElement.innerText = error
      let body = document.querySelector("body")
      body.prepend(errorElement)
      window.location.href = "error.html"
    }
  }
  
  searchButton.addEventListener("click", searchMovie)
}

init()

function getSummery(e){
  let card = e.target.closest("div")
  console.log(card);
  fetch(API_URL_ID + e.target.id)
  .then(function(response){
    return response.json()
    console.log(response);
  })
  .then(function(data){

    console.log(data);
    let summerOverlay = document.createElement("div")
    summerOverlay.classList.add("summerOverlay")
    let summeryTitle = document.createElement("h2")
    summeryTitle.innerText = "Movie summary:"
    let summery = document.createElement("p")
    summery.innerText = data.Plot
    summerOverlay.appendChild(summeryTitle)
    summerOverlay.appendChild(summery)
    summerOverlay.addEventListener("click",function(e){
      if(e.target.classList.contains("summerOverlay")){
        e.target.remove()
      }
    })
    card.appendChild(summerOverlay)
  })

}

function addSpinner(){
  let spinnerOverlay = document.createElement("div")
  spinnerOverlay.classList.add("spinner-overlay")
  let spinnerContainer = document.createElement("div")
  spinnerContainer.classList.add("spinner-container")
  spinner = document.createElement("span")
  
  spinnerContainer.appendChild(spinner)
  spinnerOverlay.appendChild(spinnerContainer)

  let body = document.querySelector("body")
  body.append(spinnerOverlay)
}


// moviesContainer.append(card)
// // Creating new elements
// const card = document.createElement('div')
// const title = document.createElement('h2')
// const year = document.createElement('p')
// const genre = document.createElement('p')
// const country = document.createElement('p')

// title.innerText = data.Title
// moviesContainer.append(card)
// year.innerText = "Year: " + data.Year
// genre.innerText = data.Genre
// country.innerText = data.Country

// // Add all elements to the parent container
// card.append(title, year, genre, country)

/*
HTML :
<div id="movie_card">
<h1 id="title">movie title:</h1>
<p id="year">year:</p>
<p id="time">rund="genre">genre:</p>
<p id="awards">awards:</p> time:</p>
        <p i
    </div>

JS:
    // REPLACING existing dive in the UI (DOM)
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=a3d6fb3c&t=frozen`);
      const data = await response.json();
      console.log(data);

      const genre = document.getElementById("genre" )
      const year = document.getElementById("year")
      const time = document.getElementById("time")

      year.innerText = data.Year
      time.innerText = data.Runtime
      genre.innerText = data.Genre
  } catch(error) {
    console.log(error);
  }
*/