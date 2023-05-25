export const getAllOrders = async ({ id, token }) => {
  const url = `http://localhost:4002/order/auth/${id}`;
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
  const url = `http://localhost:4002/order/${iduser}/${idorder}`;
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
  const url = `http://localhost:4002/order/${id}`;
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
  const url = `http://localhost:4002/order/${idorder}`;
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
