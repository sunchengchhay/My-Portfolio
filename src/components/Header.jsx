import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <>
      <nav className="hidden lg:flex justify-around items-center h-[17vh] poppins-regular">
        <div className="text-3xl cursor-default">Sun Chengchhay</div>
        <div className="text-xl">
          <ul className="flex space-x-10 ">
            <li>
              <a href="#about" onClick={() => smoothScrollTo("about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => smoothScrollTo("experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => smoothScrollTo("project")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => smoothScrollTo("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="lg:hidden h-[17vh] poppins-regular flex px-10 justify-between items-center">
        <div className="text-lg md:text-2xl">Sun Chengchhay</div>
        <div className="cursor-pointer" onClick={handleToggle}>
          {isOpen ? (
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          )}
        </div>
        <div
          className={`absolute left-10 top-28 w-[80%] sm:w-[90%] bg-gray-50 overflow-hidden max-h-0 transition-all ease-in duration-100 ${
            isOpen ? "max-h-[100vh]" : "max-h-0"
          }`}
        >
          <ul className="space-y-4 p-4">
            <li>
              <a href="#about" onClick={handleToggle}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={handleToggle}>
                Experience
              </a>
            </li>
            <li>
              <a href="#project" onClick={handleToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleToggle}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
