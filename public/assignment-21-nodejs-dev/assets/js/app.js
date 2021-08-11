const onSignup = () => {
  // function onSignup() {
  // get input values
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var message = document.getElementById("message");

  var user = {
    email: email.value,
    password: password.value,
  };

  var users = JSON.parse(localStorage.getItem("users")) || [];
  // get indx
  var userIdx = users.findIndex(function (val) {
    return val.email.toLowerCase() === user.email.toLowerCase();
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
};

const onLogin = () => {
  // function onLogin() {
  // get input values
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var message = document.getElementById("message");

  var user = {
    email: email.value,
    password: password.value,
  };

  var users = JSON.parse(localStorage.getItem("users")) || [];
  // get indx
  var currentUser = users.find(function (val) {
    return (
      val.email.toLowerCase() === user.email.toLowerCase() &&
      val.password === user.password
    );
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
};

const onLogout = () => {
  // function onLogout() {
  var message = document.getElementById("message");
  localStorage.removeItem("user");
  message.innerHTML = "Good Bye.!";
  // clear state
  setTimeout(() => {
    location.href = "login.html";
  }, 2000);
};

const getCurrentUser = () => {
  // function getCurrentUser() {
  var detail = document.getElementById("detail");
  if (JSON.parse(localStorage.getItem("user"))) {
    var user = JSON.parse(localStorage.getItem("user"));
    detail.innerHTML = "Loggedin as " + user.email.split("@")[0];
  } else {
    location.href = "login.html";
  }
};

const BASE_URL = "http://localhost:5000";
const createPost = () => {
  const obj = {
    title: "JS",
    description: "JS stand for javascript",
  };
  // Make a request for a user with a given ID
  // post(url,body,headers)
  axios
    .post(`${BASE_URL}/create`, obj)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPost = () => {
  // post(url, headers)
  axios
    .get(`${BASE_URL}/posts`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getPost();


const signup = () => {
    const obj = {
        "email": "ali@gmail.com",
        "full_name": "M K A",
        "address": "KHI"
    }
    // Make a request for a user with a given ID
    // post(url,body,headers)
    axios.post(`${BASE_URL}/registration`, obj)
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
}


const login = () => {
    const obj = {
        "email": "majid@gmail.com"
    }
    // post(url,body,headers)
    axios.post(`${BASE_URL}/login`, obj)
        .then((response) => {
            if (response.data.email) {
                // store user id in storage
                alert("Go to dashboard")
            }
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
}
