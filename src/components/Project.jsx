import Eva from "../assets/Eva.png";
import E from "../assets/E-Learning.png";
import We from "../assets/wegrow.png";

const Project = () => {
  return (
    <div
      id="project"
      className="min-h-[90vh] poppins-regular bg-gray-50 flex justify-center px-10 md:px-1"
    >
      <div className="container mt-12 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 pb-4 text-center text-3xl">
            My Contributed Projects
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <img src={Eva} className="w-full" />
                    <a href="https://eva.rupp.support/" target="blank">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Evaluation System</h5>
                  <p className="mb-6">
                    This System was created to solve the problem of evaluate
                    project at Engineering Day Event at Faculty of Engineering
                  </p>
                  <p className="mb-6">
                    <span className="font-bold">Technologies:</span> NextJS,
                    Python Flask, PostgreSQL, Docker
                  </p>
                  <div className="space-x-4 flex justify-end">
                    <a
                      href="https://eva.rupp.support/"
                      target="blank"
                      className="inline-block hover:bg-gray-400 hover:text-gray-100 hover:shadow-sm bg-gray-200 rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <img src={E} className="w-full" />
                    <a href="https://learn.rupp.support" target="blank">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">E-Learning System</h5>
                  <p className="mb-6">
                    This System was created to solve the problem of old learning
                    system at Rupp.
                  </p>
                  <p className="mb-6">
                    <span className="font-bold">Technologies:</span> Moodle,
                    PHP, PostgreSQL, Python for Analysis
                  </p>
                  <div className="space-x-4 flex justify-end">
                    <a
                      href="https://learn.rupp.support/login/index.php"
                      target="blank"
                      className="inline-block hover:bg-gray-400 hover:text-gray-100 hover:shadow-sm bg-gray-200 rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <img src={We} className="w-full" />
                    <a href="https://www.wegrow.today" target="blank">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">WeGrow</h5>
                  <p className="mb-6">
                    This Website was created to solve the problem of finding
                    voluntary work for general student.
                  </p>
                  <p className="mb-6">
                    <span className="font-bold">Technologies:</span> ReactJs,
                    TailwindCSS, Firebase
                  </p>
                  <div className="space-x-4 flex justify-end">
                    <a
                      href="https://wegrow.today"
                      target="blank"
                      className="inline-block hover:bg-gray-400 hover:text-gray-100 hover:shadow-sm bg-gray-200 rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
