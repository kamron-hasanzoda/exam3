const data = [
    {
        title: 'MacBook Air',
        img: './img/macbookair.png',
        price: 999,
        url: '',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: './img/m1.png',
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                img: './img/memory.png',
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: {
                power: 18,
                img: './img/battery.png',
            },
            camera: {
                img: './img/video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        price: 1299,
        img: './img/macbook13.png',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: './img/m1.png',
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                img: './img/memory.png',
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: {
                power: 20,
                img: './img/battery.png',
            },
            camera: {
                img: './img/video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        price: 999,
        img: './img/macbookpro.png',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                img: '',
                title: 'Retina display',
                size: 16
            },
            chip: {
                img: './img/intel.png',
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                img: './img/memory2.png',
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: {
                power: 11,
                img: './img/battery.png',
            },
            camera: {
                img: './img/video.png',
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let container = document.querySelector('.container')
let cont = document.querySelector('.cont')

let coloris = {
    "one": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661",
    "two": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289059",
    "three": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289056"
}

function reload(arr, place, cont) {
    place.innnerHTML = ''
    // cont.innerHTML = ''
    for (let item of arr) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let colors = document.createElement('div')
        let border1 = document.createElement('div')
        let border2 = document.createElement('div')
        let border3 = document.createElement('div')
        let button = document.createElement('button')
        let hr = document.createElement('hr')
        let text = document.createElement('div')
        let textp1 = document.createElement('p')
        let textp2 = document.createElement('p')
        let images = document.createElement('div')
        let textDiv2 = document.createElement('div')
        let textp1_2 = document.createElement('p')
        let textp2_2 = document.createElement('p')
        let img2_2 = document.createElement('img')
        let textDiv3 = document.createElement('div')
        let textp1_3 = document.createElement('p')
        let textp2_3 = document.createElement('p')
        let img2_3 = document.createElement('img')
        let textDiv4 = document.createElement('div')
        let textp1_4 = document.createElement('p')
        let textp2_4 = document.createElement('p')
        let textDiv5 = document.createElement('div')
        let textp1_5 = document.createElement('p')
        let img2_5 = document.createElement('img')
        let textDiv6 = document.createElement('div')
        let textp1_6 = document.createElement('p')
        let textp2_6 = document.createElement('p')
        let img2_6 = document.createElement('img')
        let textDiv7 = document.createElement('div')
        let textp1_7 = document.createElement('p')
        let textp2_7 = document.createElement('p')

        div.classList.add('item')
        textDiv2.classList.add('divs')
        textDiv3.classList.add('divs')
        textDiv4.classList.add('divs')
        textDiv5.classList.add('divs')
        textDiv6.classList.add('divs')
        textDiv7.classList.add('divs')
        colors.classList.add('colors')
        border1.classList.add('border')
        border2.classList.add('border')
        border3.classList.add('border')
        text.classList.add('text')
        images.classList.add('images')

        border1.setAttribute('data-color', 'one')
        border2.setAttribute('data-color', 'two')
        border3.setAttribute('data-color', 'three')

        textp1.innerHTML = item.specs.display.size
        textp2.innerHTML = item.specs.display.title
        h1.innerHTML = item.title

        textp1_2.innerHTML = item.specs.chip.title
        textp2_2.innerHTML = item.specs.chip.description
        textp1_3.innerHTML = item.specs.ram.title
        textp2_3.innerHTML = item.specs.ram.description
        textp1_4.innerHTML = item.specs.memory.size + item.specs.memory.type
        textp2_4.innerHTML = 'Maxium configurable storage'
        textp1_5.innerHTML = 'Up to' + item.specs.battery.power + 'hours battery life'
        textp1_6.innerHTML = item.specs.camera.title
        textp2_6.innerHTML = item.specs.camera.description
        textp1_7.innerHTML = item.specs.weight + 'Ib'
        textp2_7.innerHTML = 'Weigth'

        img2_2.src = item.specs.chip.img
        img2_3.src = item.specs.ram.img
        img2_5.src = item.specs.battery.img
        img2_6.src = item.specs.camera.img

        p.innerHTML = `from $${item.price}`
        button.innerHTML = 'Buy'

        img.src = item.img
        border1.onclick = () => {
            let key = border1.getAttribute(['data-color'])
            img.src = coloris[key]
            img.style.width = '200px'
            img.style.height = '120px'
            img.style.objectFit = 'contain'
        }

        border2.onclick = () => {
            let key = border2.getAttribute(['data-color'])
            img.src = coloris[key]
            img.style.width = '230px'
            img.style.height = '135px'
            img.style.objectFit = 'contain'
        }

        border3.onclick = () => {
            let key = border3.getAttribute(['data-color'])
            img.src = coloris[key]
            img.style.width = '260px'
            img.style.height = '150px'
            img.style.objectFit = 'contain'
        }

        div.append(img, h1, p, colors, button, hr)
        colors.append(border1, border2, border3)
        place.append(div)
        text.append(textp1, textp2)
        textDiv2.append(img2_2, textp1_2, textp2_2)
        textDiv3.append(img2_3, textp1_3, textp2_3)
        textDiv4.append(textp1_4, textp2_4)
        textDiv5.append(img2_5, textp1_5)
        textDiv6.append(img2_6, textp1_6, textp2_6)
        textDiv7.append(textp1_7, textp2_7)
        cont.append(text, textDiv2, textDiv3, textDiv4, textDiv5, textDiv6, textDiv7)
    }
}

reload(data, container, cont)