let name = ''
let rep = 0
let seq = 0
let total = 0

function nama(e) {
    name = e.target.value
    return name
}

function repetition(e) {
    rep = e.target.value
    return rep
}

function input(e) {
    //agar tidak merefresh
    e.preventDefault();
    let user = {name: name, repetition: rep, exercise: ['Burpees', 'Crab to Toe', 'Jogging', 'Jumping Jack']}
    console.log(seq)
    console.log(name);

    //cek input
    if (!name) {
    return alert(`Please enter your name`)}
    if (!rep) {
    return alert(`Please enter your repetition`)
    }
    if (seq == 0 ) {
    alert(`Welcome ${name}! Get ready for ${rep} repetition.`)
    }

    // proses DOM
    if (seq == 0) {
        let calories = rep * 0.3
        total += calories
        let first = `<h2 id ='form'>${user.exercise[0]}</h2>
            <img src="/img/burpees.gif">
            <p>Do the ${user.exercise[0]} for ${rep} repetition </p>
            <p>This ${rep} repetition ${user.exercise[0]} excercise will burnt ${calories} Kal
            <p> </p> <button onclick=input(event)>next</button>`
        var x = document.getElementById("form");
        x.innerHTML = first;
    }

    if (seq == 1) {
        let calories1 = rep * 0.5
        total += calories1
        let second = `<h2>${user.exercise[1]}</h2>
            <img src="/img/crabtoetouch.gif">
            <p>Do the ${user.exercise[1]} for ${rep} repetition </p> 
            <p>This ${rep} repetition ${user.exercise[0]} excercise will burnt ${calories1} Kal
            <button onclick=input(event)>next</button>`
        var x = document.getElementById("form");
        x.innerHTML = second;
    }

    if (seq == 2) {
        let calories2 = rep * 0.4
        total += calories2
        let third = `<h2>${user.exercise[2]}</h2>
            <img src="/img/jogginginplace.gif">
            <p>Do the ${user.exercise[2]} for ${rep} repetition </p>
            <p>This ${rep} repetition ${user.exercise[0]} excercise will burnt ${calories2} Kal
            <button onclick=input(event)>next</button>`
        var x = document.getElementById("form");
        x.innerHTML = third;
    }

    if (seq == 3) {
        let calories3 = rep * 0.3
        total += calories3
        let third = `<h2>${user.exercise[3]}</h2>
            <img src="/img/jumpingjack.gif">
            <p>Do the ${user.exercise[3]} for ${rep} </p> 
            <p>This ${rep} repetition ${user.exercise[0]} excercise will burnt ${calories3} Kal
            <button onclick=input(event)>next</button>`
        var x = document.getElementById("form");
        x.innerHTML = third;
    }

    if (seq == 4) {
        let third = `<h2>Good Job, ${user['name']}!</h2>
            <p>Thank you, you have burnt approximately ${total} Kal</p> 
            <p>Thanks to <a href='menshealth.com/workouts'> MensHealth.com for the illustration </a></p><button onclick='form'>Go Back</button>`
        var x = document.getElementById("form");
        x.innerHTML = third;
    }

    seq += 1
}
