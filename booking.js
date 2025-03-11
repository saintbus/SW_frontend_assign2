function check() {
    let quan = document.getElementById("quant");
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");

    let quanInt = parseInt(quan.value);

    let condition = true;

    if(quan.value == '') {
        alert('Please add quantity');
        condition = false;
    } else if(quanInt > 15 || quanInt < 1 ) {
        alert('Quantity must be in range 1-15');
        condition = false;
    }

    if(name.value == '') {
        alert('Please enter your name before submit');
        condition = false;
    }

    if(tel.value == '') {
        alert('Please enter telephone number before submit');
        condition = false;
    }

    if(condition) {
        alert('Submit Successfully!!')
    }
}

function clickJoin() {
    let join = document.getElementById("join_land");

    if(join.checked) {
        let confirmBox = confirm("Are you sure to buy airplane ticket buy yourself?");

        if(confirmBox) {
            alert('You choose to buy airplane ticket by yourself!');
        } else {
            let join = document.getElementById("join_land");
            join.checked = false;
        }
    }
}