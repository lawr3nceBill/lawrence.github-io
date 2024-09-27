import React from "react";
import comming_soon from "../assets/comming_soon.jpg";

function Projects() {
  return (
    <div className="container mx-auto mt-8">
      <div className="font-mono justify-self-auto mt-20 text-3xl font-bold my-12">
        Projects:
      </div>

      <div className="md:max-lg:flex">
        <img src={comming_soon} alt="Example" />
      </div>
      <h3 className="my-5 font-mono text-xl "> Project Title </h3>
      <p className="font-light font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
        dignissimos impedit dolores non accusantium, autem sequi, distinctio
        atque ducimus nisi aliquam. Totam sed quibusdam molestias libero nihil
        modi amet natus.
      </p>
      <div>
        <div className=" font-sans font-semibold justify-between container space-x-4 relative z-10 my-5">
          <span className="bg-emerald-100 dark:bg-neutral-600 px-2 rounded">
            Tailwind
          </span>
          <span className="bg-emerald-100 dark:bg-neutral-600 px-2 rounded ">
            React.JS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
