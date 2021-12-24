const form = document.querySelector('#search-form');

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }
}

const c1 = new Color(123, 28, 44, 'foo');
const c2 = new Color(11, 28, 44, 'bar');

form.addEventListener('submit', async (e) => {

    e.preventDefault()

    console.log(e.target)
    console.dir(form)

    const searchKey = form.elements.key.value
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
        const title = document.createElement('Label')
        img.src = result?.show?.image?.medium
        title.color = c1
        title.innerText = result?.show?.title
        document.body.append(img)
    }
}


class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`
    }
}

class Animal {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Animal {
    meow() {
        return 'MEWO!'
    }
}

class Cow extends Animal {
    bark() {
        return `MAAAAh!`
    }
}
