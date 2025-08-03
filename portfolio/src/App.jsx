import image from "./img/image.png"
// Import the necessary icons from lucide-react for a modern look
import { Linkedin, Github, FileText, Mail, ChevronRight } from 'lucide-react';
// Instead, using a placeholder image directly in the src attribute.

// Main App component which will now contain the entire portfolio layout
function App() {
  return (
    // The outermost container sets the background gradient, font, text color,
    // and overall padding for the entire page, ensuring responsiveness.
    // Changed gradient from purple to blue/cyan tones.
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 font-inter text-gray-800 antialiased p-4 sm:p-8 md:p-12">
      {/* This inner container holds the main two-column layout (sidebar and main content).
          It uses flexbox for desktop and stacks elements vertically on smaller screens.
          It also applies a white background, rounded corners, and a shadow. */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 rounded-xl shadow-2xl overflow-hidden bg-white">

        {/* Sidebar Section: This column holds the profile info, social links, about, and skills.
            It has a distinct blue background and centers its content. */}
        <aside className="md:w-1/3 lg:w-1/4 p-6 md:p-8 bg-blue-700 text-white flex flex-col items-center text-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          {/* Profile Image: Using a placeholder image for now to resolve the build error.
              If you want to use a specific image, ensure it's hosted online or placed
              in the 'public' folder and referenced correctly (e.g., '/image.png'). */}
          <img
            src={image} 
            alt="Profile photo of Nkosinathi Mate"
            className="w-28 h-28 rounded-full mb-4 ring-4 ring-blue-300 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          {/* Name and Role details */}
          <h1 className="text-3xl font-bold mb-1">Nkosinathi Mate</h1>
          <p className="text-blue-200 text-lg mb-2">Graduate Data Scientist and Software Engineer</p>
          <p className="text-blue-300 text-sm mb-6">Aberdeen, United Kingdom</p>

          {/* Social Icons: Uses Lucide React icons for LinkedIn, GitHub, a generic file icon for Kaggle,
              and a Mail icon for the email button. Each icon has a hover effect. */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <a href="https://www.linkedin.com/in/nkosinathi-mate/" aria-label="LinkedIn profile" className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/nkosimate" aria-label="GitHub profile" className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200">
              <Github size={24} strokeWidth={1.5} />
            </a>
            {/* Email Button: Styled as a rounded button with text and a mail icon. */}
            <a href="mailto:nkosimate@gmail.com" className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold hover:bg-blue-400 transition-colors duration-200 shadow-md">
              <Mail size={18} strokeWidth={1.5} />
              <span>Email Me</span>
            </a>
          </div>

          {/* About Section: Provides a brief description, with a subtle blue background and border. */}
          <section className="bg-blue-800 bg-opacity-30 p-6 rounded-lg mb-6 shadow-inner w-full">
            <h2 className="text-xl font-semibold mb-3 border-b border-blue-600 pb-2">About</h2>
            <p className="text-blue-100 leading-relaxed text-sm">
              Results-oriented Data Scientist and Software Engineer with an MSc in Data Science (2024), experienced in Python, machine learning, and full-stack data solutions. I deliver end-to-end ML pipelines, building high-accuracy models for real-world impact in industrial safety and healthcare, and excel at communicating complex insights to diverse stakeholders
            </p>
          </section>

          {/* Skills Section: Displays skills as rounded badges with a hover effect, in blue tones. */}
          <section className="bg-blue-800 bg-opacity-30 p-6 rounded-lg shadow-inner w-full">
            <h2 className="text-xl font-semibold mb-3 border-b border-blue-600 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['SQL', 'Python', 'R', 'Tableau', 'Excel', 'AWS','Statistical modelling', 'Scikit-learn','TensorFlow/PyTorch','Streamlit','Git','Hadoop','Spark','Apache Pig','Feature Engineering & Model Evaluation'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-xs font-medium shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-blue-500">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>

        {/* Main Content Section: This column displays projects, experience, and education.
            It has a white background and generous padding. */}
        <section className="flex-1 p-6 md:p-10 lg:p-12 bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
          {/* Projects Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">Projects</h2>

            {/* Kick-Detection Project Card: Each project is a card with an image, title, tags, description,
                and a "Read more" link with a subtle arrow icon. Cards have hover effects. */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
              <img
                src="https://placehold.co/300x150/3B82F6/ffffff?text=Kick-Detection" // Changed placeholder to blue for consistency
                alt="Kick Detection in Oil & Gas Drilling Using LSTM-AE Networks"
                className="w-full md:w-2/5 rounded-lg object-cover shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Kick Detection in Oil & Gas Drilling Using LSTM-AE Networks</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Python', 'Pandas', 'Streamlit','TensorFlow','Scikit-learn'].map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Developed an end-to-end kick detection solution for industrial safety, leveraging LSTM-AE deep learning models for 91% accuracy on complex drilling sensor data. Drove immediate operational value by building a Streamlit dashboard enabling real-time monitoring and critical decision support for oil & gas engineers.
                </p>
                <a href="https://github.com/nkosimate/LSTM-autoencoder" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  Read more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
              <img
                src="https://placehold.co/300x150/3B82F6/ffffff?text=AI-Powered-Data-Analyst-Assistant" // Changed placeholder to blue for consistency
                alt="AI Powered Data Analyst Assistant"
                className="w-full md:w-2/5 rounded-lg object-cover shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">AI Powered Data Analyst Assistant</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Python', 'OpenAI','LangChain','StreamLit','Plotly', 'Pandas'].map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Designed and built an interactive AI assistant that enables natural language querying of CSV datasets using LLMs. Leveraged LangChain agents and OpenAI to interpret user questions, generate real-time Pandas logic, and produce dynamic visualisations via Plotly — all wrapped in a clean Streamlit interface. Showcased practical agentic workflows and real-world LLM integration to accelerate data exploration and decision-making without code or SQL.
                  </p>
                <a href="https://github.com/nkosimate/ai-data-analyst" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  Read more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            {/* Northwind Data Warehouse Project Card: Similar structure, also in blue tones. */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
              <img
                src="https://placehold.co/300x150/3B82F6/ffffff?text=NorthWind-Data-Warehousing" // Changed placeholder to blue for consistency
                alt="Northwind Data Warehouse Project"
                className="w-full md:w-2/5 rounded-lg object-cover shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Northwind Data Warehouse project</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['SQL', 'Excel'].map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Led the design and deployment of a Northwind data warehouse built on a star schema, empowering in-depth analysis of product sales and market trends. Engineered a robust ETL process with SQL Server Integration Services (SSIS) for seamless data flow, and established PowerPivot models and an OLAP cube (SSAS), utilizing MDX queries to extract vital business intelligence and support strategic decisions.
                  </p>
                <a href="https://github.com/nkosimate/Data-Warehousing" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  Read more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </section>

          {/* Experience Section: Displays work experience details with dates and relevant skills. */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">Experience</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 mb-1">March 2024 – August 2024</p>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Data Scientist Intern at SafeInflux</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">At SafeInflux, I spearheaded the development of an LSTM-AE-driven anomaly detection system for drilling operations, boosting safety with 91% accuracy. My role encompassed end-to-end ML pipeline creation, from engineering and pre-processing diverse time-series sensor data to deploying a Streamlit dashboard that empowered engineers with real-time insights, directly improving operational decision-making. I also ensured pipeline scalability and reproducibility through meticulous documentation and Git version control.
</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Pandas', 'Streamlit', 'Excel', 'Tensorflow','Scikit-learn'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section: Displays education details, now with blue accents. */}
          <section>
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">Education</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 mb-1">December 2024</p>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">MSc Data Science, Robert Gordon University, Aberdeen</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Master of Science in Data Science from Robert Gordon University, providing a robust foundation in designing and implementing end-to-end data solutions, from Big Data acquisition, warehousing, and advanced analytics to impactful visualization. The program uniquely emphasizes translating key performance indicators into actionable business decisions, equipping me with the skills to drive strategic insights in diverse industries.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
