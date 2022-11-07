export const authToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch("https://genius-car-server-one-smoky.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // local storage is not the best place to store token
      localStorage.setItem("token", data.token);
    });
};
