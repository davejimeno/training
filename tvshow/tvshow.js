const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e.target);
    console.dir(form);
    const searchKey = form.elements.key.value;
    const config = {
        params: {
            q: searchKey
        }
    } 
    const response = await axios.get(`http://api.tvmaze.com/search/shows/`, config)
    appendImage(response.data)
})

const appendImage = (shows) => {
    for(let result of shows) {
        const img = document.createElement('IMG')
        img.src = result.show.image?.medium
        document.body.append(img)
    }
}