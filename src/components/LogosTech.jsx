import ReactLogo from "../components/ReactLogo";
import NodeLogo from "../components/NodeLogo";
import FirestoreLogo from "../components/FirestoreLogo";
import TailwindLogo from "../components/TailwindLogo";
import ChromeLogo from "../components/ChromeLogo";
import VercelLogo from "../components/VercelLogo";
import JavascriptLogo from "../components/JavascriptLogo";
import LangchainLogo from "../components/LangchainLogo";

const logosTech = {
  react: <ReactLogo />,
  node: <NodeLogo />,
  tailwind: <TailwindLogo />,
  firestore: <FirestoreLogo />,
  chrome: <ChromeLogo />,
  javascript: <JavascriptLogo />,
  vercel: <VercelLogo />,
  langchain: <LangchainLogo />,
};

// eslint-disable-next-line react/prop-types
function LogosTech({ logo }) {
  return <>{logosTech[logo]}</>;
}

export default LogosTech;
