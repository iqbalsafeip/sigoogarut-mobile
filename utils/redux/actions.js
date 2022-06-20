import axios from "axios";

export const base_url = "http://192.168.100.7:1337/api/";
export const base_uploads = "http://192.168.100.7:1337";
import { Storage } from "expo-storage";

export const checkLogin = (_) => async (dispatch) => {
  const item = await Storage.getItem({ key: `token` });
  if (item) {
    axios
      .get(base_url + "users/me", {
        headers: {
          Authorization: "Bearer " + item,
        },
      })
      .then((res) => {
        dispatch({ type: "SET_LOGIN", payload: true });
        dispatch({ type: "SET_USER", payload: res.data });
      });
  } else {
    dispatch({ type: "SET_LOGIN", payload: false });
  }
};

export const login = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_url + "auth/local", data)
      .then(async (res) => {
        dispatch({ type: "SET_LOGIN", payload: true });
        const token = res.data.jwt;
        await Storage.setItem({
          key: `token`,
          value: token,
        });
        resolve();
      })
      .catch((err) => {
        reject();
      });
  });
};

export const dataTempat = (_) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(base_url + "data-tempats?populate=*", {
        headers: {
          Authorization: "Bearer " + (await Storage.getItem({ key: `token` })),
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        // alert(JSON.stringify(err.response));
        reject(err);
      });
  });
};
export const dataTempatById = (id) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(
        base_url +
          "data-tempats/" +
          id +
          "?populate[data_komentars][populate]=*",
        {
          headers: {
            Authorization:
              "Bearer " + (await Storage.getItem({ key: `token` })),
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        // alert(JSON.stringify(err.response));
        reject(err);
      });
  });
};
export const getMedia = (id) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(base_url + "data-tempats/" + id + "?populate=*", {
        headers: {
          Authorization: "Bearer " + (await Storage.getItem({ key: `token` })),
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        // alert(JSON.stringify(err.response));
        reject(err);
      });
  });
};
export const getKomentar = (id) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(base_url + "data-komentars?populate[id_tempat][$eq]=" + id, {
        headers: {
          Authorization: "Bearer " + (await Storage.getItem({ key: `token` })),
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        // alert(JSON.stringify(err.response));
        reject(err);
      });
  });
};
