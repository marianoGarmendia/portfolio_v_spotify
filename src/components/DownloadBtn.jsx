import Cv_file from "../assets/Mariano_G_CV_Nov_24.pdf";

const DownloadButton = () => {
  return (
    <a
      href={Cv_file}
      download="Mariano_G_CV_Nov_24_.pdf"
      className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1f1f1f] w-fit hover:scale-105 transition-all duration-200 ease-in-out "
    >
      Descargar CV
    </a>
  );
};

export default DownloadButton;
