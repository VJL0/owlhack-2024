import Card from "./Card";

const projects = [
  {
    title: "Mental health",
    description:
      "Mental health support is a critical need that affects millions of people worldwide. Unfortunately, there are significant barriers preventing individuals from accessing the care they require. These barriers include cost, accessibility, stigma, and a shortage of human therapists. As the demand for mental health services surges, innovative solutions are essential to bridge this gap.",
    src: "action.webp",
    color: "#7F97A3",
  },
];

const Cards = () => {
  return (
    <div className="overflow-y-auto h-screen" style={{ position: "relative" }}>
      {projects.map((project, i) => {
        return (
          <Card
            img={project.src}
            key={`p_${i}`}
            i={i}
            {...project}
            range={[i * 0.25, 1]}
          />
        );
      })}
    </div>
  );
};

export default Cards;
