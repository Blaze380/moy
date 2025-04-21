import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  date: string;
  avatar: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#1A1A1A] p-8 rounded-2xl">
    <p className="text-gray-400 mb-6">{testimonial.content}</p>
    <div className="flex items-center">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-semibold">{testimonial.name}</h4>
        <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
        <p className="text-sm text-gray-500 mt-1">{testimonial.date}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "John Smith",
      role: "CEO",
      company: "TechStartup",
      content: "LandFree has been instrumental in transforming our online presence. Their team managed to revamp our entire website, making it more modern, user-friendly, stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
      date: "20 January 2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
    },
    {
      name: "Jason Williams",
      role: "Head Designer",
      company: "CreativeCo",
      content: "Our website was slow and buggy, costing us sales. LandFree fixed the code, optimized everything, and added amazing features that customers love. We're scaling!",
      date: "16 January 2024",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=60"
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
      <span className="text-[#CCFF00] text-sm uppercase tracking-wider bg-[#0f0f0f]" style={{ border: '1px solid rgb(30, 30, 30)', padding: '10px', borderRadius: '200px' }}>TESTIMONIALS</span>
        <h2 className="text-3xl mt-4">What our clients say about us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}