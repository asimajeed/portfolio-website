import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Saiyed Asim Majeed</h3>
            <p className="text-gray-300 mb-4">
              Software Developer specializing in AI & Web Development. 
              Creating innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>asimmajeed202@gmail.com</p>
              <p>+92 3362462248</p>
              <p>Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Saiyed Asim Majeed
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}