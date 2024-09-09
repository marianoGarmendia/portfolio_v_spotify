import FirestoreLogo from "../components/FirestoreLogo";
import node_3d_logo from "../image_tech/node-3d.png";
import react_webp from "../image_tech/react-3d.webp";
import tailwind_3d from "../image_tech/tailwind-3d.webp";
import javascript_3d from "../image_tech/javascript-3d.webp";
import python_3d from "../image_tech/python_3d.webp";
import git_3d from "../image_tech/git-3d.png";
import github_3d from "../image_tech/github-3d.png";
import vscode_3d from "../image_tech/vscode-3d.png";
import langchain_logo from "../image_tech/langchain-logo.png";
import express_logo from "../image_tech/express-logo.png";

export const logos_habilities = {
  node: (
    <div className="relative ">
      <img className="p-4" src={node_3d_logo} />
      <img
        className="w-1/2  absolute p-4 bottom-3 -right-0 "
        src={express_logo}
        alt=""
      />
    </div>
  ),
  react: <img className="p-4" src={react_webp} alt="" />,
  tailwind: <img className="p-4" src={tailwind_3d} alt="" />,
  firestore: <FirestoreLogo size={"lg"} />,
  javascript: <img className="p-4" src={javascript_3d} />,
  vscode: <img className="p-4" src={vscode_3d}></img>,
  langchain: <img className="p-4" src={langchain_logo}></img>,
  git: (
    <div className="relative ">
      <img className="p-4  " src={git_3d}></img>
      <img
        className="w-2/3  absolute p-4 -bottom-3 -right-0 "
        src={github_3d}
        alt=""
      />
    </div>
  ),
  python: <img className="p-4 img_3d z-20" src={python_3d}></img>,
};
