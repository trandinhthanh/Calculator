const btnElement = document.getElementsByClassName('row-button-list__item')
const operatorElement = document.getElementsByClassName('operator')
const screenElement = document.querySelector('.screen-show__number')

function handerNumber(stringNumber, event) {
    stringNumber += event.target.innerText
    return stringNumber
}

function deleteScreen(stringNumber) {
    stringNumber = ''
    screenElement.innerHTML = '0'
    return stringNumber
}

function clickOperator(event) {
    for (const j of operatorElement) {
        j.classList.remove('btn--opacity')
    }
    event.target.classList.toggle('btn--opacity')
}

function getValueInput() {
    let stringNumber = ''
    let arrstringNumber
    let showNumber = []
    let result
    for (const i of btnElement) {
        i.addEventListener('click', (event) => {
            if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {
                stringNumber = handerNumber(stringNumber, event)
                if (event.target.classList.contains('number')) {
                    arrstringNumber = stringNumber.split(/([+*/-])/)
                    showNumber = arrstringNumber.slice(-1)[0]
                    screenElement.innerHTML = showNumber
                }

                if (event.target.classList.contains('operator')) {
                    arrstringNumber = stringNumber.split(/([+*/-])/)
                    showNumber = arrstringNumber.slice(-3, -2)[0]
                    screenElement.innerHTML = showNumber
                }
            }

            if (event.target.classList.contains('AC')) {
                stringNumber = deleteScreen(stringNumber)
            }

            if (event.target.classList.contains('operator')) {
                clickOperator(event)
            }

            if (event.target.classList.contains('result')) {
                for (const j of operatorElement) {
                    j.classList.remove('btn--opacity')
                }
                result = eval(stringNumber)
                if (result || result == 0) {
                    if (Number.isInteger(result)) {
                        stringNumber = `${result}`
                        screenElement.innerHTML = stringNumber
                    } else {
                        stringNumber = `${result.toFixed(2)}`
                        screenElement.innerHTML = stringNumber
                    }

                }

            }
        })
    }
}
getValueInput()

// var name1 ='thanh'
// console.log(name1.slice(0,name1.length-1))






