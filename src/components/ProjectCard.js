import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub icon from react-icons

export const ProjectCard = ({
  title,
  description,
  image,
  image2,
  tags = [],
  imageWidth = "100%",
  link,
  githubLink,
  linkedinLink,
}) => {
  return (
    <div
      className="project-card"
      style={{
        backgroundColor: "rgb(33, 33, 59)",
        borderRadius: "12px",
        padding: "22px",
        color: "#cccce5",
        maxWidth: "600px",
        marginBottom: "40px",
      }}
    >
      <div style={{ display: "flex", gap: "0px", alignItems: "center" }}>
        {image && (
          <img
            src={image}
            alt={`${title} preview`}
            style={{
              borderRadius: "30px",
              width: imageWidth,
              padding: "10px",
            }}
          />
        )}
        {image2 && (
          <img
            src={image2}
            alt={`${title} secondary preview`}
            style={{
              borderRadius: "30px",
              width: imageWidth,
              padding: "10px",
            }}
          />
        )}
      </div>

      <h2
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccce5", textDecoration: "none" }}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </span>
        <div
          style={{
            display: "flex",
            gap: "1rem", // Use relative units for spacing between icons
            marginLeft: "auto", // Push icons to the right
            transform: "translateX(-30%)", // Slightly pull the icons back to the left
          }}
        >
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#cccce5",
                fontSize: "1.5rem", // Use relative units for icon size
                display: "flex",
                textDecoration: "none",
              }}
            >
              <FaGithub />
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#cccce5",
                fontSize: "1.5rem", // Use relative units for icon size
                display: "flex",
                textDecoration: "none",
              }}
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </h2>

      {description && (
        <p style={{ opacity: 0.8, lineHeight: "1.5" }}>{description}</p>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {tags.map((tag, idx) => (
          <span
            key={idx}
            style={{
              background: "rgb(59, 59, 97)",
              borderRadius: "20px",
              padding: "4px 12px",
              fontSize: "12px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
