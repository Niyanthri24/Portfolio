import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    type: "work",
    title: "Data Science Intern",
    company: "Tesla, Inc.",
    period: "Summer 2023",
    description: "Developed machine learning models for predictive maintenance of manufacturing equipment. Achieved 15% reduction in downtime through anomaly detection algorithms.",
    technologies: ["Python", "Scikit-learn", "AWS"],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "UC Berkeley",
    period: "2021 - 2024",
    description: "Data Science Track, GPA: 3.8/4.0. Relevant coursework: Machine Learning, Statistical Computing, Data Structures, Database Systems.",
    technologies: ["Dean's List", "Research Assistant"],
  },
  {
    type: "work",
    title: "ML Research Assistant",
    company: "UC Berkeley AI Lab",
    period: "Fall 2022 - Present",
    description: "Researching natural language processing applications in healthcare. Co-authored paper on automated medical record analysis submitted to ICML 2024.",
    technologies: ["NLP", "BERT", "Research"],
  },
  {
    type: "work",
    title: "Data Analyst Intern",
    company: "Airbnb",
    period: "Summer 2022",
    description: "Analyzed user engagement data and created interactive dashboards for business stakeholders. Improved booking conversion rates by 8% through A/B testing insights.",
    technologies: ["SQL", "Tableau", "A/B Testing"],
  },
];

const technologyColors = {
  Python: "bg-blue-100 text-blue-800",
  "Scikit-learn": "bg-green-100 text-green-800",
  AWS: "bg-orange-100 text-orange-800",
  "Dean's List": "bg-purple-100 text-purple-800",
  "Research Assistant": "bg-yellow-100 text-yellow-800",
  NLP: "bg-blue-100 text-blue-800",
  BERT: "bg-green-100 text-green-800",
  Research: "bg-purple-100 text-purple-800",
  SQL: "bg-blue-100 text-blue-800",
  Tableau: "bg-green-100 text-green-800",
  "A/B Testing": "bg-orange-100 text-orange-800",
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey through education and professional experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-accent"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  {exp.type === "work" ? (
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Briefcase className="text-white h-4 w-4" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-white h-4 w-4" />
                    </div>
                  )}
                </div>
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 1 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <Card className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <span className="text-sm text-gray-500">{exp.period}</span>
                      </div>
                      <p className={`font-medium mb-2 ${
                        exp.type === "work" ? "text-accent" : "text-green-600"
                      }`}>
                        {exp.company}
                      </p>
                      <p className="text-gray-600 mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 rounded text-xs ${
                              technologyColors[tech as keyof typeof technologyColors] || 
                              "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
