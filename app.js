const platos = [
    {
      titulo: "el Puchero Castellano con judias rojas",
      precio: "12 €",
      Receta: "Legumbres",
      poster:
        "https://i.blogs.es/cc5e4e/olla-podrida-de-burgos/1024_682.jpg",
      estado: "Visto",
    },

    {
        titulo: "Lentejas a la maninera, con pescado y marisco",
        precio: "12 €",
        Receta: "Legumbres",
        poster:
          "https://i.blogs.es/f4ca2d/lentejas-a-la-marineras-pakus/1024_682.jpg",
        estado: "Viendo",
      },

      {
        titulo: "patatas a la marinera,el reconfortante guiso para entrar el calor",
        precio: "12 €",
        Receta: "pescado y marisco",
        poster:
          "https://i.blogs.es/620c8e/patatas-marinera-futurobloguero/1024_682.jpg",
        estado: "Pendiente",
      },

      {
        titulo: "potaje de habichuelas, el plato de cuchera Andaluz y reconfortante",
        precio: "12 €",
        Receta: "legrumbres",
        poster:
          "https://i.blogs.es/736c5a/potaje-de-habichuelas/1024_682.jpg",
        estado: "Visto",
      },

      {
        titulo: "salmon a la placha y legrume",
        precio: "12 €",
        Receta: "pescado",
        poster:
          "https://i.pinimg.com/originals/28/c5/b8/28c5b80e1e71e704b103466829835d89.jpg",
        estado: "Viendo",
      },
      {
        titulo: "La paella",
        precio: "12 €",
        Receta: "valenciano",
        poster:
          "https://www.dream-alcala.com/wp-content/uploads/2013/11/paella-mixta.jpg",
        estado: "Pendiente",
      },
      {
        titulo: "kibrit kebab",
        precio: "5 €",
        Receta: "cocina turca",
        poster:
          "https://i.etsystatic.com/48327466/r/il/89ae16/5657275921/il_794xN.5657275921_hyi5.jpg",
        estado: "Visto",
      },

];
const postres = [
  {
    titulo: "queso woolworth clasico",
    precio: "5 €",
    Receta: "pastel",
    poster:
      "https://i.etsystatic.com/31908958/r/il/c56076/4051267355/il_794xN.4051267355_rz56.jpg",
    estado: "Visto",
  },

  {
      titulo: "tarta de queso",
      precio: "5 €",
      Receta: "la viña",
      poster:
        "https://imag.bonviveur.com/tarta-de-queso-la-vina.webp",
      estado: "Viendo",
    },

    {
      titulo: "tiramisu",
      precio: "5 €",
      Receta: "cocina turca",
      poster:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/poster-dessert-design-template-2f05c5bbec19bdb5ead4827b41a916e8_screen.jpg?ts=1637040550",
      estado: "Pendiente",
    },

    {
      titulo: "postre de fruta",
      precio: "5 €",
      Receta: "Vladocar",
      poster:
        "https://cdn.recetasderechupete.com/wp-content/uploads/2012/08/sorbete_sandia_te.jpg",
      estado: "Visto",
    },

    {
      titulo: "galletas",
      precio: "5 €",
      Receta: "galletas",
      poster:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/bc/97/e3/20181214-084155-largejpg.jpg",
      estado: "Visto",
    },
    {
      titulo: "Fruta fresca",
      precio: "5 €",
      Receta: "Divina",
      poster:
        "https://www.divinacocina.es/wp-content/uploads/crema-de-yogur-con-frutas.jpg",
      estado: "Viendo",
    },{
      titulo: "postres con frutas",
      precio: "5 €",
      Receta: "pngtree",
      poster:
        "https://previews.123rf.com/images/nurrka/nurrka1602/nurrka160200015/52222310-banderas-con-los-diferentes-postres-con-frutas-para-su-dise%C3%B1o-anuncios-carteles-men%C3%BA.jpg",
      estado: "Pendiente",
    },
    {
      titulo: "donut coloridos",
      precio: "5 €",
      Receta: "Alamy",
      poster:
        "https://c8.alamy.com/compes/2rf3tpb/conjunto-de-rosquillas-de-colores-aislados-sobre-fondo-blanco-ilustracion-de-acuarela-2rf3tpb.jpg",
      estado: "Visto",
    },




];


//Recupero mi contenedor main a nivel global
const main = document.querySelector("main");

//Esta función va a pintar la página de inicio
const pintarInicio = () => {
  main.innerHTML = `
  <h2>BIENVENIDOS/AS</h2>
  `;
};
//Esta función va a pintar la página de platos
const pintarPlatos = () => {
  main.innerHTML = `
  <h2>PLATOS</h2>
  <section id="platos"></section>
 `;

  const section = document.querySelector("#platos");

  for (const plato of platos) {
    section.innerHTML += `
    <article>
      <h3>${plato.titulo}</h3>
      <h4>${plato.Receta} - ${plato.precio}</h4>
      <img src=${plato.poster} alt=${plato.titulo}/>
      <p class=${plato.estado}>${plato.estado}</p>

    </article>
    `;
  }
};
  //Esta función va a pintar la página de postres
  const pintarPostres = () => {
    main.innerHTML = `
    <h2>POSTRES</h2>
    <section id="postres"></section>
   `;

   
  
    const section = document.querySelector("#postres");
  
    for (const postre of postres) {
      section.innerHTML += `
      <article>
        <h3>${postre.titulo}</h3>
        <h4>${postre.Receta} - ${postre.precio}</h4>
        <img src=${postre.poster} alt=${postre.titulo}/>
        <p class=${postre.estado}>${postre.estado}</p>
  
      </article>
      `;
    }
  };
  const pintarContactos = () => {
    main.innerHTML = `
    <h2>CONTACTOS</h2>
    <section id="contactos"></section>
   `;
   const section = document.querySelector("#contactos");

   for (const contacto of contactos) {
     section.innerHTML += `
     <article>
       <h3>${contacto.telefono}</h3>
       <h4>${contacto.whatsapp} - ${contacto.email}</h4>
       <img src=${contacto.direccion} alt=${contacto.telefono}/>
       <p class=${contacto.estado}>${contacto.estado}</p>
 
     </article>
     `;
   }
 };

    

  //Por defecto ejecutamos la función de inicio
  pintarInicio();
  
  //Recuperamos los 3 links
  const iniciolink = document.querySelector("#inicio");
  const menuslink = document.querySelector("#linkplatos");
  const postreslink = document.querySelector("#linkpostres");
  const contactoslink = document.querySelector("#linkcontactos");
  
  //Le vamos a dar un evento click a cada uno de los links para que disparen las 3 funciones que hemos hecho arriba
  iniciolink.addEventListener("click", () => {
    pintarInicio();
  });
  
  menuslink.addEventListener("click", () => {
    pintarPlatos();
  });
  
  postreslink.addEventListener("click", () => {
    pintarPostres();
  });
 
  contactoslink.addEventListener("click", () => {
    pintarContactos();
  });

  const contactos = [
    {
      telefono: "+123456789",
      email: "correo@restaurente.com",
      whatsapp: "600394658",
      direccion:"https://upload.wikimedia.org/wikipedia/commons/d/d2/All%C3%A9e_de_la_Comtesse-de-S%C3%A9gur%2C_Parc_Monceau%2C_Paris_8.jpg",
      estado:" visto",
      },
    ];