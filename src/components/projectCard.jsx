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
  width: 300px;
  background: rgba(9, 9, 30, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 12px 30px rgba(0,0,0,0.3);
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 18px 40px rgba(255, 0, 120, 0.4);
  }

  .image img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    color: #f9d8ff;

    h2 {
      font-size: 1.4rem;
      margin: 0;
      font-weight: 700;
      background: linear-gradient(90deg, #ff8ae2, #9f7fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 0.9rem;
      color: #e0c2f2;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      span {
        background: linear-gradient(135deg, #d946ef, #8b5cf6);
        color: white;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.7rem;
      }
    }

    .links {
      display: flex;
      gap: 12px;
      margin-top: 0.5rem;

      a {
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 0.8rem;
        background: linear-gradient(90deg, #ec4899, #8b5cf6);
        color: white;
        transition: all 0.3s ease;

        &:hover {
          background: linear-gradient(90deg, #f472b6, #a78bfa);
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export default Card;