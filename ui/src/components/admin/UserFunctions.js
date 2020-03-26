import axios from "axios";

export const register = newUser => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log("Registered");
    });
};

export const login = user => {
  if (user.email == "admin@gmail.com" && user.password == "admin") {
    return axios
      .get(
        "http://localhost:8080/spiro_2020/result-managment-system/api/read_login_details.php",
        {
          //email: "eve.holt@reqres.in",
          //password: "cityslicka"
        }
      )
      .then(res => {
        localStorage.setItem("usertoken", res.data[0].token);
        //console.log(res);
        return res.data;
      })
      .catch(err => {
        console.log("Invalid username and password, " + err);
      });
  } else {
    alert("Wrong Password");
    return;
  }
};

export const getUser = id => {
  return axios
    .get(`users/getuser/${id}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
