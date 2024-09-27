import React from "react";
import SlideAnimation from "./SlideAnimation";
import image from "../assets/image.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";

import tailwindcss from "../assets/tailwindcss.png";
import mysql from "../assets/mysql.png";

const Hero = () => {
  return (
    <div class="flex justify-center justify-items-start h-screen md:mt-auto mt-20 ">
    <div class="container mx-auto">
      <div class="flex flex-col sm:mt-32 md:flex-row items-center xl:space-x-36 xl:ml-96 ">
        <div>
          <img
            class="w-60"
            src={image}
            alt="Profile picture of Lawrence, a Web Developer"
          />
        </div>
  
        <div class="md:w-1/2 text-center md:text-left mx-4 md:mx-10 mt-4 md:mt-0">
          <h3 class="space-mono-regular text-sm my-3">
            <SlideAnimation>Hi, I'm Lawrence, a Web Developer.</SlideAnimation>
          </h3>
          <h1 class="kanit-extrabold text-2xl md:text-4xl lg:text-5xl my-3">
            <SlideAnimation>
              {" "}
              I <span class="text-green-500">transform</span> ideas into{" "}
              <span class="text-green-500">captivating</span> digital experiences.{" "}
            </SlideAnimation>
          </h1>
  
          <div class="mt-7 flex justify-center xl:justify-start space-x-4">
            <a href="https://example.com">
              <img
                class="transition-transform duration-300 hover:scale-110 w-12"
                src={linkedin}
                alt="Linkedin of Lawrence"
              />
            </a>
            <a href="https://example.com">
              <img
                class="transition-transform duration-300 hover:scale-110 w-12"
                src={github}
                alt="Github of Lawrence"
              />
            </a>
            <a href="https://example.com">
              <img
                class="transition-transform duration-300 hover:scale-110 w-12"
                src={gmail}
                alt="Gmail of Lawrence"
              />
            </a>
          </div>
        </div>
      </div>
  
      <div class="gap-3 md:gap-9 kanit-medium md:flex justify-center text-lg md:text-2xl md:mt-32 mt-11 ">
        <span class="mt-5 mb-5 kanit-medium ">Tech Stack |</span>
  
        <ul class="flex flex-wrap justify-center">
          <li class="flex justify-center flex-wrap gap-3 md:gap-9">
            <img
              src={html}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="html"
            />
            <img
              src={css}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="css"
            />
            <img
              src={js}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="js"
            />
            <img
              src={mongodb}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="js"
            />
            <img
              src={express}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="js"
            />
            <img
              src={react}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="react"
            />
            <img
              src={node}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="js"
            />
            <img
              src={tailwindcss}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="tailwindcss"
            />
            <img
              src={mysql}
              class="transition-transform duration-300 transform hover:scale-110 w-16 md:w-20"
              alt="mysql"
            />
          </li>
        </ul>
      </div>
    
    </div>
   
  </div>
  
    
  );
};

export default Hero;
