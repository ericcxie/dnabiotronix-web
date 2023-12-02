import React from "react";
import teamMembers from "../data/teamMembers";

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 ">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 mb-4">
          Meet the Team
        </h1>
        <div className="mx-auto max-w-4xl">
          <p className="text-gray-700 text-lg font-light">
            With extensive experiences and diverse skill sets in Electrical
            Engineering, Biological and Surface Chemistry, and Finance, we've
            got a long proven history of success working together.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member) => (
          <div key={member.name} className="p-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                width={180}
                className="rounded-3xl drop-shadow-lg transition-shadow duration-300"
              />
              <h2 className="text-xl text-black font-bold mt-4">
                {member.name}
              </h2>
              <p className="text-gray-700">{member.title}</p>
              <div className="text-gray-600 text-sm text-center mt-2 max-w-xs mx-auto">
                {member.description.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
