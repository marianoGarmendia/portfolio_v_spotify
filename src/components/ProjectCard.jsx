import PropTypes from "prop-types";
import LogosTech from "../Projects/LogosTech";
import ProjectLogo from "./ProjectLogo";

import Corazon from "./Corazon";
import Points from "./Points";
// import { useInView, motion } from "framer-motion";

import MusicPlayer from "./MusicPlayer";

ProjectCard.propTypes = {
  logos_tech: PropTypes.array,
  src_logo: PropTypes.string,
  audio: PropTypes.string,
  img_project: PropTypes.string,
  text: PropTypes.string,
};

function ProjectCard({
  text,
  img_project,
  audio,
  src_logo,
  logos_tech,
  // eslint-disable-next-line react/prop-types
  children,
}) {
  return (
    <div className="container-project-card font-rubik">
      <div className="project-card h-[300px] flex  items-end rounded-md">
        <div className="h-[80%] ">
          <img
            src={img_project}
            alt="img-project"
            className="object-cover min-h-[240px] min-w-[242px] w-full h-full"
          />
        </div>
        <div className="w-full h-[230px] tracking-wide font-nunito opacity-95 flex flex-col justify-end pb-8 gap-2 ">
          <div className="flex gap-2 text-sm font-semibold items-center">
            <span>Project</span>
            <ProjectLogo key={src_logo} src_logo={src_logo} />
          </div>
          <h2 className="font-bold text-3xl tracking-tight">{text}</h2>
          {children}
          <div className="flex text-sm items-end gap-4">
            <div className="flex gap-2 items-end">
              {logos_tech.length > 0 &&
                logos_tech.map((logo, index) => (
                  <LogosTech logo={logo} key={index} />
                ))}
              {/* <span className="mx-4 hover:cursor-pointer">Ver más...</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-24 items-center gap-6   px-8">
        <MusicPlayer sound={audio} />
        <Corazon />
        <Points />
      </div>
    </div>
  );
}

export default ProjectCard;
