import React from "react";
import teamMembers from "../data/teamMembers";
import SectionHeader from "../common/Header";
import FadeUpMotionDiv from "../utils/FadeUpMotion";

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 xl:px-20 py-8">
      <FadeUpMotionDiv>
        <SectionHeader text="Behind The Idea" />
      </FadeUpMotionDiv>
      <div className="text-start mb-12 ">
        <FadeUpMotionDiv>
          <h1 className="text-4xl lg:text-5xl leading-tight text-gray-900 mb-4">
            Team
          </h1>
        </FadeUpMotionDiv>
        <FadeUpMotionDiv>
          <div className="max-w-4xl">
            <p className="text-gray-600 font-light text-md md:text-lg">
              Our team boasts a long-standing history of successful
              collaboration, leveraging extensive experience and diverse
              expertise in Electrical Engineering, Biological and Surface
              Chemistry, and Finance.
            </p>
          </div>
        </FadeUpMotionDiv>
      </div>
      <FadeUpMotionDiv>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="p-4 md:w-1/3 lg:w-1/4 md:mx-10">
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[200px] md:w-[250px] rounded-2xl"
                />
                <h2 className="text-xl text-black mt-4">{member.name}</h2>
                <p className="text-gray-700 uppercase">{member.title}</p>
                <ul className="text-left list-disc pl-5 md:pl-0 mt-2">
                  {member.description.split("\n").map((line, i) => (
                    <li key={i} className="text-gray-600 font-light text-sm">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </FadeUpMotionDiv>
    </div>
  );
};

export default Team;
