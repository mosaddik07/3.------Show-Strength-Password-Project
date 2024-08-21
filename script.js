let pass = document.getElementById('password');
let msg = document.getElementById('massege');
let str = document.getElementById('strong');

function weakFunc() {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
        pass.style.borderColor = 'white';
    }

    if (pass.value.length <= 4) {
        str.innerHTML = "Weak"
        pass.style.borderColor = 'red';
        str.style.color = 'red';
    }
    else if (pass.value.length < 8) {
        str.innerHTML = "Medium";
        pass.style.borderColor = 'yellow';
        str.style.color = 'yellow';
    }
    else if (pass.value.length > 8) {
        str.innerHTML = "Strength";
        pass.style.borderColor = 'green';
        str.style.color = 'green';

    }


}