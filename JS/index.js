/* ********************** Start CTA ********************** */
if (typeof contactUsForm != "undefined") {
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
}

/* ********************** Start CTA ********************** */

if (typeof CTAForm != "undefined") {
  CTAForm.onsubmit = (event) => {
    event.preventDefault();
    let mail = document.querySelector("#mail").value;
    if (mail != "") {
      console.log(`Nuevo subscriptor: ${mail}`);
      alert(
        `Hello,\n\nRecibimos tu solicitud. Recibirás nuestras noticias al correo ${mail} . Recuerda de mirar al spam o correo no deseado.`
      );
    } else {
      alert(
        `Hello,\n\nSolo debe escribir su correo electornico para subscribirse. Hasta pronto!`
      );
    }
  };
}

/* ********************** Start Project (selected)********************** */
// prueba para rellenar un objeto a la api
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
