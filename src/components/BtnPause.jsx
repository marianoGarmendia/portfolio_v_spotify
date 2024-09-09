function BtnPause() {
  return (
    <div className="bg-[#34cc69] p-4 rounded-full hover:scale-105 transition-all ease-in-out duration-100 hover:bg-[#3BE276] hover:cursor-pointer ">
      <svg className="text-black h-6 w-6" version="1.1" viewBox="0 0 36 36">
        <use className="ytp-svg-shadow" xlinkHref="#ytp-id-1075"></use>
        <path
          className="ytp-svg-fill"
          d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
          id="ytp-id-1075"
        ></path>
      </svg>
    </div>
  );
}

export default BtnPause;
