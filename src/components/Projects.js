import Container from "react-bootstrap/Container";
import { ProjectCard } from "./ProjectCard";
import rollcall from "../assets/img/rollcall.png";
import joyfuel1 from "../assets/img/joyfuel1.png";
import joyfuel2 from "../assets/img/joyfuel2.png";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <div className="projectheader" data-aos="fade-up">
          <h1> / projects </h1>
        </div>
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
          <ProjectCard
            title={
              <>
                Developed for{" "}
                <a
                  href="https://www.laroye.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#cccce5",
                    textDecoration: "underline",
                    textDecorationThickness: "1.2px",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#AAAAC3")} // Hover color
                  onMouseLeave={(e) => (e.target.style.color = "#cccce5")} // Default color
                >
                  JoyFuel
                </a>
              </>
            }
            description="Worked on algorithm features and UI for the Joyfuel mobile app."
            image={joyfuel1}
            image2={joyfuel2}
            imageWidth="50%"
            tags={[
              "React Native",
              "Firebase Cloud Functions",
              "Python",
              "Xcode",
            ]}
            linkedinLink="https://www.linkedin.com/company/laroyeai/posts/?feedView=all"
          />
        </div>
        <div data-aos="fade-up" data-aos-offset="600">
          <ProjectCard
            title="Project Roll Call"
            description="Task automation meets smart scheduling."
            image={rollcall}
            tags={["React", "Vite", "Flask", "MongoDB", "Google Calendar API"]}
            githubLink="https://github.com/EECS3311F24/project-roll-call"
          />
        </div>
      </Container>
    </section>
  );
};
