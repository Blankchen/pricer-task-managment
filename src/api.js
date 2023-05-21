const baseUrl = process.env.REACT_APP_URL || "/";

export const taskAPI = {
  getList() {
    return fetch(`${baseUrl}/task`).then((res) => res.json());
  },
  create(name) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    return fetch(`${baseUrl}/task`, {
      method: "POST",
      body: urlencoded,
    }).then((res) => res.json());
  },
  update(task) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("status", !task.status);
    return fetch(`${baseUrl}/task/${task.id}`, {
      method: "PUT",
      body: urlencoded,
    }).then((res) => res.json());
  },
  delete(id) {
    return fetch(`${baseUrl}/task/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }
}