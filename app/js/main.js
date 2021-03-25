// Работа блока фильтра поиска продуктов
let select = function() {
    let selectHeder = document.querySelectorAll('.select__header')
    let selectItem = document.querySelectorAll('.select__body-item')


    selectHeder.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectChoose() {
        let text = this.innerText
        let select = this.closest('.catalog-listing__select-wrapper')
        let currentText = select.querySelector('.select__current')

        currentText.innerText = text
        select.classList.remove('is-active')
    }
    
}()

// Открытие списков левого меню сайта
let selectLeftMenu = function () {
    let listTitle = document.querySelectorAll('.block__title')

    listTitle.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    
    }
}() 

// Открытие списка с выбором магазина
let selectStores = function () {
    // let listStores = document.querySelectorAll('.list-store__block')
    let listStoresTitle = document.querySelectorAll('.list-store__block-title')

    listStoresTitle.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }
}()