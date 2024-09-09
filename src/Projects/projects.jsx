import ProjectCard from "../components/ProjectCard";
import trainingFyAudio from "../Music/trainingfy.wav";
import componentAudio from "../Music/components.wav";
import oneclickAudio from "../Music/oneclick.wav";
import memoryAudio from "../Music/memory_poke_audio.wav";
import img_trainingfy from "../image_project/mk_project_1.png";
import img_component from "../image_project/card-component-css.png";
import img_oneclick from "../image_project/mk_oneclick.png";
import img_memorypoke from "../image_project/mk_memorypoke.png";
// import logo_trainingfy from "../assets/entrenador.png";

import src_logo_trainingfy from "../assets/entrenador.png";
import src_logo_oneclick from "../assets/img_oneclick_logo.png";
import src_logo_component from "../assets/img_component_logo.png";
import src_logo_memorypoke from "../assets/img_memorypoke_logo.png";

export const allProjects = [
  {
    component: (
      <ProjectCard
        text="TrainingFy - Generador de entrenamientos"
        audio={trainingFyAudio}
        img_project={img_trainingfy}
        src_logo={src_logo_trainingfy}
        logos_tech={["react", "tailwind", "node", "firestore"]}
      >
        <div className="flex gap-2">
          <span className="text-sm font-semibold">
            Armá tus rutinas con IA,
          </span>
          <span className="text-sm opacity-50">
            Seleccioná los ejercicios, tiempo, modalidad y objetivos
          </span>
        </div>
      </ProjectCard>
    ),
    label: "trainingfy",
  },
  {
    component: (
      <ProjectCard
        audio={componentAudio}
        text="Components UI"
        img_project={img_component}
        src_logo={src_logo_component}
        logos_tech={["react", "tailwind"]}
      >
        <div className="flex gap-2">
          <span className="text-sm font-semibold">Reutilizá código</span>
          <span className="text-sm opacity-50">
            Elegí entre cards, botones, loaders y más
          </span>
        </div>
      </ProjectCard>
    ),
    label: "component",
  },
  {
    component: (
      <ProjectCard
        text="OneClick - Asistente de IA para sitios web"
        audio={oneclickAudio}
        img_project={img_oneclick}
        src_logo={src_logo_oneclick}
        logos_tech={["javascript", "node", "chrome", "vercel"]}
      >
        <div className="flex gap-2">
          <span className="text-sm font-semibold">Asistente de IA</span>
          <span className="text-sm opacity-50">
            Hacé click en cualquier texto y obtené información
          </span>
        </div>
      </ProjectCard>
    ),
    label: "oneclick",
  },
  {
    component: (
      <ProjectCard
        text="MemoryPoke - Juego de memoria"
        audio={memoryAudio}
        img_project={img_memorypoke}
        src_logo={src_logo_memorypoke}
        logos_tech={["javascript"]}
      >
        <div className="flex gap-2">
          <span className="text-sm font-semibold">Estimulá tu memoria</span>
          <span className="text-sm opacity-50">
            Jugá con tus pokemones favoritos
          </span>
        </div>
      </ProjectCard>
    ),
    label: "memorypoke",
  },
];
