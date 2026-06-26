import image from "./img/image.png";
// Import the necessary icons from lucide-react for a modern look
import { Linkedin, Github,Mail, ChevronRight } from "lucide-react";
// Instead, using a placeholder image directly in the src attribute.
import datagpt from "./img/datagpt.png";
import dash5 from "./img/dash5.png";
import churn from "./img/churn.png";
import { Link, HashRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 font-inter text-gray-800 antialiased p-4 sm:p-8 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 rounded-xl shadow-2xl overflow-hidden bg-white">
        <aside className="md:w-1/3 lg:w-1/4 p-6 md:p-8 bg-blue-700 text-white flex flex-col items-center text-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          <img
            src={image}
            alt="Nkosinathi Mate"
            className="w-28 h-28 rounded-full mb-4 ring-4 ring-blue-300 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-3xl font-bold mb-1">Nkosinathi Mate</h1>
          <p className="text-blue-200 text-lg mb-2">
            Graduate Data Scientist and Software Engineer
          </p>
          <p className="text-blue-300 text-sm mb-6">Aberdeen, United Kingdom</p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/nkosinathi-mate/"
              aria-label="LinkedIn profile"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/nkosimate"
              aria-label="GitHub profile"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200"
            >
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:nkosimate@gmail.com"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold hover:bg-blue-400 transition-colors duration-200 shadow-md"
            >
              <Mail size={18} strokeWidth={1.5} />
              <span>Email Me</span>
            </a>
          </div>

          <section className="bg-blue-800 bg-opacity-30 p-6 rounded-lg mb-6 shadow-inner w-full">
            <h2 className="text-xl font-semibold mb-3 border-b border-blue-600 pb-2">
              About
            </h2>
            <p className="text-blue-100 leading-relaxed text-sm">
              ML systems for high-stakes environments: drilling safety, medical
              imaging, NLP. MSc Distinction. Production code, clear
              communication, open to relocation.
            </p>
          </section>

          <section className="bg-blue-800 bg-opacity-30 p-6 rounded-lg shadow-inner w-full">
            <h2 className="text-xl font-semibold mb-3 border-b border-blue-600 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "SQL",
                "Python",
                "R",
                "Tableau",
                "Excel",
                "AWS",
                "Statistical modelling",
                "Scikit-learn",
                "TensorFlow/PyTorch",
                "Streamlit",
                "Git",
                "Hadoop",
                "PySpark",
                "Apache Pig",
                "Feature Engineering & Model Evaluation",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-xs font-medium shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-blue-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>

        <section className="flex-1 p-6 md:p-10 lg:p-12 bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
          <section className="mb-10">
            <div className="flex items-center justify-between gap-4 mb-6 border-b-2 border-blue-200 pb-3">
              <h2 className="text-3xl font-bold text-blue-700">Projects</h2>
              <Link
                to="/projects"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                More Projects <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
              <img
                src={dash5}
                alt="Kick Detection in Oil & Gas Drilling Using LSTM-AE Networks"
                className="w-full md:w-2/5 rounded-lg object-cover shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  Kick Detection in Oil & Gas Drilling Using LSTM-AE Networks
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Python",
                    "Pandas",
                    "Streamlit",
                    "TensorFlow",
                    "Scikit-learn",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Developed an end-to-end kick detection solution for industrial
                  safety, leveraging LSTM-AE deep learning models for 91%
                  accuracy on complex drilling sensor data. Drove immediate
                  operational value by building a Streamlit dashboard enabling
                  real-time monitoring and critical decision support for oil &
                  gas engineers.
                </p>
                <a
                  href="https://github.com/nkosimate/LSTM-autoencoder"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Github <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
              <img
                src={datagpt}
                alt="AI Powered Data Analyst Assistant"
                className="w-full md:w-2/5 rounded-lg object-cover shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  AI Powered Data Analyst Assistant
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Python",
                    "OpenAI",
                    "LangChain",
                    "StreamLit",
                    "Plotly",
                    "Pandas",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Designed and built an interactive AI assistant that enables
                  natural language querying of CSV datasets using LLMs.
                  Leveraged LangChain agents and OpenAI to interpret user
                  questions, generate real-time Pandas logic, and produce
                  dynamic visualisations via Plotly, all wrapped in a clean
                  Streamlit interface. Showcased practical agentic workflows and
                  real-world LLM integration to accelerate data exploration and
                  decision-making without code or SQL.
                </p>
                <a
                  href="https://github.com/nkosimate/ai-data-analyst"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Github <ChevronRight size={16} className="ml-1" />
                </a>
                <a
                  href="https://ai-data-analyst-nkosimate.streamlit.app/"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Live Demo <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="my-4"></div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
              <img
                src={churn}
                alt="Customer Churn Prediction Project"
                className="w-full md:w-2/5 rounded-lg object-cover shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  Customer Churn Prediction Using Machine Learning
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Python",
                    "Pandas",
                    "Scikit-learn",
                    "XGBoost",
                    "Streamlit",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Built an end-to-end churn prediction pipeline to identify
                  at-risk telecom customers and support retention strategies.
                  Selected a tuned Gradient Boosting model, improving precision
                  by ~10% while maintaining strong overall performance.
                  Engineered behavioural features such as{" "}
                  <strong>UsagePerDollar</strong> and{" "}
                  <strong>DataMismatch</strong>, uncovering key churn drivers
                  including high charges, contract type, and frequent service
                  calls. Identified a <strong>14.5% churn rate</strong> and
                  high-risk customer segments to enable targeted, data-driven
                  decisions.
                </p>

                <a
                  href="https://github.com/nkosimate/CustomerChurnPrediction"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Github <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
              Experience
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 mb-1">
                March 2024 – August 2024
              </p>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                Data Scientist Intern at SafeInflux
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                At SafeInflux, I spearheaded the development of an
                LSTM-AE-driven anomaly detection system for drilling operations,
                boosting safety with 91% accuracy. My role encompassed
                end-to-end ML pipeline creation, from engineering and
                pre-processing diverse time-series sensor data to deploying a
                Streamlit dashboard that empowered engineers with real-time
                insights, directly improving operational decision-making. I also
                ensured pipeline scalability and reproducibility through
                meticulous documentation and Git version control.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Pandas",
                  "Streamlit",
                  "Excel",
                  "Tensorflow",
                  "Scikit-learn",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
              Education
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 mb-1">December 2024</p>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                MSc Data Science, Robert Gordon University, Aberdeen
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Master of Science in Data Science from Robert Gordon University,
                providing a robust foundation in designing and implementing
                end-to-end data solutions, from Big Data acquisition,
                warehousing, and advanced analytics to impactful visualization.
                The program uniquely emphasizes translating key performance
                indicators into actionable business decisions, equipping me with
                the skills to drive strategic insights in diverse industries.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-6 sm:p-10 md:p-12">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-2xl">
        <Link to="/" className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800">
          ← Back Home
        </Link>
        <h1 className="mb-4 text-4xl font-bold text-blue-700">Projects</h1>
        <p className="mb-8 text-gray-700">
          A closer look at the data science and software projects I have built.
        </p>
        <div className="space-y-6">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-semibold text-blue-800">Kick Detection in Oil & Gas Drilling</h2>
            <p className="mt-2 text-gray-700">
              An LSTM-autoencoder approach for industrial safety monitoring and decision support system.
            </p>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-semibold text-blue-800">AI Powered Data Analyst Assistant</h2>
            <p className="mt-2 text-gray-700">
              A conversational agent that turns natural language questions into insights from CSV data.
            </p>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-semibold text-blue-800">Customer Churn Prediction</h2>
            <p className="mt-2 text-gray-700">
              A machine learning pipeline that identifies at-risk customers and highlights retention drivers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
