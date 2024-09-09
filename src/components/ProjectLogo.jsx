// eslint-disable-next-line react/prop-types
function ProjectLogo({ src_logo }) {
  return (
    <div className="h-6 w-6">
      <img className="w-full" src={src_logo} alt="img_logo" />
    </div>
  );
}

export default ProjectLogo;
