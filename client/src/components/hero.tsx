import { Download, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function Hero() {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a file download
    console.log("Download resume functionality would be implemented here");
  };

  const handleViewProjects = () => {
    smoothScrollTo("#projects");
  };

  return (
    <section id="home" className="pt-20 pb-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-accent">Alex Chen</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary font-medium">
                Data Science Student & Machine Learning Enthusiast
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                4th year Computer Science student specializing in Data Science at UC Berkeley. 
                Passionate about turning data into actionable insights and building intelligent systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                onClick={handleViewProjects}
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3"
                size="lg"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://kaggle.com"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="Kaggle"
              >
                <FaKaggle size={24} />
              </a>
              <a
                href="mailto:alex.chen@berkeley.edu"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
              alt="Alex Chen professional headshot"
              className="w-80 h-80 rounded-full shadow-2xl object-cover border-8 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
