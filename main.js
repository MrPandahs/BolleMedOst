const horiztontalBar = document.querySelector('#horizontal-bar').getContext('2d');
const chart = new Chart(horiztontalBar, {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Alice",
                data: [4.00, 6.00, 6.00]
            },
            {
                label: "Amar",
                data: [4.00, 5.00, 3.00]
            },
            {
                label: "Andersen Bakery",
                data: [6.00, 4.00, 3.00]
            },
            {
                label: "Il Buco",
                data: [6.00, 5.00, 5.00]
            },
            {
                label: "Kasada",
                data: [4.50, 5.50, 5.00]
            },
            {
                label: "Sneezing Fruits",
                data: [6.00, 6.00, 5.00]
            },
            {
                label: "Yellow Bird Coffee",
                data: [3.50, 4.50, 6.00]
            }],
        labels: ["Bolle", "Smør", "Ost"]
    },
    options: {
        indexAxis: 'y'
    }
})

const bolle = document.querySelector('#bolle')
const smør = document.querySelector('#smør')
const ost = document.querySelector('#ost')

const ingredientChecked = async function()  {

}
ingredientChecked()