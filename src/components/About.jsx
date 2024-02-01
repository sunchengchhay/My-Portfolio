import AboutProfile from "../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="poppins-regular pt-10 min-h-[90vh]">
      <h1 className="text-3xl flex justify-center">About Me</h1>
      <div className="min-h-[70vh] py-10 px-10 flex justify-center relative h-full w-full rounded-lg flex-col md:flex-row items-center  md:h-72">
        {/* small screen */}
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
            <img
              src={AboutProfile}
              className="object-cover w-full h-full"
              alt="about profile"
            />
          </div>
          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              Web Developer
            </h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight">
              Sun Chengchhay
            </h4>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        {/* larg screen */}
        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">
              Web Developer
            </h4>
            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
              Sun Chengchhay
            </h3>
            <p className="text-gray-600 text-justify">
              Hi! My name is Sun Chengchhay. Currently, I am a student at Royal
              Univerisity of Phnom Penh, Majoring IT Engineering.
            </p>
            <a
              class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
              href="https://github.com/sunchengchhay"
              target="blank"
            >
              <span>Github</span>
              <span class="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
