const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());


// setInterval(function(){},1000)

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleDateString();
}, 1000);

```

## project 3 solution code

#javascript
```