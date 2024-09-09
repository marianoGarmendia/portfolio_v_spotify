import { logos_habilities } from "../utils/logos_habilities";
import { twMerge } from "tailwind-merge";

import PropTypes from "prop-types";

function RoundedHability({ logo, bg, text }) {
  const { language, extra } = text;

  const bgColor = {
    react: "bg-[#3998B6]",
    light: "bg-[#c7c0c0]",
    tailwind: "bg-[#101726]",
    firestore: "bg-[#D62B00]",
  };
  return (
    <article className="flex flex-col p-4 hover:bg-[#1F1F1F]  & cursor-pointer rounded-md">
      <div
        className={twMerge(
          "rounded-full grid place-content-center mb-4 w-[140px] h-[140px] shadow-lg shadow-black/60",
          bgColor[bg]
        )}
      >
        {logo && logos_habilities[logo]}
      </div>
      <span className="font-normal text-white ">{language}</span>
      <span className="text-text_opacity text-sm ">{extra}</span>
    </article>
  );
}

RoundedHability.propTypes = {
  text: PropTypes.object,
  logo: PropTypes.string,
  bg: PropTypes.string,
};

export default RoundedHability;
