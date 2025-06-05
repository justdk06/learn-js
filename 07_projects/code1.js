const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height).value)

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = preseInt(document.querySelector('#height').value);
    const weight = preseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(s)
        // show the result
        results.innerHTML = `<span>{bmi}</span>`;
    }

});