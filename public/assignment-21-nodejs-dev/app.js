const BASE_URL = "http://localhost:5000";

$("form").submit(function (e) {
  e.preventDefault();
});

const signup = () => {
  console.log();
  const obj = {
    email: $("#email").val(),
    password: $("#password").val(),
    full_name: $("#fullName").val(),
    address: $("#address").val(),
  };
  // Make a request for a user with a given ID
  // post(url,body,headers)
  axios
    .post(`${BASE_URL}/registration`, obj)
    .then((response) => {
      $("#alert-response.alert-success")
        .append(response.data)
        .css("display", "block");
      console.log(response);
      setTimeout(function () {
        location.href = "index.html";
      }, 5000);

    })
    .catch((error) => {
      $("#alert-response.alert-danger")
        .append(response.data)
        .css("display", "block");
      console.log(error);
    });
  setTimeout(function () {
    $("#alert-response").css("display", "none").text("");
  }, 5000);
};

const login = () => {
  const obj = {
    email: $("#email").val(),
    password: $("#password").val(),
  };
  console.log(obj);
  // post(url,body,headers)
  axios
    .post(`${BASE_URL}/login`, obj)
    .then((response) => {
      if (response.data.email) {
        // store user id in storage
        alert("Go to dashboard");
      }
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createPost = () => {
  // get user id from storage
  const userID = "61116029a4eed425e4742d8a";
  const obj = {
    title: "ali",
    discription: "M K A",
    user: userID,
    post_type: "public",
  };
  // Make a request for a user with a given ID
  // post(url,body,headers)
  axios
    .post(`${BASE_URL}/create`, obj)
    .then((response) => {
      console.log(response.data);
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
