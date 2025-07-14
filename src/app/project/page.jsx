"use client";
import React from 'react';
import styled from 'styled-components';
import Card from '../../components/projectCard';
import projects from '../data/projects.json';
import { motion } from "framer-motion";

const App = () => {
  return (
    <Container>
      <motion.img
        src="/projects.svg"
        alt="project image"
        className="project-banner"
        whileHover={{ scale: 1.08 }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h2 className="title">
        🚀 Projects
      </h2>
      <Grid>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}

        {/* See more card */}
        <motion.a 
          href="https://github.com/riya1807pro" 
          target="_blank" 
          rel="noopener noreferrer"
          className="see-more"
          whileHover={{ scale: 1.1, x: 5 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="arrow-card m-16">
            <span>See more</span>
            <span className="arrow">→</span>
          </div>
        </motion.a>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .project-banner {
    height: 160px;
    width: auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);

    @media(min-width: 768px) {
      height: 200px;
    }
    @media(min-width: 1024px) {
      height: 240px;
    }
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #ec4899, #8b5cf6, #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  .see-more {
    text-decoration: none;
    color: white;
  }

  .arrow-card {
    width: 260px;
    height: 180px;
    background: rgba(255,255,255,0.08);
    border: 1px dashed rgba(255,255,255,0.4);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: all 0.3s;
    cursor: pointer;

    .arrow {
      font-size: 2.5rem;
      animation: bounce 1.5s infinite;
    }

    &:hover {
      box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    }
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(8px); }
  }
`;

export default App;