import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope } from "react-icons/fa";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    smoothScrollTo(href);
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Niyanthri R Sridhar</h3>
            <p className="text-gray-300">
              Data Science student passionate about using technology to solve
              real-world problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/niyanthri-r-sridhar/"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Niyanthri24"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.kaggle.com/niyanthrirs"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Kaggle"
              >
                <FaKaggle size={20} />
              </a>
              <a
                href="mailto:niyanthrirs@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Niyanthri R Sridhar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
