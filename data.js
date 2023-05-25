const data = [
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 1
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 2
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 3
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 4
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 5
        }
    },
]

let container = document.querySelector('.container')

function reload(arr, place) {
    // place.innerHTML = ''
    for (let item of arr) {
        let itemDiv = document.createElement('div')
        let flex = document.createElement('div')
        let h1 = document.createElement('h1')
        let menuImg = document.createElement('img')
        let p = document.createElement('p')
        let flexTwo = document.createElement('div')
        let left = document.createElement('div')
        let BackImg = document.createElement('div')
        let imgText = document.createElement('p')
        let right = document.createElement('div')
        let rightP = document.createElement('p')

        itemDiv.classList.add('item')
        flex.classList.add('flex')
        h1.innerHTML = item.title
        menuImg.src = './img/more-horizontal.svg'
        p.innerHTML = `Deadline: ${item.deadline}`
        flexTwo.classList.add('flex')
        left.classList.add('left')
        BackImg.style.backgroundImage = `url(./img/${item.author.img}.png)`
        BackImg.classList.add('img')
        imgText.innerHTML = `ID${item.author.id}`
        right.classList.add('right')
        rightP.innerHTML = item.deadline

        flex.append(h1, menuImg)
        flexTwo.append(left, right)
        left.append(BackImg, imgText)
        right.append(rightP)
        itemDiv.append(flex, p, flexTwo)
        place.append(itemDiv)
    }
}

reload(data, container)