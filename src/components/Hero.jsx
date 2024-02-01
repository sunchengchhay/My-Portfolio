import Profile from "../assets/profile.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Student"],
    loop: true,
    typeSpeed: 220,
  });

  return (
    <div className="mt-6 md:mt-[-30px] md:h-[90vh] h-[50vh] flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 md:space-x-10 lg:space-x-40">
      <div className="rounded-full overflow-hidden shrink-0 w-[200px] h-[200px] sm:w-[260px] sm:h-[280px] md:w-[380px] md:h-[380px] bg-gray-100">
        <img
          className="w-full h-full object-cover"
          src={Profile}
          alt="profile"
        />
      </div>
      <div className="flex flex-col text-xl poppins-regular space-y-2">
        <p className="text-sm sm:text-lg md:text-xl">Hello, I'm</p>
        <p className="text-3xl sm:text-4xl md:text-5xl">Sun Chengchhay</p>
        <p className="text-2xl sm:text-3xl md:text-4xl">
          <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
