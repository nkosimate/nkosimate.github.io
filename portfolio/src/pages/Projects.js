import React from 'react';

function Projects() {
  const projects = [
    {
      name: "Kick Detection in Oil & Gas Drilling Using LSTM-AE Networks ",
      description: "Developed a real-time kick detection system using LSTM-AE networks, improving safety in oil and gas drilling.Pre-processed large sensor datasets for model training, achieved high accuracy in detecting kicks.Finishing off by building a Streamlit dashboard for real-time monitoring, significantly enhancing operational decision-making. The model had great accuracy of 91% and the streamlit dashboard helped an oil and gas engineer be able to quickly analyse the data.",
      about:"Learn",
      githubLink: "https://github.com/your-username/project-2"
    },
    {

      name: "Computer Vision for Pneumonia Detection",
      description: "Developed a deep learning model using CNNs and GANs to accurately detect pneumonia from chest X-rays, addressing dataset imbalance and demonstrating strong potential for clinical application.",
      about: "In this project, I utilized deep learning techniques to enhance the accuracy of pneumonia detection from chest X-rays. By implementing a Convolutional Neural Network (CNN) architecture, specifically VGGNet and ResNet, the model was trained using a well-labeled dataset of X-rays for pneumonia and non-pneumonia patients. I also compared these models to transfer learning techniques to assess performance. Key strengths of the approach included data pre-processing, hyperparameter tuning, and thorough evaluation metrics (accuracy, precision, recall, F1-score, and AUC). Additionally, I used Generative Adversarial Networks (GANs) to address dataset imbalance, improving model training with augmented images.The results demonstrated the model’s high potential in clinical applications, such as assisting radiologists. However, challenges included difficulties in reproducing results and the use of only one dataset, limiting generalization. Future work will focus on expanding the dataset and refining reproducibility.",
      githubLink: "https://github.com/nkosimate/Pneumonia-Detection.git"
    },
    {
      name: "COVID-19 Identification System using Computer Vision ",
      description: "Engineered a high-accuracy COVID-19 identification system with 98.4% accuracy, utilizing chest X-rays. Applied data augmentation too reduce the image unbalance and transfer learning techniques with ResNet and Xception models. Lastly developed a Streamlit application for users to test and try out for rapid diagnoses.",
      about:"Learn",
      githubLink: "https://github.com/your-username/project-3"
    },
    {
      name: "Data Exploration with R ",
      description: "A comprehensive data exploration process using R,",
      about:"Key tasks include loading and inspecting the data, identifying and handling missing values in variables like pressure (imputed with the mean) and snowing (assumed to be \"No\" where missing). Irrelevant predictors such as Continent and ID were removed due to constant or unique values. The process involved cleaning categorical variables (e.g., converting \"y/n\" to \"Yes/No\") and transforming character data into numeric format. Visualizations like histograms and bar plots were created using ggplot2 to assess distributions. Key skills demonstrated include data cleaning, feature engineering, handling missing data, and basic visualization, showcasing proficiency in using R libraries such as caret, dplyr, and ggplot2 for exploratory data analysis.",
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
            <p>{project.about}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
