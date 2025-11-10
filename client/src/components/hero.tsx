import { Download, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import profileImage from "../images/niyanthri.jpg";
export default function Hero() {
  const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Niyanthri_CV.pdf"; // Correct relative path (served from /public)
  link.download = "Niyanthri_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
                Hi, I'm <span className="text-accent">Niyanthri R Sridhar</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary font-medium">
                Data Science Student & Design Enthusiast
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                4th year Computer Science student specializing in Data Science
                at RV University. Passionate about turning data into actionable
                insights and building intelligent systems.
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
                href="https://www.linkedin.com/in/niyanthri-r-sridhar/"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Niyanthri24"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.kaggle.com/niyanthrirs"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="Kaggle"
              >
                <FaKaggle size={24} />
              </a>
              <a
                href="mailto:niyanthrirs@gmail.com"
                className="text-gray-600 hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={profileImage}
              alt="Niyanthri R Sridhar"
              className="w-80 h-80 rounded-full shadow-2xl object-cover border-8 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
