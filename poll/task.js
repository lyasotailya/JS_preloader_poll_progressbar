const request = new XMLHttpRequest
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
request.send()

request.addEventListener('readystatechange', function () {
    if (request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText).data
        let poll = document.querySelector('div.poll')

        poll.innerHTML += `<div class="poll__title" id="poll__title">${data.title}</div>`
           
        for (let answer in {...data.answers}) {
            poll.innerHTML += `<button class="poll__answer">${{...data.answers}[answer]}</button>`           
        }

        Array.from(document.querySelectorAll('button.poll__answer')).forEach(function (button, index) {
            button.onclick = function (event) {
                alert('Спасибо, ваш голос засчитан!')
                location.reload()
            }
        })
    }
})