import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function checkFollowApi(UserID) {
  const url = `${API_HOST}/query-relations?id=${UserID}`;

  const params = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function followUserApi(UserID) {
  const url = `${API_HOST}/high-relations?id=${UserID}`;

  const params = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function unFollowUserApi(UserID) {
  const url = `${API_HOST}/down-relations?id=${UserID}`;

  const params = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
