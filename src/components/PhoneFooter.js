import React, { useState } from "react";

const PhoneFooter = () => {
  const Menus = [
    { name: "Home", icon: "home-outline" },
    { name: "Trip", icon: "flag-outline" },
    { name: "Photos", icon: "camera-outline" },
    { name: "Contact", icon: "call-outline" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#000000e9] h-[4.8rem] px-6 rounded-t-xl fixed bottom-0 right-0 left-0 z-[9999] flex justify-center items-center">
      <ul className="flex justify-between w-full max-w-md relative">
        {active === 0 && (
          <span
            className={`bg-[#d3d332] duration-500 translate-x-0 border-4 border-gray-900 h-16 w-16 absolute top-[-1.5rem] rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
        )}
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-white text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active ? "-mt-6 text-white" : "text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={`${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneFooter;
