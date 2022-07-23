import config from "../config";

export default class ArticleService {
  static all = async () => {
    return fetch(`${config.base.apiURL}/articles`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  };

  static create = async (formData) => {
    return fetch(`${config.base.apiURL}/articles`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  };

  static update = async (article_id, formData) => {
    return fetch(`${config.base.apiURL}articles/${article_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  };

  static delete = async (article_id) => {
    return fetch(`${config.base.apiURL}articles/${article_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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
