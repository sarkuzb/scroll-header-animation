import { useState, useEffect } from "react";

function App() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 65) {
          setHeader(true);
        } else {
          setHeader(false);
        }
      },
      []
    );
  });

  window.addEventListener("scroll", setHeader);
  return (
    <>
      <div className="Body bg-sky-100 w-[1000px] m-auto ">
        <div
          className={`flex items-center h-16 w-[1000px] left-1/2 transform -translate-x-1/2 fixed transition-all duration-300 ease-out ${
            header
              ? "bg-gray-900 shadow-lg rounded-lg mt-2 scale-100 w-[980px]"
              : "bg-gray-900"
          }`}
        >
          <p className="text-white pl-10 text-xl uppercase font-semibold">
            Header
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
