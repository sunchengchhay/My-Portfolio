const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-[90vh] poppins-regular flex justify-center"
    >
      <div className="container mx-auto py-20">
        <h1 className="text-3xl mt-10 flex justify-center">Experience</h1>
        <div className="flex flex-wrap items-start justify-evenly w-full">
          <div className="w-[300px] h-auto pb-10 lg:w-[400px] lg:h-[400px] bg-gray-100 px-[62px] my-10 rounded-lg">
            <h1 className="pt-10 pb-6 text-2xl lg:text-3xl font-extrabold">
              Frontend
            </h1>
            <ul className="list-disc list-outside text-lg lg:text-xl">
              <div className="py-2">Html CSS Javascript</div>
              <div className="py-2">ReactJs</div>
              <div className="pt-2">TailwindCss</div>
              <div className="pt-2">PHP</div>
            </ul>
          </div>
          <div className="w-[300px] h-auto pb-10 lg:w-[400px] lg:h-[400px] bg-gray-100 px-[62px] my-10 rounded-lg">
            <h1 className="pt-10 pb-6 text-2xl lg:text-3xl font-extrabold">
              Backend
            </h1>
            <ul className="list-disc list-outside text-lg lg:text-xl">
              <div className="py-2">Python Flask</div>
              <div className="py-2">Basic C# .NET</div>
              <div className="pt-2">Firebase</div>
              <div className="pt-2">Docker</div>
              <div className="pt-2">Postgres</div>
              <div className="pt-2">AWS EC2</div>
              <div className="pt-2">Firebase</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
