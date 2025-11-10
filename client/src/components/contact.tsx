import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing data science opportunities, research
            collaborations, or interesting projects.
          </p>
        </div>

        {/* Contact Information + Social Links */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">niyanthrirs@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 95134-66449</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Connect with me card */}
          <Card className="bg-slate-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Connect with me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/niyanthri-r-sridhar/"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Niyanthri24"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.kaggle.com/niyanthrirs"
                  className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                  aria-label="Kaggle"
                >
                  <FaKaggle />
                </a>
                <a
                  href="mailto:niyanthrirs@gmail.com"
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
