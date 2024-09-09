import Header from "../components/Header";
import RoundedHability from "../components/RoundedHability";

function Conocimientos() {
  return (
    <section className="overflow-y-scroll rounded-md bg-[#121212] relative">
      <Header />
      <div className="w-full h-full px-2 ">
        <div className=" h-[100%] flex flex-col justify-end gap-4 px-4   ">
          <h2 className="text-xl font-semibold tracking-wide">
            Tecnologías que utilizo
          </h2>
          <div className="flex items-center gap-4 w-full flex-wrap">
            <RoundedHability
              logo="react"
              bg="react"
              text={{ language: "React js", extra: "Context - Router y más" }}
            />
            <RoundedHability
              logo="tailwind"
              bg="tailwind"
              text={{ language: "Tailwind", extra: "css" }}
            />
            <RoundedHability
              logo="node"
              bg="light"
              text={{ language: "Node js", extra: "Express" }}
            />
            <RoundedHability
              logo="firestore"
              bg="firestore"
              text={{ language: "Firestore", extra: "Firebase" }}
            />
            <RoundedHability
              logo="javascript"
              bg="javascript"
              text={{ language: "Javascript", extra: "Vanilla" }}
            />
            <RoundedHability
              logo="git"
              bg="light"
              text={{ language: "Git", extra: "github" }}
            />
            <RoundedHability
              logo="vscode"
              bg="tailwind"
              text={{ language: "VScode", extra: "ide" }}
            />
            <RoundedHability
              logo="langchain"
              bg="light"
              text={{ language: "Langchain", extra: "LLM" }}
            />
            <RoundedHability
              logo="python"
              bg="light"
              text={{ language: "Python", extra: "Básico" }}
            />
          </div>
        </div>
        <div className="text_about_me flex flex-col gap-4 px-6">
          <h2 className="text-xl font-bold tracking-wide"></h2>
          {/* <h3 className="font-bold">¿Quien soy?</h3>
          <p>
            Podria destacar 
          </p>
          <p>
            Con gran voluntad para llevar adelante trabajos bajo presión,
            acostumbrado a formar equipos y conducir tareas en el mundo laboral
            real
          </p>
          <p>
            Por algunos años me he dedicado al rubro del fitness logrando
            coordinar equipos de mas de 10 personas, lo cual me llevo al
            siguiente paso que fue emprender en mi propio gimnasio que hoy tiene
            mas de 17 empleados y 250 socios que entrenan todos los dias
          </p>
          <p>
            Gracias al haber podido delegar mis tareas en mi emprendimiento es
            que puedo dedicarme 100% a evolucionar en el campo del desarrollo de
            software lo cual resultó ser mi pasión más grande
          </p>
          <span>
            Descubrí un mundo donde no hay limites creativos y el potencial es
            infinito
          </span> */}
        </div>
      </div>
    </section>
  );
}

export default Conocimientos;
