import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Brain Tumor Detection",
    description:
      "CNN-based model for detecting and classifying brain tumors from MRI scans with 94% accuracy.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["TensorFlow", "OpenCV", "Streamlit"],
    categories: ["ml", "cv"],
    githubUrl: "https://github.com/Niyanthri24/brain-tumor-detection", // Add your actual GitHub repo URL
  },
  {
    title: "Youtube Comments Sentiment Analysis",
    description: "Sentiment analysis of Youtube Comments using BERT and viz.",
    image:
      "https://cdn.prod.website-files.com/614c82ed388d53640613982e/64f7989c55786e5b4de9b9cb_sentiment-analysis-explained.webp",
    technologies: ["BERT", "Streamlit", "Visuals"],
    categories: ["nlp", "ml"],
    githubUrl:
      "https://github.com/Niyanthri24/YouTube-Comment-Sentiment-Analyzer",
  },
  {
    title: "Spam Email Classification",
    description:
      "This project presents a machine learning-based solution to classify emails as spam or non-spam using Logistic Regression and Random Forest classifiers. It aims to enhance email productivity and security by filtering unwanted emails with high precision and recall.",
    image:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.inboxally.com/wp-content/uploads/2024/09/a-computer-screen-filled-with-spam-warnings-and-alerts.png",
    technologies: ["Scikit", "BOW", "ROC"],
    categories: ["nlp"],
    githubUrl: "https://github.com/Niyanthri24/spam-email-classification",
    demoUrl: null,
  },
  {
    title: "IPL Score Prediction",
    description:
      "This project focuses on predicting the total runs scored by a batting team in an Indian Premier League (IPL) cricket match using Linear Regression. The aim is to build a machine learning model that uses historical match data and relevant features to forecast match scores accurately.",
    image: "https://documents.iplt20.com/bcci/articles/1742574837_Website.png",
    technologies: ["Scikit", "Python", "FeatureEngineering"],
    categories: ["ml"],
    githubUrl: "https://github.com/Niyanthri24/ipl-score-predictions",
    demoUrl: null,
  },
  {
    title: "Weather Data Collection Data Pipeline",
    description:
      " The pipeline fetches weather metrics from a public API, transforms and cleans the data, stores it for historical tracking, and triggers real-time alerts for extreme conditions.",
    image:
      "https://wmo.int/sites/default/files/2023-06/MicrosoftTeams-image%20%2817%29.png",
    technologies: ["Python", "Databricks", "DeltaLake", "PySpark"],
    categories: ["viz", "ml"],
    githubUrl:
      "https://github.com/Niyanthri24/Weather-Data-Collection-Data-Pipeline",
    demoUrl: null,
  },
  {
    title: "Fake News Detection",
    description:
      "Automated news categorization using transformer models and topic modeling.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["NLP", "TF-IDF", "ML"],
    categories: ["nlp"],
    githubUrl: "https://github.com/Niyanthri24/fake-news-detection",
    demoUrl: null,
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Machine Learning", value: "ml" },
  { label: "Data Visualization", value: "viz" },
  { label: "NLP", value: "nlp" },
  { label: "Computer Vision", value: "cv" },
];

const technologyColors = {
  TensorFlow: "bg-blue-100 text-blue-800",
  OpenCV: "bg-yellow-100 text-yellow-800",
  Python: "bg-purple-100 text-purple-800",
  BERT: "bg-blue-100 text-blue-800",
  Streamlit: "bg-green-100 text-green-800",
  "Twitter API": "bg-orange-100 text-orange-800",
  LSTM: "bg-blue-100 text-blue-800",
  "D3.js": "bg-green-100 text-green-800",
  Pandas: "bg-red-100 text-red-800",
  YOLO: "bg-blue-100 text-blue-800",
  PyTorch: "bg-purple-100 text-purple-800",
  Plotly: "bg-blue-100 text-blue-800",
  Dash: "bg-green-100 text-green-800",
  APIs: "bg-orange-100 text-orange-800",
  Transformers: "bg-blue-100 text-blue-800",
  spaCy: "bg-green-100 text-green-800",
  LDA: "bg-purple-100 text-purple-800",
  Databricks: "bg-blue-100 text-blue-800",
  DeltaLake: "bg-yellow-100 text-yellow-800",
  PySpark: "bg-green-100 text-green-800",
  Scikit: "bg-red-100 text-red-800",
  FeatureEngineering: "bg-blue-100 text-blue-800",
  Visuals: "bg-yellow-100 text-yellow-800",
  BOW: "bg-purple-100 text-purple-800",
  ROC: "bg-blue-100 text-blue-800",
  NLP: "bg-green-100 text-green-800",
  "TF-IDF": "bg-orange-100 text-orange-800",
  ML: "bg-blue-100 text-blue-800",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.categories.includes(activeFilter),
  );

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my data science projects, from machine learning models
            to data visualizations
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        technologyColors[
                          tech as keyof typeof technologyColors
                        ] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </a>
                  <span className="text-gray-600">
                    <Github className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
