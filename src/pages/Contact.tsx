import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Have a project in mind or want to discuss a potential collaboration? 
              I'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading 
                title="Contact Information" 
                subtitle="Feel free to reach out using any of these methods"
              />
              
              <div className="space-y-6 mt-8">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="eddychristantus@gmail.com" className="text-gray-600 hover:text-teal-600 transition-colors">
                      eddychristantus@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:+2341234567890" className="text-gray-600 hover:text-teal-600 transition-colors">
                      +234 701 013 5914
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">
                      Enugu, Nigeria
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 5pm (WAT)
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Ediekkhan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-teal-600 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHub size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/edikan-okon/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-teal-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://x.com/Ediekkhan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-teal-600 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Common questions about working with me"
            align="center"
          />
          
          <div className="mt-12 space-y-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">What is your typical project process?</h3>
              <p className="text-gray-600">
                My process typically includes discovery, planning, design, development, testing, and deployment phases. 
                I believe in collaborative work and keeping clients informed throughout the project.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">What are your rates?</h3>
              <p className="text-gray-600">
                My rates vary depending on project scope, complexity, and timeline. I offer both hourly and fixed-price 
                options. Contact me with your project details for a custom quote.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and requirements. A simple website might take 2-4 weeks, 
                while a complex web application could take several months. I'll provide a timeline estimate during our initial consultation.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">Do you offer maintenance services?</h3>
              <p className="text-gray-600">
                Yes, I offer maintenance packages to keep your website or application running smoothly. 
                These can include updates, security patches, performance optimization, and content updates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}