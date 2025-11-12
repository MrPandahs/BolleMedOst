const verticalPie = document.querySelector('#vertical-bar').getContext('2d');
const chart = new Chart(verticalPie, {
    type: "line",
    data: {
    datasets: [{
    label: "Alice\n",
        data: []
    },
        {
            label: "Amar",
            data: []
        },
        {
            label: "Andersen Bakery",
            data: []
        },
        {
            label: "Il Buco",
            data: []
        },
        {
            label: "Kasada",
            data: []
        },
        {
            label: "Sneezing Fruits",
            data: []
        },
        {
            label: "Yellow Bird Coffee",
            data: []
    }]
    }
})
