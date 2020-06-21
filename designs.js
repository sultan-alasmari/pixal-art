// Select color input
// Select size input


const inputHeight = document.getElementById('inputHeight');

const inputWidth = document.getElementById('inputWidth');

const sizePicker = document.getElementById('sizePicker');

const colorPicker = document.getElementById('colorPicker');

const pixelCanvas = document.getElementById('pixelCanvas');


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {

    pixelCanvas.innerHTML = '';

    event.preventDefault();

    makeGrid();

});

pixelCanvas.addEventListener('click', function(event) {

    if (event.target.nodeName === 'TD') {


        event.target.style.backgroundColor = colorPicker.value;
    }

});

/*
This makeGrid function to know :
1- the height that user insert
2- first loop to know the height that have variable (i)
3- we are use insertRow method
4-In second loop we are use insertCell method
*/



function makeGrid() {

    for (let i = 0; i < inputHeight.value; i++) {

        const row = pixelCanvas.insertRow(0);

        for (let k = 0; k < inputWidth.value; k++) {


            row.insertCell(0);
        }

    }




};
