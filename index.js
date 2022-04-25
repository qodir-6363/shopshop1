let url = 'https://api.themoviedb.org/3/movie/popular?api_key=0bc22d0b62fc523b0c09ee30a3b17398&language=en-US&page=1'
let index = 0;

fetch(url)
    .then((res) => res.json())
    .then((value) => {
        console.log(value.results)
        let image = document.querySelector('.movies-image img')
        let title = document.querySelector('.movies-text h2')
        let p = document.querySelector('.movies-text p')
        let prev = document.querySelector('.prev-movie-btn')
        let next = document.querySelector('.next-movie-btn')

        image.src = `https://image.tmdb.org/t/p/original/${value.results[0].backdrop_path}`
        title.textContent = `${value.results[0].original_title}`
        p.textContent = `Rate: ${value.results[0].vote_average}`
        

        next.addEventListener('click', () =>{
            if(index === value.results.length - 1){
                index = 0
            }else{
                index++
                image.src=`https://image.tmdb.org/t/p/original/${value.results[index].backdrop_path}`
                title.textContent = `${value.results[index].original_title}`
                p.textContent = `Rate: ${value.results[index].vote_average}`
                console.log(index)
            }
        })

        prev.addEventListener('click', () =>{
            if(index == 0){
                index = `${value.results.length}`
            }else{
                index --
                image.src = `https://image.tmdb.org/t/p/original/${value.results[index].backdrop_path}`
                title.textContent = `${value.results[index].original_title}`
                p.textContent = `Rate: ${value.results[index].vote_average}`
                console.log(index)
            }
        })
    })

    // let peopleUrl = 'https://api.themoviedb.org/3/person/popular?api_key=0bc22d0b62fc523b0c09ee30a3b17398&language=en-US&page=1'
    // fetch(peopleUrl)
    // .then((res) => res.json())
    // .then((value) => {
    //     console.log(value.results)
    //     let actorsDiv = document.querySelector('.actors-image')
    //     let actorsText = document.querySelector('.actors-name-rating')
    //     let fragment = document.createDocumentFragment()
    //     let fragmentNew = document.createDocumentFragment()
    //     for(let i=0; i < value.results.length; i++) {
    //         let actorsImage = document.createElement('img')
    //         let actorsName = document.createElement('h2')
    //         actorsImage.src = `https://image.tmdb.org/t/p/original/${value.results[i].profile_path}`
    //         actorsName.textContent = `${value.results[i].name}`
    //         fragment.appendChild(actorsImage)
    //         fragmentNew.appendChild(actorsName)
    //     }
    //     actorsDiv.appendChild(fragment)
    //     actorsText.appendChild(fragmentNew)
    // })
    