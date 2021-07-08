// Function called whenever user tab on any box
const initDecide = () => {
// function initDecide() {

    // Setting DOM to all boxes or input field
    var b1, b1, b3, b4, b5, b6, b7, b8, b9, i, bArray = [];
    for (i = 1; i <= 9; i++) {
        bArray[i] = document.getElementById("b" + i).value;
    }
    console.log(bArray);

    // Checking if Player X won or not and after 
    // that disabled all the other fields
    if (
        ((bArray[1] == 'X') && (bArray[2] == 'X') && (bArray[3] == 'X')) ||
        ((bArray[1] == 'X') && (bArray[4] == 'X') && (bArray[7] == 'X')) ||
        ((bArray[1] == 'X') && (bArray[5] == 'X') && (bArray[9] == 'X')) ||

        ((bArray[2] == 'X') && (bArray[5] == 'X') && (bArray[8] == 'X')) ||

        ((bArray[3] == 'X') && (bArray[5] == 'X') && (bArray[7] == 'X')) ||
        ((bArray[3] == 'X') && (bArray[6] == 'X') && (bArray[9] == 'X')) ||

        ((bArray[4] == 'X') && (bArray[5] == 'X') && (bArray[6] == 'X')) ||

        ((bArray[7] == 'X') && (bArray[8] == 'X') && (bArray[9] == 'X'))

    ) {
        document.getElementById('print').innerHTML = "Player X won";
        for (i = 1; i <= 9; i++) {
            bArray[i] = document.getElementById("b" + i).disabled = true;
        }
        window.alert('Player X won');
    }

    // Checking of Player X finsh
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if (
        ((bArray[1] == '0') && (bArray[2] == '0') && (bArray[3] == '0')) ||
        ((bArray[1] == '0') && (bArray[4] == '0') && (bArray[7] == '0')) ||
        ((bArray[1] == '0') && (bArray[5] == '0') && (bArray[9] == '0')) ||

        ((bArray[2] == '0') && (bArray[5] == '0') && (bArray[8] == '0')) ||

        ((bArray[3] == '0') && (bArray[5] == '0') && (bArray[7] == '0')) ||
        ((bArray[3] == '0') && (bArray[6] == '0') && (bArray[9] == '0')) ||

        ((bArray[4] == '0') && (bArray[5] == '0') && (bArray[6] == '0')) ||

        ((bArray[7] == '0') && (bArray[8] == '0') && (bArray[9] == '0'))

    ) {
        document.getElementById('print').innerHTML = "Player 0 won";
        for (i = 1; i <= 9; i++) {
            bArray[i] = document.getElementById("b" + i).disabled = true;
        }
        window.alert('Player 0 won');
    }

    // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if (
        (bArray[1] == 'X' || bArray[1] == '0') &&
        (bArray[2] == 'X' || bArray[2] == '0') &&
        (bArray[3] == 'X' || bArray[3] == '0') &&
        (bArray[4] == 'X' || bArray[4] == '0') &&
        (bArray[5] == 'X' || bArray[5] == '0') &&
        (bArray[6] == 'X' || bArray[6] == '0') &&
        (bArray[7] == 'X' || bArray[7] == '0') &&
        (bArray[8] == 'X' || bArray[8] == '0') &&
        (bArray[9] == 'X' || bArray[9] == '0')
    ) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
    } else {
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        } else {
            document.getElementById('print').innerHTML = "Player 0 Turn";
        }
    }
}

// Function to reset game
const resetGame = () => {
// function resetGame() {
    location.reload();
    for (i = 1; i <= 9; i++) {
        document.getElementById("b" + i).value = '';
    }
}

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
flag = 1;

const toogleTurn = (element) => {
// function toogleTurn(element) {
    var i;
    console.log(element.getAttribute("id"));
    for (i = 1; i <= 9; i++) {
        if (element.getAttribute("id") == "b" + i) {
            if (flag == 1) {
                document.getElementById("b" + i).value = "X";
                document.getElementById("b" + i).disabled = true;
                flag = 0;
            } else {
                document.getElementById("b" + i).value = "0";
                document.getElementById("b" + i).disabled = true;
                flag = 1;
            }
        }
    }
}

const onSignup = () => {
// function onSignup() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        message.innerHTML = user.email + " use in another account";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    console.log(user);


}

const onLogin = () => {
// function onLogin() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        message.classList.add("alert");
        message.classList.add("alert-dark");
        message.innerHTML = "Invalid credentials";
    }
    // clear state
    setTimeout(() => {
        message.classList.remove("alert");
        message.classList.remove("alert-dark");
        message.innerHTML = "";
    }, 2000);
}

const onLogout = () => {
// function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}

const getCurrentUser = () => {
// function getCurrentUser() {
    var detail = document.getElementById("detail");
    if (JSON.parse(localStorage.getItem("user"))) {
        var user = JSON.parse(localStorage.getItem("user"));
        detail.innerHTML = "Loggedin as " + user.email.split("@")[0];
    } else {
        location.href = "login.html";
    }
}