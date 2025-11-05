import { Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'RankKit transformed our online presence. We went from page 5 to the top 3 results for our main keywords in just 4 months. The ROI has been incredible!',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    content: 'The team at RankKit is exceptional. They\'re not just service providers, they\'re strategic partners who genuinely care about our success. Highly recommended!',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, LocalBiz',
    content: 'Our organic traffic increased by 400% in 6 months. The best investment we\'ve made for our business. Their reporting is transparent and the results speak for themselves.',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'David Thompson',
    role: 'VP Marketing, Enterprise Solutions',
    content: 'Professional, knowledgeable, and results-driven. RankKit delivered everything they promised and more. Our lead generation has never been better.',
    rating: 5,
    initials: 'DT',
  },
  {
    name: 'Lisa Martinez',
    role: 'Owner, Creative Agency',
    content: 'Finally, an SEO company that actually delivers! Our rankings improved dramatically and we\'re getting quality leads consistently. Worth every penny.',
    rating: 5,
    initials: 'LM',
  },
  {
    name: 'James Wilson',
    role: 'E-commerce Manager, ShopNow',
    content: 'RankKit helped us scale our e-commerce business to new heights. The increase in organic sales has been phenomenal. Can\'t thank them enough!',
    rating: 5,
    initials: 'JW',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Testimonials
          </Badge>
          <h2 className="text-gray-900 mb-4">
            Loved by Thousands of Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience with RankKit.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-sm mx-auto">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                      
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
