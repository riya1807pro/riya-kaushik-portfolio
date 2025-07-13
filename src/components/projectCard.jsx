"use client";
import React from 'react';
import styled from 'styled-components';

const Card = ({ project }) => {
  return (
    <StyledCard>
      <div className="image">
        <img src={project.image || '/placeholder.png'} alt={project.title} />
      </div>
      <div className="content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="skills">
          {project.skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </div>
        <div className="links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 280px;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
  }

  .image img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      font-size: 1.2rem;
      margin: 0;
    }

    p {
      font-size: 0.9rem;
      color: #555;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;

      span {
        background: #f0f0f0;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
      }
    }

    .links {
      display: flex;
      gap: 10px;
      margin-top: 0.5rem;

      a {
        text-decoration: none;
        padding: 6px 12px;
        background: #0070f3;
        color: white;
        border-radius: 4px;
        font-size: 0.8rem;
        transition: background 0.3s;

        &:hover {
          background: #005bb5;
        }
      }
    }
  }
`;

export default Card;
