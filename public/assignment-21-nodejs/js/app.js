const BASE_URL = "http://localhost:5000";

const onSignup = () => {
  // send data to MongoDB
  // get input values
  const obj = {
    username: $("#username").val(),
    email: $("#email").val(),
    full_name: $("#full_name").val(),
    address: $("#address").val(),
  };
  // Make a request for a user with a given ID
  // post(url,body,headers)
  axios
    .post(`${BASE_URL}/registration`, obj)
    .then((response) => {
      console.log(response);
      if (response.data.toLowerCase().indexOf("created") >= 0) {
        $("#alert-response")
          .removeClass("alert-danger")
          .addClass("alert-success")
          .append(response.data)
          .css("display", "block");
        setTimeout(function () {
          location.href = "login.html";
        }, 5000);
      } else {
        $("#alert-response")
          .removeClass("alert-success")
          .addClass("alert-danger")
          .append(response.data)
          .css("display", "block");
      }
    })
    .catch((error) => {
      $("#alert-response")
        .addClass("alert-danger")
        .append(error)
        .css("display", "block");
      console.log(error);
    });
  setTimeout(function () {
    $("#alert-response").css("display", "none").text("");
  }, 5000);
};

const onLogin = () => {
  // get data from MongoDB
  // get input values
  const obj = {
    username: $("#username").val(),
    email: $("#email").val(),
  };
  console.log(obj);
  // Make a request for a user with a given ID
  // post(url,body,headers)
  axios
    .get(`${BASE_URL}/login`, obj)
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        $("#alert-response")
          .removeClass("alert-danger")
          .addClass("alert-success")
          .append('Login Successful')
          .css("display", "block");
        localStorage.setItem("user", JSON.stringify(obj));
        setTimeout(function () {
          location.href = "index.html";
        }, 5000);
      } else {
        $("#alert-response")
          .removeClass("alert-success")
          .addClass("alert-danger")
          .append(response.data)
          .css("display", "block");
      }
    })
    .catch((error) => {
      $("#alert-response")
        .addClass("alert-danger")
        .append(error)
        .css("display", "block");
      console.log(error);
    });
  setTimeout(function () {
    $("#alert-response").css("display", "none").text("");
  }, 5000);

  //=======================
  // get data from LocalStorage
  // get input values
  //   var email = document.getElementById("email");
  //   var username = document.getElementById("username");

  //   var user = {
  //     email: email.value,
  //     username: username.value,
  //   };

  //   var users = JSON.parse(localStorage.getItem("users")) || [];
  //   // get indx
  //   var currentUser = users.find(function (val) {
  //     return (
  //       val.email.toLowerCase() === user.email.toLowerCase() &&
  //       val.password === user.password
  //     );
  //   });
  //   if (currentUser) {
  //     localStorage.setItem("user", JSON.stringify(currentUser));
  //     // user login
  //     location.href = "index.html";
  //   }
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
