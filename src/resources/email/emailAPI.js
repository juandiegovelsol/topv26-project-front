export const sendSigninEmail = async ({ email, name, lastname }) => {
  const url1 = process.env.REACT_APP_URL;
  const url = `${url1}/email`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "'Tesla Clone' <juandiegovelsol@gmail.com>",
        to: `${email}`,
        subject: "Email Signed in",
        html: `<div style="background-color: #f5f5f5; padding: 20px;"><br/><h1 style="color: #e10000; font-size: 24px;">Welcome to Tesla, ${name} ${lastname}!</h1><br/><p style="font-size: 18px;">Thank you for joining our community. Your support and enthusiasm mean the world to us.</p><br/><p style="font-size: 18px;">We are excited to have you on board as we continue to revolutionize the automotive industry and strive for a sustainable future.</p><br/><p style="font-size: 18px;">Please feel free to explore our latest innovations and reach out to us if you have any questions or feedback.</p><br/><p style="font-size: 18px;">Once again, thank you for choosing Tesla. We appreciate you.</p></div>`,
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const sendOrderEmail = async ({
  email,
  name,
  lastname,
  model,
  color,
  price,
  idorder,
  adress,
}) => {
  const url1 = process.env.REACT_APP_URL;
  const url = `${url1}/email`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "'Tesla Clone' <juandiegovelsol@gmail.com>",
        to: `${email}`,
        subject: "Order Confirmation",
        html: `<div style="background-color: #f5f5f5; padding: 20px;"><h1 style="color: #e10000; font-size: 24px;">Order Confirmation - Tesla ${model}</h1><p style="font-size: 18px;">Dear ${name} ${lastname},</p><p style="font-size: 18px;">Congratulations! Your order for a Tesla ${model} in ${color} has been successfully confirmed.</p><p style="font-size: 18px;">Order Details:</p><ul style="font-size: 18px;"><li>Name: ${name} ${lastname}</li><li>Order Number: ${idorder}</li><li>Delivery Adress: ${adress}</li><li>Model: Tesla ${model}</li><li>Color: ${color}</li><li>Price: $${price}</li></ul><p style="font-size: 18px;">We appreciate your trust in Tesla and look forward to delivering your new vehicle soon.</p><p style="font-size: 18px;">If you have any questions or need further assistance, please don't hesitate to contact our customer support team.</p><p style="font-size: 18px;">Thank you for choosing Tesla!</p></div>`,
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
