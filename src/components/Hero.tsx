import { Star, StarHalf } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline with Logos/Icons */}
        <div className="mb-6">
          <h1 className="text-gray-900 inline-flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
              </svg>
              <span>Google</span>
            </span>
            <span className="text-gray-400">,</span>
            <span className="inline-flex items-center gap-2">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#10A37F"/>
                <path d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm0 4c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 20c-3.315 0-6.232-1.694-7.938-4.266.04-2.633 5.292-4.076 7.938-4.076 2.638 0 7.898 1.443 7.938 4.076C30.232 32.306 27.315 34 24 34z" fill="white"/>
              </svg>
              <span>ChatGPT</span>
            </span>
          </h1>
        </div>

        <h2 className="text-gray-900 mb-6">
          Traffic on Autopilot
        </h2>
        
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Get traffic from Google, ChatGPT, and other search engines on autopilot. Our AI 
          agent will research, write, optimize, and publish articles for you 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="outline" className="gap-2 bg-white">
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
              <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
              <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
              <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
            </svg>
            Continue with Google
          </Button>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
            Start for Free
          </Button>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-gray-700">
              Rated <span className="font-semibold">4.8/5</span>
            </span>
          </div>
          <p className="text-gray-600">
            Generated 10,000+ articles for customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
