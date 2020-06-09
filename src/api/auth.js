import { API_HOST } from "../utils/constants";
export function signUpApi(user) {
  const url = `${API_HOST}/sign-ins`;
  // Creating temp user to manipulate the data,arriving properties should never be used
  const tempUser = {
    ...user,
    email: user.email.toLowerCase(),
    birthDate: new Date(),
  };
  delete tempUser.repeatPassword;

  // .then: Returns a Promise, It takes up to two arguments:
  //   callback functions for the success and failure cases of the Promise
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tempUser),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Email is in use" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  //   console.log(tempUser);
  //   console.log(url);
}

export function signInApi(user) {
  const url = `${API_HOST}/logins`;

  const data = {
    ...user,
    email: user.email.toLowerCase(),
  };

  const params = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // a fech returns a promise
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: "Invalid Email or Password" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
