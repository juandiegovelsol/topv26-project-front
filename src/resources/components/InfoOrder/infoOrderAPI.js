export const getAllOrders = async ({ id, token }) => {
  const url = `${process.env.REACT_APP_URL}/order/auth/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async ({ iduser, idorder, token, state }) => {
  const url = `${process.env.REACT_APP_URL}/order/${iduser}/${idorder}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        state,
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {}
};

export const getUserOrders = async ({ id, token }) => {
  const url = `${process.env.REACT_APP_URL}/order/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const cancelOrder = async ({ idorder, token }) => {
  const url = `${process.env.REACT_APP_URL}/order/${idorder}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async ({
  model,
  color,
  user_iduser,
  adress,
  state,
  token,
}) => {
  const url = `${process.env.REACT_APP_URL}/order`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model,
        color,
        user_iduser,
        adress,
        state,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
