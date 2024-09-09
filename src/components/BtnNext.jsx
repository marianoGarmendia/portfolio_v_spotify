function BtnNext() {
  return (
    <button className="bg-[#090909] w-4 h-4 p-4 rounded-full grid place-content-center ">
      <svg
        className="w-4  rounded-full h-4 grid place-content-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
          fill="#fff"
        ></path>
      </svg>
    </button>
  );
}

export default BtnNext;