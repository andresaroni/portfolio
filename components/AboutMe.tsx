export default function AboutMe() {
  return (
    <section className="grid md:flex gap-10 md:gap-20 pt-15 px-4 md:px-2">
      <div className="flex-1 grid gap-5">
        <h3 className="text-[black] text-3xl font-bold">Sobre Mi</h3>
        <p className="text-md font-medium tracking-wider">
          Soy un diseñador y desarrollador con +2 años de experiencia creando
          sistemas escalables y páginas web adaptables a una necesidad en
          específica. Mi trabajo es construir su sitio web o aplicación para que
          sea funcional y fácil de usar pero al mismo tiempo atractivo.
        </p>
        <p className="text-md font-medium tracking-wider">
          Además, agrego un toque personal a su producto y me aseguro de que sea
          llamativo y fácil de usar. Mi objetivo es transmitir su mensaje e
          identidad de la manera más creativa.
        </p>
      </div>
      <div className="flex-1 grid gap-5">
        <h3 className="text-[black] text-3xl font-bold">Habilidades y Servicios</h3>
        <ul className="grid justify-start items-start font-medium">
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>UI/UX Design</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>Creación de prototipos</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>Diseño & Desarrollo Web</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>Figma</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>TailwindCSS</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>TypeScript</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>React & Next.js</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>Angular</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>Laravel 12</li>
          <li className="flex items-center gap-2"><span className="inline-block rounded-full h-2 w-2 bg-[black]"></span>MySQL</li>
        </ul>
      </div>
    </section>
  );
}
