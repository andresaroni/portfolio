export default function Resume() {
  return (
    <section className="grid gap-10 pt-20 px-2">
      <div className="grid gap-4">
        <h2 className="text-3xl font-bold">Estudios</h2>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="inline-block rounded-full h-3 w-3 bg-[black]"></span>
            <span className="inline-block h-full w-0.75 bg-[black]"></span>
          </div>
          <div className="w-full flex-col">
            <div className="flex justify-between">
              <h2 className="font-bold text-lg">
                Universidad De Guayaquil, Ecuador
              </h2>
              <p className="font-bold text-sm">2021 - Presente</p>
            </div>
            <p className="max-w-200 font-medium text-sm">
              Estoy cursando la carrera de Ingeniería en Software
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-5 pt-5">
        <h2 className="text-3xl font-bold">Experiencia</h2>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="inline-block rounded-full h-3 w-3 bg-[black]"></span>
            <span className="inline-block h-full w-0.75 bg-[black]"></span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="font-bold">
              <div className="flex justify-between">
                <h2 className="text-lg">Desarrollador Web Full Stack</h2>
                <p className="text-sm">2026</p>
              </div>
              <h3 className="font-medium text-[#6d6d6d]">Jeda247, Quito, EC</h3>
            </div>
            <p className="max-w-200 font-medium text-sm">
              Diseñe y desarrolle un sistema de inventario a la medida para un
              cliente que gestiona toda su información sobre las ventas de
              cuentas de streaming y consulta de códigos de una base de datos en
              un vps administrado por mi, para que sus clientes puedan consultar
              los códigos de inicio de sesión mediante la página sin tener que
              contactarlo a él directamente, usando Laravel 12 con plantillas
              blade, TailWindCSS, livewire y MySQL.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="inline-block rounded-full h-3 w-3 bg-[black]"></span>
            <span className="inline-block h-full w-0.75 bg-[black]"></span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="font-bold">
              <div className="flex justify-between">
                <h2 className="text-lg">Desarrollador Web Frontend</h2>
                <p className="text-sm">2025</p>
              </div>
              <h3 className="font-medium text-[#6d6d6d]">
                Bingo Online, Babahoyo, EC
              </h3>
            </div>
            <p className="max-w-200 font-medium text-sm">
              Rehice todo el diseño de la página web para que se vea más moderna
              y agradable para el usuario (jugador) usando las tecnologías
              nativas del proyecto, Blade y TailwindCSS.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="inline-block rounded-full h-3 w-3 bg-[black]"></span>
            <span className="inline-block h-full w-0.75 bg-[black]"></span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="font-bold">
              <div className="flex justify-between">
                <h2 className="text-lg">Desarrollador Web Full Stack</h2>
                <p className="text-sm">2024 - Presente</p>
              </div>
              <h3 className="font-medium text-[#6d6d6d]">
                Franko+Plus, Babahoyo, EC
              </h3>
            </div>
            <p className="max-w-200 font-medium text-sm">
              Diseñé y desarrollé un sistema web de inventario y gestión de
              personal multi-sucursal, con funcionalidades avanzadas de reportes
              filtrados, gráficos dinámicos y control de ventas. Implementé un
              sistema de roles (vendedor, administrador y supervendedor), donde
              el supervendedor puede operar desde cualquier sucursal con acceso
              total a los inventarios, utilizando PHP puro (sin frameworks) y
              MySQL.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="inline-block rounded-full h-3 w-3 bg-[black]"></span>
            <span className="inline-block h-full w-0.75 bg-[black]"></span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="font-bold">
              <div className="flex justify-between">
                <h2 className="text-lg">Desarrollador Web Frontend</h2>
                <p className="text-sm">2024 - 2025</p>
              </div>
              <h3 className="font-medium text-[#6d6d6d]">
                El Rincón Peruano, Plainfield, NJ
              </h3>
            </div>
            <p className="max-w-200 font-medium text-sm">
              Diseñé y desarrollé una landing page destacando los platos más
              emblemáticos de Perú para un restaurante de comida peruana
              tradicional. Implementé una estructura dinámica para la carga del
              DOM.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
