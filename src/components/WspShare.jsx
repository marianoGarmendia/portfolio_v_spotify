import { WhatsappShareButton } from "react-share";

// eslint-disable-next-line react/prop-types
function WspShare({ children }) {
  return (
    <WhatsappShareButton url="https://wa.me/2214371684">
      {children}
    </WhatsappShareButton>
  );
}

export default WspShare;
