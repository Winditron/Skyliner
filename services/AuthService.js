export default class AuthService {
  static login = (credentials) => {
    return fetch(`${config.base.apiURL}/auth/signIn`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  };
}
