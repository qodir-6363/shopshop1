let inputTag = document.querySelector('.inputTag')
let moviePageCont = document.querySelector('.movie-page-cont')

function myFunction(){
    let addressOfLink = 'https://api.themoviedb.org/3/movie/popular?api_key=0bc22d0b62fc523b0c09ee30a3b17398&language=en-US&page=1'
    fetch(addressOfLink)
        .then((item) => item.json())
        .then((response) => {
            let resultsApi = response.results;
            let newResultOf = resultsApi.filter((item) => item.original_title === inputTag.value)
            console.log(newResultOf)

            
            newResultOf.map((elem) => {
                let moviePageItem = document.createElement('div')
                moviePageItem.className = 'movie-page-item'
                let moviePageImage = document.createElement('div')
                moviePageImage.className = 'movie-page-image'
                let imgOfMoviePage = document.createElement('img')
                imgOfMoviePage.src = `https://image.tmdb.org/t/p/original/${elem.poster_path}`
                let moviePageText = document.createElement('div')
                moviePageText.className = 'movie-page-text'
                let moviePageH2 = document.createElement('h2')
                moviePageH2.textContent = elem.original_title
                let moviePageP = document.createElement('p')
                moviePageP.textContent = elem.overview
                let moviePageSpan = document.createElement('span')
                moviePageSpan.textContent = `Reating: ${elem.vote_average}`
                moviePageText.appendChild(moviePageH2)
                moviePageText.appendChild(moviePageP)
                moviePageText.appendChild(moviePageSpan)
                moviePageImage.appendChild(imgOfMoviePage)
                moviePageItem.appendChild(moviePageImage)
                moviePageItem.appendChild(moviePageText)
                moviePageCont.appendChild(moviePageItem)
            })
        })
}