export const getAllUsers = async ({ id, token }) => {
  const url = `http://localhost:4002/auth/local/users/${id}`;
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

export const changeUserRole = async ({ id, id2, token }) => {
  const url = `http://localhost:4002/auth/local/${id}/${id2}`;
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

export const updateUser = async ({
  id,
  token,
  email,
  password,
  name,
  lastname,
  image,
}) => {
  console.log(id, token, email, password, name, lastname, image);
  const url = `http://localhost:4002/auth/local/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        password,
        name,
        lastname,
        image,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async ({ formData }) => {
  const cloudName = "dprkaqz8q"; //must go on .env
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  try {
    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.log(error);
  }
};
