import { ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you! We\'ll be in touch soon.');
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 text-white">
          <h2 className="mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses that trust RankKit to grow 
            their online presence. Start your free trial today and see the difference.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900 placeholder:text-gray-500"
                required
              />
              <Button type="submit" variant="secondary" className="gap-2 shrink-0">
                <Mail className="w-4 h-4" />
                Get Started
              </Button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="pt-8 border-t border-blue-500">
            <p className="text-sm text-blue-100">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
