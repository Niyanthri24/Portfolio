import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    type: "education",
    title: "BSc(Hons.) Computer Science",
    company: "RV University",
    period: "2022 - Present",
    description:
      "Specializing in Data Science, CGPA: 8.4/10.0. Relevant coursework: Machine Learning, Data Structures, Database Systems.",
    technologies: ["AMEYA", "Research"],
  },
  {
    type: "work",
    title: "Social Media Manager",
    company: "TT Skill",
    period: "October 2024 - Present",
    description:
      "I curate impactful campaigns, design engaging visuals, and create meaningful content that reflects TT Skill's mission.",
    technologies: ["Canva", "Figma", "Marketing"],
  },
  {
    type: "work",
    title: "Data Sorting",
    company: "Volunteer @A ROCHA India",
    period: "March 2025 - April 2025",
    description:
      "Assisted in sorting and analyzing camera trap data to support research on elephant behavior and human-wildlife conflict. Tasks included organizing images by date and location, identifying species, and tagging conflict-prone areas.",
    technologies: ["Excel", "Sorting", "Research"],
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
  AMEYA: "bg-pink-100 text-pink-800",
  Marketing: "bg-yellow-100 text-yellow-800",
  Canva: "bg-blue-100 text-blue-800",
  Figma: "bg-green-100 text-green-800",
  Excel: "bg-orange-100 text-orange-800",
  Sorting: "bg-red-100 text-red-800",
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
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
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {exp.period}
                        </span>
                      </div>
                      <p
                        className={`font-medium mb-2 ${
                          exp.type === "work" ? "text-accent" : "text-green-600"
                        }`}
                      >
                        {exp.company}
                      </p>
                      <p className="text-gray-600 mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 rounded text-xs ${
                              technologyColors[
                                tech as keyof typeof technologyColors
                              ] || "bg-gray-100 text-gray-800"
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
