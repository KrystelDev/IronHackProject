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

// ver que hay antes de rellenar:
//Listing all resources
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Enviamos los datos a la API y entonces
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Simplify",
    body: "Simplify is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus sem, id vulputate justo ornare non. Nullam et vehicula sem. Pellentesque bibendum massa non nisl posuere cursus. Aliquam ac eros pretium neque consequat facilisis. Ut sit amet justo varius ex ultrices fringilla. Sed vel turpis fringilla ante gravida vestibulum. Etiam a sollicitudin leo. Nunc metus lectus, lacinia ut arcu quis, pretium congue lacus.",
    userId:
      "Aliquam blandit varius metus, in mattis orci convallis sit amet. Fusce et sem ac velit placerat ultrices in id dolor. Sed eget auctor metus. Sed suscipit fringilla lectus, a maximus justo bibendum a. Donec et pellentesque nisl, vitae tempus lorem. Sed efficitur cursus rhoncus. Duis placerat nisi quis mi tincidunt, sit amet tincidunt urna convallis. Nam et sagittis felis. Pellentesque placerat orci sodales nisi convallis ultrices. Nunc posuere neque eu mi imperdiet ullamcorper. Praesent tempor convallis rutrum. Vestibulum dignissim pellentesque eros in placerat. Etiam at nisi quis quam sollicitudin vehicula sit amet vel mi.",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => {
    proyect = json;
    document.querySelector("#titleProyect").innerHTML += json.title;
    document.querySelector("#bodyProyect").innerHTML += json.body;
    document.querySelector("#userIdProyect").innerHTML += json.userId;
  })
  .catch((error) => console.log(error));
