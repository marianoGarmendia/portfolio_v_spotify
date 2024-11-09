import { AnimatePresence, motion } from "framer-motion";
import { allProjects } from "../Projects/projects";
import { useState } from "react";
import Header from "../components/Header";
import GithubLogo from "../components/GithubLogo";
import LabelProject from "../components/LabelProject";
import img_mini_component from "../image_project/mini_component.png";
import img_mini_trainingfy from "../image_project/mini_trainingfy.png";
import img_mini_oneclick from "../image_project/mini-oneclick.png";
import img_mini_memory from "../image_project/mini_memorypoke.png";
import img_mini_agent from "../image_project/mini_agent.png";

function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState(allProjects[0]);

  const handleChange = (target) => {
    setSelectedTab(allProjects.find((tab) => tab.label === target));
  };

  return (
    <section className="rounded-md section_gradient_base overflow-y-scroll relative">
      <Header />
      <div className=" h-[396px]  ">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.component : "Ups! No projects here"}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid_projects border-b-[0.1px] text-[#9CA4A6] text-sm border-[#9CA4A6]/10 mx-4 my-4 px-8  ">
        <div className="pb-[5px]">#</div>
        <div>Title Project</div>
        <div>
          <GithubLogo />
        </div>
        <div>Tecnologies</div>
        <div>Deploy</div>
      </div>
      <LabelProject
        img_mini={img_mini_agent}
        component="Agente"
        handleChange={handleChange}
        logos_tech={["react", "tailwind", "firestore", "langchain"]}
        github_link={"https://github.com/marianoGarmendia/Client_Agent_reserve"}
        url_deploy={"https://client-agent-reserve.onrender.com/#/"}
      >
        <div>
          <p className="text-lg text-[#eee]">Agente de IA</p>
          <p>
            LLM app de reserva de turnos conversacional - Guarda en base de
            datos
          </p>
        </div>
      </LabelProject>

      <LabelProject
        img_mini={img_mini_component}
        component="component"
        handleChange={handleChange}
        logos_tech={["react", "tailwind"]}
        github_link={"https://github.com/marianoGarmendia/components-css"}
        url_deploy={"https://marianogarmendia.github.io/components-css/"}
      >
        <div>
          <p className="text-lg text-[#eee]">Components UI</p>
          <p>Galeria de componentes</p>
        </div>
      </LabelProject>
      <LabelProject
        img_mini={img_mini_trainingfy}
        component="trainingfy"
        handleChange={handleChange}
        logos_tech={["react", "node", "firestore", "tailwind"]}
        github_link={"https://github.com/marianoGarmendia/trainingfy-react-app"}
        url_deploy={"https://trainingfy-react-app.onrender.com/#/"}
      >
        <div>
          <p className="text-lg text-[#eee]">TrainingFy</p>
          <p>Entrenamientos con IA</p>
        </div>
      </LabelProject>

      <LabelProject
        img_mini={img_mini_oneclick}
        component="oneclick"
        handleChange={handleChange}
        logos_tech={["javascript", "node", "chrome"]}
        github_link={
          "https://github.com/marianoGarmendia/one-click-assistant-frontend"
        }
      >
        <div>
          <p className="text-lg text-[#eee]">OneClick</p>
          <p>Extensión de Chrome - Asistente de IA</p>
        </div>
      </LabelProject>
      <LabelProject
        img_mini={img_mini_memory}
        component="memorypoke"
        handleChange={handleChange}
        logos_tech={["javascript"]}
        github_link={"https://github.com/marianoGarmendia/memory-poke"}
        url_deploy={"https://marianogarmendia.github.io/memory-poke/"}
      >
        <div>
          <p className="text-lg text-[#eee]">Memory Poke</p>
          <p>Juego de memoria - API rest - Fetch</p>
        </div>
      </LabelProject>
    </section>
  );
}

export default ProjectsPage;
