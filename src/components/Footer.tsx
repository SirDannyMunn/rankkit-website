import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Separator } from './ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">R</span>
              </div>
              <span className="text-xl text-white">RankKit</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses to achieve top search rankings through 
              AI-powered SEO solutions and expert strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Keyword Research</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Content Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Link Building</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Technical SEO</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer with Accordion */}
        <div className="md:hidden mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white">R</span>
            </div>
            <span className="text-xl text-white">RankKit</span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services">
              <AccordionTrigger className="text-white">Services</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">SEO Optimization</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Keyword Research</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Content Marketing</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Link Building</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Technical SEO</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="company">
              <AccordionTrigger className="text-white">Company</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Partners</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger className="text-white">Support</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-center">
          <p className="text-gray-400">
            © 2025 RankKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
