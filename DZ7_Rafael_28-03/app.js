const one_app = document.querySelector('#one')
const two_app = document.querySelector('#two')
const thee_app = document.querySelector('#thee')
const for_app = document.querySelector('#for')
const five_app = document.querySelector('#five')
const six_app = document.querySelector('#six')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const one_p = document.querySelector('.one_app')
const two_p = document.querySelector('.two_app')
const thee_p = document.querySelector('.thee_app')
const for_p = document.querySelector('.for_app')
const five_p = document.querySelector('.five_app')
const six_p = document.querySelector('.six_app')
const button = document.createElement('button')

one_app.onclick = () => {
    const one_btn = () => {
        btn1.append(button)
        button.innerHTML = 'Скрыть ответ'
        one_app.classList.toggle('class')
        one_p.classList.toggle('one_pp')
        button.onclick = () => {
            delete one_btn()
            button.remove()
            return btn1

        }

    }
    one_btn()
}

two_app.onclick = () => {
    const two_btn = () => {
        btn2.append(button)
        button.innerHTML = 'Скрыть ответ'
        two_app.classList.toggle('class')
        two_p.classList.toggle('two_pp')
        button.onclick = () => {
            delete two_btn()
            button.remove()
            return btn2

        }

    }
    two_btn()
}

thee_app.onclick = () => {
    const thee_btn = () => {
        btn3.append(button)
        button.innerHTML = 'Скрыть ответ'
        thee_app.classList.toggle('class')
        thee_p.classList.toggle('thee_pp')
        button.onclick = () => {
            delete thee_btn()
            button.remove()
            return btn3

        }

    }
    thee_btn()
}

for_app.onclick = () => {
    const for_btn = () => {
        btn4.append(button)
        button.innerHTML = 'Скрыть ответ'
        for_app.classList.toggle('class')
        for_p.classList.toggle('for_pp')
        button.onclick = () => {
            delete for_btn()
            button.remove()
            return btn4

        }

    }
    for_btn()
}

thee_app.onclick = () => {
    const five_btn = () => {
        btn5.append(button)
        button.innerHTML = 'Скрыть ответ'
        five_app.classList.toggle('class')
        five_p.classList.toggle('five_pp')
        button.onclick = () => {
            delete five_btn()
            button.remove()
            return btn5
        }

    }
    five_btn()
}

six_app.onclick = () => {
    const six_btn = () => {
        btn6.append(button)
        button.innerHTML = 'Скрыть ответ'
        six_app.classList.toggle('class')
        six_p.classList.toggle('six_pp')
        button.onclick = () => {
            delete six_btn()
            button.remove()
            return btn6

        }

    }
    six_btn()
}