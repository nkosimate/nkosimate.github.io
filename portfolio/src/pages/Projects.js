import React from 'react';

function Projects() {
  const projects = [
    {
      name: "Customer Segmentation with K-Means",
      description: "Analyzed customer data and segmented them using K-Means clustering.",
      githubLink: "https://github.com/your-username/project-1"
    },
    {
      name: "Sales Forecasting with Time Series",
      description: "Used ARIMA to forecast future sales based on historical data.",
      githubLink: "https://github.com/your-username/project-2"
    },
    {
      name: "Sentiment Analysis of Product Reviews",
      description: "Applied NLP techniques to analyze product reviews and classify sentiments.",
      githubLink: "https://github.com/your-username/project-3"
    }
  ];

  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
