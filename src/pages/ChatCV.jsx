import { useState, useRef, useEffect } from "react";
import Message from "../components/Message";
import Header from "../components/Header";
import img_profile from "../assets/img_mariano_profile.png";
import { twMerge } from "tailwind-merge";

function ChatCV() {
  const [messages, setMessages] = useState([
    {
      author: "bot",
      content:
        "Hola! Soy Mariano, en realidad soy su CV virtual 😉. ¿En qué puedo ayudarte?",
    },
  ]);
  const [isWriting, setIsWriting] = useState("invisible");
  const [inputValue, setInputValue] = useState("");
  //   const [messagesBot, setMessagesBot] = useState([]);

  const msgRef = useRef(null);
  const chatContainer = useRef(null);

  const addMessages = (e) => {
    e.preventDefault();
    const newMessageAdded = inputValue;
    msgRef.current = newMessageAdded;
    const newMessage = {
      author: "user",
      content: newMessageAdded,
    };
    if (newMessageAdded === "") return;

    setMessages([...messages, newMessage]);
    // e.target["message_field"].value = "";
    setIsWriting("visible");
    setInputValue("");
  };

  useEffect(() => {
    scrollToBottom();

    if (messages.length === 0) return;

    if (messages[messages.length - 1].author === "user") {
      const fetchConversation = async () => {
        const response = await fetch(
          "https://portfolio-backend-chat.onrender.com/chatbot",
          {
            headers: {
              contentType: "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              pregunta: messages[messages.length - 1].content,
            }),
          }
        );

        if (response.status === 200) {
          const responseChatBot = await response.json();

          const newMessageBot = {
            author: "bot",
            content: responseChatBot[0],
          };

          setMessages([...messages, newMessageBot]);
          setIsWriting("invisible");
        }
      };
      fetchConversation();
    }
  }, [messages]);

  // Selecciona el contenedor del chat

  // Función para desplazar el contenedor al último mensaje
  function scrollToBottom() {
    chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
  }

  // Llama a la función cuando sea necesario (por ejemplo, cuando se agreguen nuevos mensajes)

  const handleQuestion = (e) => {
    if (e.target.tagName === "BUTTON") {
      const question = e.target.textContent;
      setInputValue(question);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="bg-[#121212] flex flex-col h-full items-center justify-end   rounded-md overflow-y-scroll relative">
      <Header />

      <div className="md:flex-row flex flex-col items-end justify-around gap-2  w-full  p-4  ">
        <div className="md:w-1/3 w-full flex-row justify-around md:items-start px-2 py-4 flex md:flex-col h-fit self-start md:justify-start bg-[#1f1f1f] rounded-md gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Chatea con mi CV</h1>
            <p className="text-sm">Podés hacer preguntas como:</p>
          </div>
          <div className="flex flex-col gap-2" onClick={handleQuestion}>
            <button className="rounded-md text-sm bg-[#121212] border-[1px] border-[#eee]/25 px-2 py-4 ">
              Hola Mariano!, ¿Cuales son tus habilidades?
            </button>
            <button className="rounded-md text-sm bg-[#121212] border-[1px] border-[#eee]/25 px-2 py-4 ">
              ¿Qué proyectos has realizado?
            </button>
            <button className="rounded-md text-sm bg-[#121212] border-[1px] border-[#eee]/25 px-2 py-4 ">
              ¿Tenés experiencia en trabajo en equipo?
            </button>
          </div>
          <div>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1f1f1f] w-fit hover:scale-105 transition-all duration-200 ease-in-out">
              Descargar CV
            </button>
          </div>
        </div>
        <form
          className="chat_cv_form flex flex-col max-h-full border rounded-md  border-border_gray border-opacity-55 w-full  "
          onSubmit={addMessages}
        >
          <div className="py-2 rounded-tr-md rounded-tl-md px-4 text-sm flex gap-2 items-center text-[#121415] bg-[#c7c0c0]">
            <img
              className="max-w-10 object-cover rounded-full  bg-[#777272]"
              src={img_profile}
              alt=""
            />
            <div className="flex flex-col rounded-tr-md rounded-tl-md ">
              <span className="font-semibold">CV Mariano Garmendia</span>
              <span className={twMerge("text-text_gray", isWriting)}>
                Escribiendo...
              </span>
            </div>
          </div>
          <div
            ref={chatContainer}
            className="messages_container flex flex-col gap-2  flex-1 min-h-[410px] max-h-[410px] border rounded-sm  border-border_gray border-opacity-55 p-4 backdrop-blur-[2px]   bg-gray_dark bg-opacity-75 text-white  w-full overflow-scroll"
          >
            {messages.length > 0 &&
              messages.map((message, index) => {
                return (
                  <Message
                    key={index}
                    index={index}
                    author={message.author}
                    message={message.content}
                  />
                );
              })}
          </div>
          <div className="flex items-center gap-2 p-2 backdrop-blur-[2px] border-t-[1px] border-border_gray  border-opacity-55   bg-gray_dark bg-opacity-75">
            <input
              type="text"
              className="flex-1 h-full rounded-sm text-black p-2 text-sm"
              name="message_field"
              autoComplete="off"
              onChange={handleChange}
              value={inputValue}
            />
            <button className="w-fit p-2  text-[#eee] project-card text-center rounded-sm">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ChatCV;
