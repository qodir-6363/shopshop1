let urlForMovieGaller = 'https://api.themoviedb.org/3/movie/upcoming?api_key=0bc22d0b62fc523b0c09ee30a3b17398&language=en-US&page=1'
fetch(urlForMovieGaller)
    .then((value) => value.json())
    .then((response) => {
        let galleryCont = document.querySelector('.gallery-cont')
        let arrMovie = response.results
        arrMovie.map((item) => {
            let galleryItem = document.createElement('div')
            galleryItem.className = 'gallery-item'
            let galleryItemCont = document.createElement('div')
            galleryItemCont.className = 'gallery-item-cont'
            let galleryImage = document.createElement('div')
            galleryImage.className = 'gallery-image'
            let imageG = document.createElement('img')
            imageG.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
            let galleryText = document.createElement('div')
            galleryText.className = 'gallery-text'
            let galleryReating = document.createElement('div')
            galleryReating.className = 'gallery-reating'
            let icon = document.createElement('i')
            icon.className = 'fa-solid fa-star'
            let reatingGalleryP = document.createElement('p')
            reatingGalleryP.textContent = item.vote_average;
            let galleryName = document.createElement('div')
            galleryName.className = 'gallery-name'
            let galleryNameH2 = document.createElement('h2')
            galleryNameH2.textContent = item.title;
            galleryName.appendChild(galleryNameH2)
            galleryReating.appendChild(icon)
            galleryReating.appendChild(reatingGalleryP)
            galleryText.appendChild(galleryReating)
            galleryText.appendChild(galleryName)
            galleryImage.appendChild(imageG)
            galleryItemCont.appendChild(galleryImage)
            galleryItemCont.appendChild(galleryText)
            galleryItem.appendChild(galleryItemCont)
            galleryCont.appendChild(galleryItem)
        })
    })