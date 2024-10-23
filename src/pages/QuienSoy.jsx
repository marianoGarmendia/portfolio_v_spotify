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
          Soy Desarrollador Fullstack con mayor orientación hacia el frontend.
          Busco construir experiencias digitales innovadoras utilizando React JS
          , Node js, Tailwind, con conocimientos en Firestore como servicio de
          base de datos y Python la cual últimamente complemento incorporando IA
          a través de librerías como Langchain y langgraph que permite la
          creación de agentes IA con un profundo control pudiendo orquestar
          desde el servidor un flujo de trabajo y herramientas
        </p>
        <p>
          Todos mis proyectos tiene una base sólida en fundamentos, teniendo en
          cuenta la escalabilidad, las buenas practicas como comentar mi código,
          tipar los datos, validar, manejar errores desde el back y el front
          para mantener la experiencia de usuario lo mas limpia posible.
        </p>
        <p>
          Memantengo activo e interesado por la capacitacion constante, leer
          documentacion, código de proyectos open source, clonar repositorios de
          trabajos bien realizados y estudiar su estructura, son practicas que
          utilizo para fortalecer mis habilidades.
        </p>
        <p>
          Creo mucho en el trabajo en equipo y el compromiso, tengo mucho
          experiencia en ello, lo cual me llevo a construir hoy en dia un
          emprendimiento persona con un equipo de mas de 10 personas
        </p>
      </div>
    </section>
  );
}

export default QuienSoy;
