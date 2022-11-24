/* ********************** Start CTA ********************** */
contactUsForm.onsubmit = (event) => {
  event.preventDefault();
  let name = document.querySelector("#fullName").value;
  let mess = document.querySelector("#mess").value;
  let phone = document.querySelector("#phone").value;
  let mail = document.querySelector("#email").value;
  if (name === "" || mess === "") {
    alert("Por favor, verifique que ha escrito el nombre y el mensaje.");
  } else {
    console.log(`Full name: ${name}`);
    if (phone != "") {
      console.log(`Phone: ${phone}`);
    }
    if (mail != "") {
      console.log(`Email: ${mail}`);
    }
    console.log(`Message: ${mess}`);
    alert(
      `Hello ${name},\n\nHemos enviado a la central este mensaje de tu parte:\n${mess}.\n\nEstamos deseando saber más de ti.`
    );
  }
};
