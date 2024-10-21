import React from 'react';

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        Hi, I’m [Your Name], a passionate data scientist with experience in [list relevant skills].
      </p>
      <h2>Skills</h2>
      <ul>
        <li>Python, R, SQL</li>
        <li>Data Visualization (Matplotlib, Seaborn, Plotly)</li>
        <li>Machine Learning (Scikit-Learn, TensorFlow)</li>
        <li>Data Wrangling &amp; Cleaning (Pandas, Numpy)</li>
        <li>Statistical Analysis, A/B Testing</li>
      </ul>

      <h2>Experience</h2>
      <p>
        <strong>Data Scientist | ABC Corp</strong><br />
        Jan 2020 - Present<br />
        - Developed predictive models to improve customer retention by 15%.
        - Built data pipelines to process real-time sales data.
      </p>

      <h2>Education</h2>
      <p>
        <strong>M.S. in Data Science</strong><br />
        University of XYZ
      </p>
    </section>
  );
}

export default About;
