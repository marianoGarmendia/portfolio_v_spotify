import BtnNext from "./BtnNext";
import BtnPrevious from "./BtnPrevious";
import LinkHeader from "./LinkHeader";

function Header() {
  return (
    <header className="rounded-md absolute top-0 h-[64px] bg-[#000000]/50 w-[stretch] flex justify-between items-center z-10  px-4">
      <div className="flex gap-2 items-center rounded-md">
        <div>
          <BtnPrevious />
        </div>
        <div>
          <BtnNext />
        </div>
      </div>
      <div className="text-text_opacity flex gap-4 px-4 text-sm">
        <LinkHeader path="/proyectos">Proyectos</LinkHeader>
        <LinkHeader path="/conocimientos">Conocimientos</LinkHeader>
        <LinkHeader path="/chat-cv">Chat CV</LinkHeader>
        <LinkHeader path="/quien-soy">Quien soy</LinkHeader>
      </div>
    </header>
  );
}

export default Header;
