import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Brain Tumor Detection",
    description: "CNN-based model for detecting and classifying brain tumors from MRI scans with 94% accuracy.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["TensorFlow", "OpenCV", "Python"],
    categories: ["ml", "cv"],
  },
  {
    title: "Social Media Sentiment Analysis",
    description: "Real-time sentiment analysis of Twitter data using BERT and interactive dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["BERT", "Streamlit", "Twitter API"],
    categories: ["nlp", "ml"],
  },
  {
    title: "Stock Market Prediction",
    description: "LSTM neural network for predicting stock prices with interactive D3.js visualizations.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["LSTM", "D3.js", "Pandas"],
    categories: ["viz", "ml"],
  },
  {
    title: "Autonomous Vehicle Vision",
    description: "Real-time object detection and lane recognition system for autonomous vehicles.",
    image: "https://pixabay.com/get/g118bc768dab3fb2ac1167f7575df4dbfda0bbd401bd1bbeb7b2d5ca6c5365545c7c5a8661946fd5d35dcfb291ed269c85826ea7ff6ab1ed594d65e6deeedb2ee_1280.jpg",
    technologies: ["YOLO", "OpenCV", "PyTorch"],
    categories: ["cv", "ml"],
  },
  {
    title: "Climate Data Explorer",
    description: "Interactive visualization of global climate data with Plotly and Dash framework.",
    image: "https://pixabay.com/get/g6526fa6e1fcedecc4ff97de32e5320eb45e4d400cd22bed501f88162bb9f95f2db976928ac2a8d9fa4327e77eae63903dcc9cd3054732db755a8450d3be3bb0b_1280.jpg",
    technologies: ["Plotly", "Dash", "APIs"],
    categories: ["viz"],
  },
  {
    title: "News Article Classifier",
    description: "Automated news categorization using transformer models and topic modeling.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Transformers", "spaCy", "LDA"],
    categories: ["nlp"],
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
  OpenCV: "bg-green-100 text-green-800",
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
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my data science projects, from machine learning models to data visualizations
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? "bg-accent text-white hover:bg-accent/90"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="project-card bg-white overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-sm ${
                        technologyColors[tech as keyof typeof technologyColors] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 p-1">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
