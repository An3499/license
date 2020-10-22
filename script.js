// DOMContentLoaded - сработает когда документ загрузиться
document.addEventListener("DOMContentLoaded", function () {
    let select = document.querySelector('select')
    let currentLicense = 0
    document.querySelectorAll('.license').forEach((license, i) => {
        license.onclick = function () {
            document.querySelectorAll('.license').forEach(function (license, j) {
                license.classList.remove('license_active')
                if (i == j) {
                    currentLicense = i
                    document.querySelector('.payment__selected-license').innerHTML = 'Selected plan: #' + (i + 1)
                    license.classList.add('license_active')
                    let licenseCost = document.querySelectorAll('.license__description')[currentLicense]
                    let parsedLicenseCost = parseInt(licenseCost.innerHTML.replace('$', ''))
                    document.querySelector('.payment__total').innerHTML = '$' + (parsedLicenseCost * parseInt(select.value))

                }
            })

            document.querySelectorAll('.license__radio').forEach(function (input, j) {
                input.checked = false
                if (i == j) {
                    input.checked = true
                }
            })
        }
    })

    select.onchange = function () {
        let licenseCost = document.querySelectorAll('.license__description')[currentLicense]
        let parsedLicenseCost = parseInt(licenseCost.innerHTML.replace('$', ''))
        document.querySelector('.payment__total').innerHTML = '$' + (parsedLicenseCost * parseInt(select.value))


    }
    document.querySelector('.payment__button').onclick=function(){
        alert('Selected plan ' +(currentLicense+1))
    }
})