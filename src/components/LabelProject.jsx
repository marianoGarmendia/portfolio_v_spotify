import PropTypes from "prop-types";
import CodeLink from "./CodeLink";
import BtnEnlace from "./BtnEnlace";
import LogosTech from "../Projects/LogosTech";

LabelProject.propTypes = {
  img_mini: PropTypes.string,
  handleChange: PropTypes.func,
  component: PropTypes.string,
  children: PropTypes.node,
  logos_tech: PropTypes.array,
  github_link: PropTypes.string,
  url_deploy: PropTypes.string,
};

function LabelProject({
  img_mini,
  handleChange,
  component,
  children,
  logos_tech,
  github_link,
  url_deploy = "#",
}) {
  return (
    <div
      className="grid_projects text-[#9CA4A6] text-sm border-[#9CA4A6]/10 mx-4 my-4 px-8 items-center hover:bg-[#282C2D] p-2 hover:cursor-pointer rounded-md font-rubik"
      onClick={() => handleChange(component)}
    >
      <div>1</div>
      <div className="flex gap-4 items-center text-md">
        <img className="h-14 w-14" src={img_mini} alt="img_project_component" />
        {children}
      </div>
      <div>
        <CodeLink link={github_link} />
      </div>
      <div className="flex gap-2 flex-wrap">
        {logos_tech.length > 0 &&
          logos_tech.map((logo, index) => {
            return <LogosTech logo={logo} key={index} />;
          })}
      </div>
      <div>
        <BtnEnlace url_deploy={url_deploy} />
      </div>
    </div>
  );
}

export default LabelProject;
