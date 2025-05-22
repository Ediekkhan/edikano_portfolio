import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Download, CheckCircle2 } from 'lucide-react';
import profilepng from "../asset/WhatsApp Image 2025-05-18 at 17.16.31.jpeg"

// Skills data
const skills = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js"] },
  { category: "UI/Design", items: ["Tailwind CSS", "SASS/SCSS", "Styled Components", "Figma", "Adobe XD"] },
  { category: "Backend", items: ["Node.js", "Express", "RESTful APIs", "GraphQL"] },
  { category: "Tools", items: ["Git", "Webpack", "Vite", "Jest", "Docker", "CI/CD"] },
];

// Timeline data
const timeline = [
  
  {
    year: "2024 - 2025",
    title: "Frontend Developer",
    company: "AlozinoTech Solutions",
    description: "Developed scalable frontend architecture and implemented UI components for enterprise applications."
  },
  {
    year: "2023 ",
    title: "UI/UX Developer",
    company: "The Scarlet Store",
    description: "Designed and implemented user interfaces for various clients, focusing on Luxury outfits"
  },
  {
    year: "2022 - 2023",
    title: "Frontend Developer",
    company: "AfricInnovate Tech",
    description: "Collaborating with a team of 5 developers to build responsive and accessible web applications for clients across Africa."
  },
  {
    year: "2019 - 2021",
    title: "Web Content Manager",
    company: "Footballtelegram.com",
    description: "Designed website layout using WordPress and custom CSS. Managed weekly blog updates and visuals."
  }
];

export default function About() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                I'm Edikan Okon, a passionate frontend developer and UI/UX enthusiast with over 3 years of experience 
                building beautiful, functional, and user-centered digital experiences.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Based in Enugu, Nigeria, I've worked with a range of clients from startups to large corporations, 
                helping them achieve their business goals through thoughtful and strategic design and development.
              </p>
              <Button href="/resume.pdf" variant="primary" className="flex items-center">
                <Download size={18} className="mr-2" /> Download Resume
              </Button>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={profilepng}
                  alt="Edikan Okon" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-gray-900">Edikan Okon</p>
                <p className="text-teal-600">Frontend Developer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            title="My Professional Journey" 
            subtitle="A timeline of my professional experience and growth"
            align="center"
          />
          
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 pl-6 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <span className="text-sm font-semibold text-teal-600 block mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm mb-3">{item.company}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            title="Skills & Expertise" 
            subtitle="Technologies and tools I work with"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 size={16} className="text-teal-500 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Beyond The Code</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When I'm not coding or designing, you can find me exploring photography, reading design books, 
                or contributing to open-source projects. I believe in continuous learning and staying up-to-date 
                with the latest technologies and design trends.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm passionate about mentoring junior developers and have been actively involved in local tech communities, 
                giving talks and workshops on frontend development and UI/UX design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach to projects combines technical expertise with an eye for design and a focus on creating 
                exceptional user experiences. I believe that the best digital products are those that are not only 
                functional but also intuitive and enjoyable to use.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="aspect-square rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Photography hobby" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="aspect-square rounded-lg overflow-hidden row-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Reading books" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="aspect-square rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <img 
                  src="https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Coding session" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            I'm always open to discussing new projects or opportunities.
          </p>
          <Button 
            to="/contact" 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-teal-600"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}