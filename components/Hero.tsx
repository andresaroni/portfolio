"use client";
import Link from "next/link";

export default function Hero() {
  const forzarScroll = (e:any) => {
    // 1. Evitamos que Next.js/el navegador ignore el click si la URL ya es #Jobs
    e.preventDefault();

    // 2. Buscamos la sección manualmente
    const seccion = document.getElementById("Jobs");

    if (seccion) {
      // 3. Forzamos el scroll suave
      seccion.scrollIntoView({ behavior: "smooth" });

      // 4. (Opcional) Actualizamos la URL en el navegador para que aparezca el #Jobs
      // sin causar saltos raros ni recargar la página.
      // window.history.pushState(null, "", "#Jobs");
    }
  };

  return (
    <section className="pt-6">
      <h2 className="text-center text-4xl font-bold">Marco Andrés Aroni</h2>

      <div className="pt-5">
        <div className="flex justify-center items-center gap-4 text-[#727272] text-sm font-medium">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin-icon lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <p>Guayaquil, Ecuador</p>
          </div>
          {/* <div className="flex justify-center items-center gap-1">
            <span className="inline-block rounded-full h-2 w-2 bg-[#0be064]"></span>
            <p>Disponible para colaborar</p>
          </div> */}
        </div>
      </div>

      <div className="pt-10 text-center">
        <Link
          href="#Jobs"
          onClick={forzarScroll}
          className="inline-block bg-[black] text-[white] py-2 px-4 text-md rounded-lg font-medium cursor-pointer hover:scale-115 hover:font-semibold transition-transform duration-300"
        >
          Ver Mis Trabajos →
        </Link>
      </div>
    </section>
  );
}
