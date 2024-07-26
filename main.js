let mainObject = [
    {
        id: 1,
        image: 'clock.png',
        autors: 'Xiaomi',
        title: 'Смарт-годинник Xiaomi Amazfit GTS 2 Urban Grey',
        stars: '4',
        cost: '29.80'
    },
    {
        id: 2,
        image: 'headphone.png',
        autors: 'Sony',
        title: 'Безпроводні навушники Sony WH-L600',
        stars: '4',
        cost: '39.80'
    },
    {
        id: 3,
        image: 'pinkHeadphone.png',
        autors: 'JBL',
        title: 'Навушники JBL Tune 510BT Rose',
        stars: '4',
        cost: '69.80'
    },
    {
        id: 4,
        image: 'blueHeadphone.png',
        autors: 'JBL',
        title: 'Наушники JBL Tune 710BT Blue',
        stars: '4',
        cost: '70.80'
    },
    {
        id: 5,
        image: 'miniHeadphone.png',
        autors: 'Google',
        title: 'Навушники Google Pixel Buds 2 Mint',
        stars: '4',
        cost: '29.80'
    },
    {
        id: 6,
        image: 'whatIsThis.png',
        autors: 'amazon',
        title: 'Колонка amazon echo dot 5 черный 15',
        stars: '4',
        cost: '39.80'
    },
    {
        id: 7,
        image: 'second-clock.png',
        autors: 'Amazfit',
        title: 'Смарт-годинник Amazfit GTS 2 Mini',
        stars: '4',
        cost: '29.80'
    },
    {
        id: 8,
        image: 'second-headphone.png',
        autors: 'Bose',
        title: 'Навушники Bose Noise Cancelling Headphones 700 темно-синій',
        stars: '4',
        cost: '70.80'
    },
    {
        id: 9,
        image: 'thirt-headphone.png',
        autors: 'Monoprise',
        title: 'Monoprice BT-510ANC Wireless On Ear Headphone',
        stars: '4',
        cost: '29.80'
    },
    {
        id: 10,
        image: 'fourth-headphone.png',
        autors: 'JABRA',
        title: 'Навушники з мікрофоном JABRA Evolve 2 75 Stereo USB-A',
        stars: '4',
        cost: '39.80'
    },
    {
        id: 11,
        image: 'toster.png',
        autors: 'SENCOR',
        title: 'Тостер SENCOR STS2651',
        stars: '4',
        cost: '69.80'
    },
    {
        id: 12,
        image: 'gamepad.png',
        autors: 'HoriPad',
        title: 'Бездротовий геймпад для iPhone | iPad | Apple TV Hori HoriPad Ultimate',
        stars: '4',
        cost: '70.80'
    }
]
$('body').html(`<div class="wrap"><div class="mainContainer"></div></div><div class="toBasket" id="toBasketAnim"><i class="fa-solid fa-basket-shopping"></i></div><div class="basket"><div class="containerBasket"><div class="toBasket" id="exitFromBasket"></div></div><div style="position:relative; top: 5000px">олкг двеюснік😂</div></div>`)



for(let el of mainObject){
    $('.mainContainer').append(`
        <div class="cardItem">
            <div class="topCardItem"><img src="image/${el.image}" alt="${el.image}"></div>
            <div class="downCardItem">
            <span class="brandText">${el.autors}</span>
            <div style="width: 100%; height: 60px;">
                <h4>${el.title}</h2></div>
            </div>
            <div class="star"></div>
            <div class="absolut-downCardItem">
                <h4>$${el.cost}</h2>
                <button type="button" class="btnBasket" id="${el.id}">add +</button>
                </div>
            </div>
        </div>`)

}

let basketLet = true
$('.toBasket').click(function(e){
    if(basketLet){
        
        $('.basket').css('right', '0')
        $('.wrap').css('filter', 'blur(10px)');
        $('.basket').css('filter', 'blur(0px)');
        basketLet = false
    } else{
        
        $('.basket').css('right', '-100%')
        $('.wrap').css('filter', 'blur(0px)');
        $('.basket').css('filter', 'blur(10px)');
        basketLet = true
    }
    let ID = (e.target.id).substring(0, 4);
    if (ID == 'user') {
        let currentID = (e.target.id).substring(4);
        for (let el of mainObject) {
            if (el.id == currentID) {
                // // console.log(el);
                // $('.popup').css('display', 'flex');
                // $('.popupContainer').text(el.position);
                // $('.wrap').css('filter', 'blur(10px)')

                console.log(el)
            }
        }
    }

})

$('#exitFromBasket').html('<i class="fa-solid fa-arrow-left"></i>close')
$('.wrap').click(function(){
    if(!basketLet){
        
        $('.basket').css('right', '-100%')
        $('.wrap').css('filter', 'blur(0px)');
        $('.basket').css('filter', 'blur(10px)');
        basketLet = true
    }
})


