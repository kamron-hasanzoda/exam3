const dataTwo = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    }
]

let cont = document.querySelector('.cont')

function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let i = document.createElement('div')
        let p1 = document.createElement('p')
        let h1 = document.createElement('h1')
        let p2 = document.createElement('p')

        i.classList.add('i')
        p1.innerHTML = item.preTitle
        h1.innerHTML = item.title
        p2.innerHTML = item.description
        i.style.backgroundImage = `url(./two/img/${item.img}.jpg)`

        i.append(p1, h1, p2)
        place.append(i)
    }
}

reload(dataTwo, cont)