import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import img_profile from "../assets/img_mariano_profile.png";

function Message({ index, message = "Random message", author }) {
  console.log(message);

  const className = {
    bot: "self-end flex-row-reverse bg-[#122327]",
    user: "self-start bg-[#24424a]",
  };

  return (
    <div
      key={index}
      className={twMerge(
        "rounded-md  text-white px-4 py-2 w-fit flex items-center gap-2",
        className[author]
      )}
    >
      <div className="rounded-full p-[2px] min-w-10 min-h-10 max-w-10 max-h-10  grid place-content-center   bg-white/70 self-start  ">
        {author === "bot" ? (
          <img
            className="max-w-10 object-cover rounded-full "
            src={img_profile}
            alt=""
          />
        ) : (
          <span className="text-text_gray">Tú</span>
        )}
      </div>
      <span className="text-sm">{message}</span>
    </div>
  );
}

Message.propTypes = {
  index: PropTypes.number,
  message: PropTypes.string,
  className: PropTypes.string,
  author: PropTypes.string,
};

export default Message;
