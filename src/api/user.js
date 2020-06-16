import { API_HOST } from "../utils/constants";
import { getTokenApi } from "./auth";

export function getUserApi(id) {
  const url = `${API_HOST}/view-profiles?id=${id}`;

  const params = {
    // GET is by defeault
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };
  // .then  is the callback to execute when the promise is resolved
  return fetch(url, params)
    .then((response) => {
      // eslint-disable-next-line no-throw-literal
      if (response.status >= 400) throw null;
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function uploadBannerApi(file) {
  const url = `${API_HOST}/upload-banners`;

  const formData = new FormData();
  formData.append("banner", file);
  // console.log(formData);

  const params = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getTokenApi()}`,
    },
    body: formData,
  };

  return fetch(url, params)
    .then((response) => {
      // Header response
      return response.json();
    })
    .then((result) => {
      // body response
      return result;
    })
    .catch((err) => {
      return err;
    });
}
