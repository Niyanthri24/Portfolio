import { GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm passionate about leveraging data to solve real-world problems
            and create meaningful impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                As a senior Computer Science student with a specialization in
                Data Science, I've developed a strong foundation in machine
                learning, statistical analysis, and data visualization. My
                academic journey has been complemented by hands-on experience
                through academic and personal projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I'm particularly interested in machine learning applications in
                healthcare and natural language processing. My goal is to pursue
                a career where I can apply cutting-edge data science techniques
                to create positive societal impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <GraduationCap className="text-accent mr-2 h-5 w-5" />
                    Education
                  </h3>
                  <p className="text-gray-700">
                    RV University
                    <br />
                    B.Sc(Hons) Computer Science
                    <br />
                    Specialization in Data Science
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <MapPin className="text-accent mr-2 h-5 w-5" />
                    Location
                  </h3>
                  <p className="text-gray-700">
                    Bangalore, India
                    <br />
                    Open to relocation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-accent to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>CGPA</span>
                    <span className="font-semibold">8.40/10.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects</span>
                    <span className="font-semibold">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages</span>
                    <span className="font-semibold">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Internships</span>
                    <span className="font-semibold">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "NLP",
                    "Computer Vision",
                    "Data Viz",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
