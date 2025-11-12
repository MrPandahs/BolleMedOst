const bolleBar = document.querySelector('#horizontal-bar-bolle')
const smørBar = document.querySelector('#horizontal-bar-smør')
const ostBar = document.querySelector('#horizontal-bar-ost')

smørBar.style.display = "none"
ostBar.style.display = "none"

const bolle = document.querySelector('#bolle')
const smør = document.querySelector('#smør')
const ost = document.querySelector('#ost')

const horiztontalBarBolle = bolleBar.getContext('2d');
const chartBolle = new Chart(horiztontalBarBolle, {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Alice",
                data: [4.00]
            },
            {
                label: "Amar",
                data: [4.00]
            },
            {
                label: "Andersen Bakery",
                data: [6.00]
            },
            {
                label: "Il Buco",
                data: [6.00]
            },
            {
                label: "Kasada",
                data: [4.50]
            },
            {
                label: "Sneezing Fruits",
                data: [6.00]
            },
            {
                label: "Yellow Bird Coffee",
                data: [3.50]
            }],
        labels: ["Bolle"]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
})

const horiztontalBarSmør = smørBar.getContext('2d');
const chartSmør = new Chart(horiztontalBarSmør, {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Alice",
                data: [6.00]
            },
            {
                label: "Amar",
                data: [5.00]
            },
            {
                label: "Andersen Bakery",
                data: [4.00]
            },
            {
                label: "Il Buco",
                data: [5.00]
            },
            {
                label: "Kasada",
                data: [5.50]
            },
            {
                label: "Sneezing Fruits",
                data: [6.00]
            },
            {
                label: "Yellow Bird Coffee",
                data: [4.50]
            }],
        labels: ["Smør"]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
})

const horiztontalBarOst = ostBar.getContext('2d');
const chartOst = new Chart(horiztontalBarOst, {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Alice",
                data: [6.00]
            },
            {
                label: "Amar",
                data: [3.00]
            },
            {
                label: "Andersen Bakery",
                data: [3.00]
            },
            {
                label: "Il Buco",
                data: [5.00]
            },
            {
                label: "Kasada",
                data: [5.00]
            },
            {
                label: "Sneezing Fruits",
                data: [5.00]
            },
            {
                label: "Yellow Bird Coffee",
                data: [6.00]
            }],
        labels: ["Ost"]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
})

//--------------------------------------------------------------------------

const isBolleChecked = () => {
    if (bolle.checked) {
        smørBar.style.display = "none"
        ostBar.style.display = "none"
        bolleBar.style.display = "block"
    }
}

const isSmørChecked = () => {
    if (smør.checked) {
        bolleBar.style.display = "none"
        ostBar.style.display = "none"
        smørBar.style.display = "block"
    }
}

const isOstChecked = () => {
    if (ost.checked) {
        bolleBar.style.display = "none"
        smørBar.style.display = "none"
        ostBar.style.display = "block"
    }
}

//--------------------------------------------------------------------------

const setBolleChecked = () => {
    bolle.innerText = 'checked="checked"'
    isBolleChecked()
}

const setSmørChecked = () => {
    smør.innerText = 'checked="checked"'
    isSmørChecked()
}

const setOstChecked = () => {
    ost.innerText = 'checked="checked"'
    isOstChecked()
}

bolle.addEventListener("click", setBolleChecked)

smør.addEventListener("click", setSmørChecked)

ost.addEventListener("click", setOstChecked)