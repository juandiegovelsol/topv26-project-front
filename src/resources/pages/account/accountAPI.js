export const postLogin = async ({ email, password }) => {
  const url = `${process.env.REACT_APP_URL}/auth/local/login`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postRegister = async ({
  email,
  password,
  name,
  lastname,
  role,
}) => {
  const url = `${process.env.REACT_APP_URL}/auth/local`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        lastname,
        role,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
