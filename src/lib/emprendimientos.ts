export type Emprendimiento = {
  slug: string;
  nombre: string;
  descripcion: string;
  imagenPreviewUrl: string;
  productos: Producto[];
  whatsAppPhone: string;
  instagram: string;
  backgroundColor?: string;
  backgroundHeaderColor?: string;
  footerDescription?: string;
  imagePerfil: string;
  backgroundFontHeaderColor: string;
};

export type Producto = {
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: string;
}

export const emprendimientos: Emprendimiento[] = [
  {
    slug: "about",
    nombre: "Nombre Del emprendimiento",
    descripcion: "Descripcion de lo que es, lo que hace, donde está, etc. si quiere agregar como lo vende.",
    imagenPreviewUrl: "/placeholder.jpg",
    instagram: "perfil.falso",
    whatsAppPhone: "221-XXX-XXXX",
    productos: [
      {
        nombre: 'Articulo 1',
        descripcion: 'Contar de que es el articulo, que hace, etc.',
        imagen: 'https://picsum.photos/200/300/?random=1&blur',
        precio: '1000',
      },
      {
        nombre: 'Articulo 2',
        descripcion: 'Contar de que es el articulo, que hace, etc.',
        imagen: 'https://picsum.photos/200/300/?random=2&blur',
        precio: '1500',
      },
      {
        nombre: 'Articulo 3',
        descripcion: 'Contar de que es el articulo, que hace, etc.',
        imagen: 'https://picsum.photos/200/300/?random=3&blur',
        precio: '2000',
      },
      {
        nombre: 'Articulo 4',
        descripcion: 'Contar de que es el articulo, que hace, etc.',
        imagen: 'https://picsum.photos/200/300/?random=4&blur',
        precio: '2500',
      },
      {
        nombre: 'Articulo 5',
        descripcion: 'Contar de que es el articulo, que hace, etc.',
        imagen: 'https://picsum.photos/200/300/?random=5&blur',
        precio: '3000',
      },
      {
        nombre: 'Articulo 6',
        descripcion: 'Contar de que es el articulo, que hace, etc.',
        imagen: 'https://picsum.photos/200/300/?random=6&blur',
        precio: '3500',
      },
    ],
    imagePerfil: "",
    backgroundFontHeaderColor: ""
  },
  {
    slug: "cocol2",
    nombre: "Pastelería Artesanal Cocol",
    descripcion: "Tortas artesanales hechas con amor en La Plata 🍰",
    imagenPreviewUrl: "/placeholder.jpg",
    whatsAppPhone: "1136724619",
    instagram: "cocol.pasteleria",
    productos: [
      {
        nombre: 'Torta de cumpleaños',
        descripcion: 'Decoración personalizada. ¡Consultanos por sabores!',
        precio: "4500",
        imagen: 'https://source.unsplash.com/featured/?birthday-cake',
      },
      {
        nombre: 'Torta de chocolate',
        descripcion: 'Bizcochuelo húmedo y cobertura de mousse.',
        precio: "4800",
        imagen: 'https://source.unsplash.com/featured/?chocolate-cake',
      },
    ],
    imagePerfil: "",
    backgroundFontHeaderColor: ""
  },
  {
    slug: "panaderia-luna",
    nombre: "Panadería Luna",
    descripcion: "Pan recién horneado todos los días.",
    imagenPreviewUrl: "/placeholder.jpg",
    instagram: "panaderia.luna",
    whatsAppPhone: "2211234567",
    productos: [
      {
        nombre: "Pan de campo",
        descripcion: "Masa madre cocida en horno de barro.",
        precio: "1800",
        imagen: "/placeholder.jpg",
      },
    ],
    imagePerfil: "",
    backgroundFontHeaderColor: ""
  },
  {
    slug: "dulce.momentopostres",
    nombre: "Dulce Momento",
    descripcion: "Postres artesanales en Barrio el Hipodromo, La Plata 🍰 \n Costo del envio consultar por la zona. \n Cualquier consulta Al Mensaje Directo. 🌸",
    imagenPreviewUrl: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749956919/Captura_de_pantalla_2025-06-15_000818_iwwrz6.png",
    instagram: "dulce.momentopostres",
    whatsAppPhone: "2216715803",
    backgroundHeaderColor: "#0a0056",
    footerDescription: "Costo del envio consultar por la zona. Cualquier consulta Al Mensaje Directo. 🌸",
    productos: [
      {
        nombre: "Chocotorta",
        descripcion: "Torta chocotorta con crema y cafe con chocolinas.",
        precio: "N°3 $ 3100 | N°5 $ 4100",
        imagen: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749955391/Captura_de_pantalla_2025-06-14_234211_cnrjlz.png",
      },
      {
        nombre: "Frutilla con Crema",
        descripcion: "Nuevo postres frutilla con crema 💣",
        precio: "N°3 $ 3100 | N°5 $ 4100",
        imagen: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749955002/Captura_de_pantalla_2025-06-14_233627_hgk3gr.png",
      },
      {
        nombre: "Oreo",
        descripcion: "Postres Oreo con crema 💣",
        precio: "N°3 $ 3100 | N°5 $ 4100",
        imagen: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749955090/Captura_de_pantalla_2025-06-14_233800_m6swx7.png",
      },
      {
        nombre: "Durazno",
        descripcion: "Durazno con crema 💣",
        precio: "N°3 $ 3100 | N°5 $ 4100",
        imagen: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749955152/Captura_de_pantalla_2025-06-14_233859_edcrfq.png",
      },
      {
        nombre: "Choco oreo ",
        descripcion: "Dulce de leche con crema con oreos 💣",
        precio: "N°3 $ 3100 | N°5 $ 4100",
        imagen: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749955240/Captura_de_pantalla_2025-06-14_234022_mbrrhq.png",
      },
      {
        nombre: "Tiramisú",
        descripcion: "Torta tiramisú con crema y vainllas",
        precio: "N°3 $ 3300 | N°5 $ 4300",
        imagen: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749955300/Captura_de_pantalla_2025-06-14_234125_kwvkuc.png",
      },
      {
        nombre: "Chocomisú",
        descripcion: "Nuevo postre chocomisú Una bomba💣",
        precio: "N°3 $ 3300 | N°5 $ 4300",
        imagen: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749954863/Captura_de_pantalla_2025-06-14_233408_kyyasr.png",
      },
    ],
    imagePerfil: "https://res.cloudinary.com/dd8syliu4/image/upload/v1749956919/Captura_de_pantalla_2025-06-15_000818_iwwrz6.png",
    backgroundFontHeaderColor: "#00fff2"
  },
];

export function getAllEmprendimientos() {
  return emprendimientos;
}

export function getEmprendimientoBySlug(slug: string) {
  return emprendimientos.find((e) => e.slug === slug);
}

export function getDataToExport(e: Emprendimiento): ShareData {
  const  imagenPreviewUrl: File = new File([e.imagenPreviewUrl], `${e.slug}.png`, { type: "image/png" });
  const iamgenesAsFile: File[] = e.productos.map((p, i) => new File([p.imagen], `${e.slug + i}.png`, { type: "image/png" }));
  return {
      files: [imagenPreviewUrl, ...iamgenesAsFile],
      title: e.descripcion,
      text: e.descripcion,
    };
}
