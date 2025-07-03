import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FaPython, 
  FaRProject, 
  FaDatabase, 
  FaBrain, 
  FaFire, 
  FaChartLine, 
  FaTable, 
  FaChartBar, 
  FaChartArea, 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaCertificate
} from "react-icons/fa";

const technicalSkills = [
  { name: "Python", percentage: 95 },
  { name: "Machine Learning", percentage: 90 },
  { name: "SQL & Databases", percentage: 85 },
  { name: "Data Visualization", percentage: 88 },
  { name: "Statistical Analysis", percentage: 82 },
  { name: "Deep Learning", percentage: 80 },
];

const tools = [
  { name: "Python", icon: FaPython, color: "text-blue-600" },
  { name: "R", icon: FaRProject, color: "text-blue-700" },
  { name: "SQL", icon: FaDatabase, color: "text-orange-600" },
  { name: "TensorFlow", icon: FaBrain, color: "text-red-600" },
  { name: "PyTorch", icon: FaFire, color: "text-orange-500" },
  { name: "Scikit-learn", icon: FaChartLine, color: "text-green-600" },
  { name: "Pandas", icon: FaTable, color: "text-blue-500" },
  { name: "Matplotlib", icon: FaChartBar, color: "text-purple-600" },
  { name: "Plotly", icon: FaChartArea, color: "text-teal-600" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "TensorFlow Developer Certificate",
  "Google Data Analytics Certificate",
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.percentage}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tools & Technologies</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <Card key={tool.name} className="bg-slate-50">
                    <CardContent className="text-center p-4">
                      <IconComponent className={`text-3xl ${tool.color} mb-2 mx-auto`} />
                      <p className="font-medium text-gray-900">{tool.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Certifications */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Certifications</h4>
                <ul className="space-y-2 text-gray-700">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center">
                      <FaCertificate className="text-accent mr-2" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
