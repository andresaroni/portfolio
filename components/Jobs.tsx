import ProjectCard from "./ProjectCard";

import RiconPeruano1 from "@/imgs/ElRinconPeruano.png";
import Jeda247 from "@/imgs/Jeda247.jpg";
import FrankoPlus from "@/imgs/FrankoPlus.png";
import MonetixPlus from "@/imgs/MonetixPlus.png";

export default function Jobs() {

  return (
    <section id="Jobs" className="pt-20 px-2">
      <div>
        <h2 className="text-4xl font-extrabold text-center">Mis Trabajos</h2>
      </div>
      <main className="py-10 grid gap-10">

        <ProjectCard
          title="El Rincón Peruano"
          domain="el-rincon-peruano.vercel.app"
          image={RiconPeruano1}
          imageAlt="El Rincón Peruano"
          url="https://el-rincon-peruano.vercel.app"
          descriptions={[
            "Diseñé y desarrollé una página enfocada en presentar los platos principales y la identidad visual del restaurante, implementé una estructura modular y dinámica para separar secciones reutilizables dentro del sitio utilizando tecnologías nativas como JavaScript Vanilla, HTML5 y CSS3.",
            "Optimicé imágenes en formato WebP e implementé Lazy Loading desde el diseño inicial del sitio, logrando una carga prácticamente instantánea de la página.",
          ]}
        />

        <ProjectCard
          title="Jeda247"
          domain="jeda247.org"
          image={Jeda247}
          imageAlt="Jeda247"
          url="https://jeda247.org"
          descriptions={[
            "Diseñé y desarrollé un sistema web de inventario a medida para la gestión de ventas, administrando un catálogo de más de 500 cuentas de streaming.",
            "Los clientes pueden consultar sus códigos de inicio de sesión directamente desde la página web, reduciendo la necesidad de contacto manual con el administrador.",
          ]}
        />

        <ProjectCard
          title="MonetixPlus"
          domain="MonetixPlus"
          image={MonetixPlus}
          imageAlt="MonetixPlus"
          isPrivate={true}
          descriptions={[
            "Diseñé y desarrollé un sistema web de juegos online con multiples modalidades de juego con acceso restringido por el administrador, con un panel para la gestión de usuarios para aprobar su acceso o rechazarlos y puntos canjeables para los juegos.",
            "Los juegos son reactivos evitando la necesidad de recargar la página para ver el progreso y adaptables a cualquier dispositivo, con un diseño moderno y atractivo para los usuarios.",
          ]}
        />

        <ProjectCard
          title="Franko+Plus"
          domain="Franko+Plus"
          image={FrankoPlus}
          imageAlt="Franko+Plus"
          isPrivate={true}
          descriptions={[
            "Diseñé y desarrollé un sistema web multi-sucursal y escalable para la gestión de inventario, ventas y personal, donde el administrador crea sucursales y asigna vendedores dinámicamente según la necesidad del negocio pasando de 3 a 8 sucursales activas en el último año.",
          ]}
        />

      </main>
    </section>
  );
}
