let popularMain = document.querySelector('.popular-main')
let favoriteMain = document.querySelector('.favorite-main')
let topratedURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0bc22d0b62fc523b0c09ee30a3b17398&language=en-US&page=1'
let favoriteURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0bc22d0b62fc523b0c09ee30a3b17398&language=en-US&page=1'

fetch(topratedURL)
    .then((value) => value.json())
    .then((another) => {
        console.log(another)
        let topRatedArray = another.results.slice(0,3)
        let popularCont = document.createElement('div')
        popularCont.className = 'popular-cont'
        topRatedArray.map((item) => {
           
            let popularItem = document.createElement('div')
            popularItem.className = 'popular-item'
            let popularItemImage = document.createElement('div')
            popularItemImage.className = 'popular-item-image'
            let itemImage = document.createElement('img')
            itemImage.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
            let popularItemBody = document.createElement('div')
            popularItemBody.className = 'popular-item-body'
            let h2Body = document.createElement('h2')
            h2Body.textContent = item.title
            let pBody = document.createElement('p')
            pBody.textContent = item.release_date
            let spanBody = document.createElement('span')
            spanBody.textContent = `Reating: ${item.vote_average}`
            popularItemBody.appendChild(h2Body)
            popularItemBody.appendChild(pBody)
            popularItemBody.appendChild(spanBody)
            popularItemImage.appendChild(itemImage)
            popularItem.appendChild(popularItemImage)
            popularItem.appendChild(popularItemBody)
            popularCont.appendChild(popularItem)
            popularMain.appendChild(popularCont)

        })
    })

fetch(favoriteURL)
    .then((value) => value.json())
    .then((item) => {
        let favoriteItems = item.results.slice(0,3)
        let popularCont = document.createElement('div')
        popularCont.className = 'popular-cont'

        favoriteItems.map((item) => {
            let popularItem = document.createElement('div')
            popularItem.className = 'popular-item'
            let popularItemImage = document.createElement('div')
            popularItemImage.className = 'popular-item-image'
            let itemImage = document.createElement('img')
            itemImage.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
            let popularItemBody = document.createElement('div')
            popularItemBody.className = 'popular-item-body'
            let h2Body = document.createElement('h2')
            h2Body.textContent = item.title
            let pBody = document.createElement('p')
            pBody.textContent = item.release_date
            let spanBody = document.createElement('span')
            spanBody.textContent = `Reating: ${item.vote_average}`
            popularItemBody.appendChild(h2Body)
            popularItemBody.appendChild(pBody)
            popularItemBody.appendChild(spanBody)
            popularItemImage.appendChild(itemImage)
            popularItem.appendChild(popularItemImage)
            popularItem.appendChild(popularItemBody)
            popularCont.appendChild(popularItem)
            favoriteMain.appendChild(popularCont)
        })

    })