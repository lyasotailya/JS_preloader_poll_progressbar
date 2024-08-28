const request = new XMLHttpRequest

document.getElementsByTagName('input').file.onchange = function (event) {
    let file = this.files[0]
    console.log()
    document.querySelector('span.input__wrapper-desc').textContent = file.name
    console.log()
    document.getElementById('send').onclick = function() {
        request.upload.onprogress = function (event) {
            const progress = document.getElementById( 'progress' )
            progress.value = (event.loaded / event.total)
        }
        request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
        request.send(file)
        return false
    }
}