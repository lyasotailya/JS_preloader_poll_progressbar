let request = new XMLHttpRequest()
let loader = document.getElementById('loader')

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
request.send()

function insertHTML(response) {
    let itemList = document.querySelectorAll('div.item')
    itemList.length > 0 ? Array.from(itemList).forEach((element) => element.remove()) : ''
    for (let item in response) {
            document.getElementById('items').innerHTML += 
            `<div class="item">
                <div class="item__code">${response[item].CharCode}</div>
                <div class="item__value">${response[item].Value}</div>
                <div class="item__currency">руб.</div>
            </div>`
    };
    loader.classList.toggle('loader_active')
};

request.addEventListener('readystatechange', function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText)['response'].Valute
        insertHTML(response)
    }
})