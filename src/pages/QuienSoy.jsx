import Header from "../components/Header";

function QuienSoy() {
  return (
    <section className="bg-[#121212] flex flex-col h-full items-center justify-end   rounded-md overflow-y-scroll relative">
      <Header />
      <div className="h-[80%]  p-6 w-full flex flex-col gap-4 text-sm project-card">
        <h3 className="text-lg bg-[#1f1f1f] rounded-md w-fit px-4 py-2 font-semibold">
          Hola! Te cuento un poco quien soy...
        </h3>
        <p className="mt-10">
          Durante años trabajé en equipos, desempeñando tareas como coordinador
          de actividades, selección de personal y muchas desafíos más
          relacionados con llevar adelante un proyecto en el mundo fitness.
        </p>
        <p>
          Hace 4 años logré conformar mi propio emprendimiento con mas de 10
          personas a cargo. Aprendí a gestionar, delegar, cumplir objetivos y
          tener reuniones importantes dentro del equipo.
        </p>
        <p>
          Paralelamente a mi trabajo estudié programación y hace al menos 2 años
          que mi foco está 100% puesto en mi carrera como desarrollador.
        </p>
        <p>
          Con varios cursos realizados y distintos proyectos, pude establecer
          unas bases de conocimiento que hoy me dan las herramientas para crear
          experiencias innovadoras en el desarrollo web, en conjunto con nuevas
          tecnologías relacionadas a la Inteligencia Artificial lo cual es algo
          que veo inspirador.
        </p>
        <p>
          Estoy con muchas ganas de formar parte de un equipo donde explotar mi
          potencial y aportar mi experiencia.
        </p>
      </div>
    </section>
  );
}

export default QuienSoy;
