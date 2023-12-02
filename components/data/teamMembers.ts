type TeamMember = {
  image: string;
  name: string;
  title: string;
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    image: "/assets/img/JoshHiath.png",
    name: "Josh Hihath",
    title: "Co-Founder",
    description:
      "Director of the Biodesign Center for Bioelectronics and Biosensors at ASU\n20 years of experience in Single-Molecule Electronics\nWill lead sensor design, integration, testing, and characterization",
  },
  {
    image: "/assets/img/PeimingZhang.jpg",
    name: "Peiming Zhang",
    title: "Co-Founder",
    description:
      "A veteran of 30+ years in DNA biotechnology\nExpertise in Design and Synthesis of Recognition Molecules\n20 years dedicated efforts in single-molecule bioanalysis\nWill lead chemical binding design",
  },
  {
    image: "/assets/img/MichaelChen.jpg",
    name: "Michael Chen",
    title: "Co-Founder",
    description:
      "Founder and managing director of a financial advisory firm\n25 year extensive experiences in finance management, mergers & acquisitions and financing\nWill lead business development",
  },
];

export default teamMembers;
