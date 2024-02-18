import { useState } from "react";

const LoginBTNS = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    return setState(!state);
  };

  const getElements = () => {
    // Logged
    if (state == true) {
      return (
        <div className="inline-flex space-x-3 animate-transBottom">
          <button className="text-[#2e2e2e] bg-white px-6 py-1 rounded-full font-bold text-sm poppins clickable hover:scale-105">
            about Premium
          </button>
          <div className="space-x-5 inline-flex">
            {/*Bell Icon */}
            <button>
              <img
                src="/icons/bell.svg"
                className="w-[30px] h-[30px] p-0.5 clickable opacity-80 hover:scale-125"
              />
            </button>

            {/*User Icon */}
            <button>
              <img
                src="/icons/user.svg"
                className="w-[30px] h-[30px] p-0.5 clickable opacity-80 hover:scale-125"
              />
            </button>
          </div>
        </div>
      );
    }

    // Unlogged
    else {
      return (
        <div className="text-[#2e2e2e]">
          <button
            className="text-white rounded-full py-2 px-10 font-semibold text-sm leading-5 tracking-wider uppercase hover:scale-105 hover:underline"
            onClick={handleClick}
          >
            Sign up
          </button>
          <button
            className="bg-white rounded-full py-2 px-10 font-semibold text-sm leading-5 tracking-wider uppercase hover:scale-105"
            onClick={handleClick}
          >
            Log in
          </button>
        </div>
      );
    }
  };

  return <>{getElements()}</>;
};

export default LoginBTNS;
