"use client";
import React from 'react';
import Card from '../../components/projectCard';
import projects from '../data/projects.json';

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      padding: '2rem'
    }}>
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default App;
