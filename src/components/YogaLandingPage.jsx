import React, { useState } from 'react'

// Original imports with same file names
import yogaLogo from '../assets/logos/logo.jpeg'
import yogaImg2 from '../assets/images/yoga2.jpg'
import yogaImg3 from '../assets/images/yoga3.jpg'
import yogaImg4 from '../assets/images/yoga4.jpg'
import profile1 from '../assets/images/profile images/image1.jpg'
import profile2 from '../assets/images/profile images/image2.jpg'
import profile3 from '../assets/images/profile images/image3.jpg'
import profile4 from '../assets/images/profile images/image4.jpg'
import profile5 from '../assets/images/profile images/image5.jpg'
import profile6 from '../assets/images/profile images/image6.jpg'
import profile7 from '../assets/images/profile images/image7.jpg'
import profile8 from '../assets/images/profile images/image8.jpg'

const testimonials = [
  {
    img: profile1,
    name: "Anika T.",
    role: "Copywriter",
    quote: "Raj Yoga's morning sessions transformed my daily routine. I'm more focused and calm.",
  },
  {
    img: profile2,
    name: "Natasha S.",
    role: "Dentist",
    quote: "The instructors here understand the true essence of yoga. I love the vibe.",
  },
  {
    img: profile3,
    name: "Brigette M.",
    role: "Health Blogger",
    quote: "I've practiced yoga at many places, but Raj Yoga's approach is truly holistic.",
  },
  {
    img: profile4,
    name: "Emma R.",
    role: "Software Engineer",
    quote: "Practicing yoga here helped relieve my back pain from long sitting hours.",
  },
  {
    img: profile5,
    name: "Sara D.",
    role: "Yoga Learner",
    quote: "I love the supportive community. It's my favorite part of the week!",
  },
  {
    img: profile6,
    name: "Olivia J.",
    role: "Freelancer",
    quote: "Raj Yoga is peaceful and energizing. A perfect combo!",
  },
  {
    img: profile7,
    name: "Lina K.",
    role: "Dance Instructor",
    quote: "Blending yoga with music sessions here is a treat for the soul.",
  },
  {
    img: profile8,
    name: "Emily R.",
    role: "Fashion Designer",
    quote: "Among the yoga communities I've been in, Raj Yoga stands out...",
  }
];

const YogaLandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(testimonials.length - 1)
  const activeTestimonial = testimonials[activeIndex]

  return (
    <div className="font-[Poppins] text-[#333333] leading-[1.6] overflow-x-hidden">

      {/* Modern Header */}
      <header className="flex justify-between items-center py-6 px-[5%] w-full fixed top-0 left-0 z-1000 bg-white/95 backdrop-blur-[10px] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={yogaLogo} alt="Raj Yoga Logo" />
          <span className="font-bold text-[1.25rem] text-[#5a4fcf]">RAJ YOGA</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-[#555555] font-medium text-[0.95rem] relative hover:text-[#5a4fcf]">About Us</a>
          <a href="#reviews" className="text-[#555555] font-medium text-[0.95rem] relative hover:text-[#5a4fcf]">Reviews</a>
          <a href="#trainers" className="text-[#555555] font-medium text-[0.95rem] relative hover:text-[#5a4fcf]">Trainers</a>
          <a href="#classes" className="text-[#555555] font-medium text-[0.95rem] relative hover:text-[#5a4fcf]">Classes</a>
          <a href="#join" className="bg-[#5a4fcf] text-white px-6 py-3 rounded-4xl font-medium text-[0.95rem] shadow-[0_4px_15px_rgba(90,79,207,0.3)] hover:bg-[#4a3fb8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(90,79,207,0.4)] transition-all">Join Us</a>
        </nav>

        <button className="md:hidden bg-transparent border-0 cursor-pointer p-2 flex flex-col justify-center" aria-label="menu">
          <span className="block w-6 h-0.5 bg-[#5a4fcf] my-1 transition-all"></span>
          <span className="block w-6 h-0.5 bg-[#5a4fcf] my-1 transition-all"></span>
          <span className="block w-6 h-0.5 bg-[#5a4fcf] my-1 transition-all"></span>
        </button>
      </header>

      {/* Sleek Hero Section */}
      <section className="flex min-h-screen pt-24 flex-col md:flex-row">
        <div className="flex-1 p-10 md:p-20 flex flex-col justify-center">
          <span className="text-[0.9rem] font-semibold text-[#5a4fcf] uppercase tracking-[1px] mb-4">Mind-Body-Soul Balance</span>
          <h1 className="font-bold text-[3.5rem] leading-[1.2] mb-6">Achieve <span className="text-[#5a4fcf] relative">balance</span> in mind, body, and soul.</h1>
          <style>{`/* underline highlight for hero span */ .hero-span-after::after{}`}</style>
          <p className="text-[1.1rem] text-[#666666] max-w-125 mb-10">Our holistic approach combines ancient wisdom with modern techniques to help you find your center.</p>
          <div className="flex gap-4">
            <a href="#classes" className="bg-[#5a4fcf] text-white px-8 py-4 rounded-full font-medium text-[1rem] shadow-[0_4px_15px_rgba(90,79,207,0.3)] hover:bg-[#4a3fb8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(90,79,207,0.4)] transition-all">Start Today</a>
            <a href="#about" className="bg-transparent text-[#5a4fcf] px-8 py-4 rounded-full font-medium text-[1rem] border border-[#5a4fcf] hover:bg-[#eee9ff] transition-all">Learn More</a>
          </div>
        </div>
        <div className="flex-1 bg-cover bg-center relative min-h-100 md:min-h-0" style={{ backgroundImage: `url(${yogaImg2})` }}>
        </div>
      </section>

      {/* Enhanced Feature Cards */}
      <section className="py-24 px-[5%] bg-[#f9f9ff]">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.9rem] font-semibold text-[#5a4fcf] uppercase tracking-[1px] mb-4">Our Benefits</span>
          <h2 className="text-[2.5rem] font-bold">Transform Your Practice</h2>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all hover:transform hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <div className="h-62.5 bg-cover bg-center" style={{ backgroundImage: `url(${yogaImg3})` }}></div>
            <div className="p-6">
              <h3 className="text-[1.5rem] mb-3 text-[#333333]">Improved Flexibility</h3>
              <p className="text-[#666666] mb-6">Gently increase your range of motion with guided poses and stretches.</p>
              <a href="#" className="inline-flex items-center text-[#5a4fcf] font-medium no-underline transition-all">View video <span className="ml-2 transition-transform">→</span></a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all hover:transform hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            <div className="h-62.5 bg-cover bg-center" style={{ backgroundImage: `url(${yogaImg4})` }}></div>
            <div className="p-6">
              <h3 className="text-[1.5rem] mb-3 text-[#333333]">Stress Reduction</h3>
              <p className="text-[#666666] mb-6">Learn breathing techniques to calm your mind and reduce anxiety.</p>
              <a href="#" className="inline-flex items-center text-[#5a4fcf] font-medium no-underline transition-all">View video <span className="ml-2 transition-transform">→</span></a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl overflow-hidden transition-all bg-[#5a4fcf] text-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="h-62.5 bg-cover bg-center" style={{ backgroundImage: `url(${yogaImg2})` }}></div>
            <div className="p-6">
              <h3 className="text-[1.5rem] mb-3">Join Our Community</h3>
              <p className="mb-6">Experience the power of group energy in our welcoming classes.</p>
              <a href="#" className="inline-block bg-white text-[#5a4fcf] px-6 py-3 rounded-4xl font-medium transition-all hover:bg-[#f0f0ff]">Get started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Testimonial Section */}
      <section className="py-24 px-[5%] relative" id="reviews">
        <div className="max-w-300 mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[0.9rem] font-semibold text-[#5a4fcf] uppercase tracking-[1px] mb-4">Voices of Change</span>
            <h2 className="text-[2.5rem] font-bold mb-4">Student Experiences</h2>
            <p className="text-[#666666] max-w-150 mx-auto">See how our members have transformed their lives through yoga.</p>
          </div>

          <div className="flex items-center gap-12 mt-16 flex-col md:flex-row">
            <div className="flex-1 grid grid-cols-3 gap-6 order-2 md:order-1" style={{minWidth:0}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} onClick={() => setActiveIndex(index)} className={`w-full pt-[100%] relative rounded-full overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all cursor-pointer ${index === activeIndex ? 'scale-[1.05]' : ''}`}>
                  <img src={testimonial.img} alt={`Student ${index + 1}`} className="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="flex-1 bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] order-1 md:order-2 relative max-w-full">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                <img src={activeTestimonial.img} alt={activeTestimonial.name} className="w-full h-full object-cover" />
              </div>
              <blockquote className="text-[1.1rem] leading-[1.8] text-[#555555] mb-6 relative">{activeTestimonial.quote}</blockquote>
              <div className="font-bold text-[#333333]">{activeTestimonial.name}<span className="block font-normal text-[0.9rem] text-[#777777] mt-1">{activeTestimonial.role}</span></div>
              <div className="absolute -top-2 left-8 text-[5rem] text-[rgba(90,79,207,0.1)] font-serif">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-16 px-[5%]">
        <div className="flex flex-wrap justify-around mb-12">
          <div className="flex items-center gap-3 mb-6">
            <img src={yogaLogo} alt="Raj Yoga" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-[1.25rem]">RAJ YOGA</span>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="min-w-37.5">
              <h4 className="text-[1.1rem] mb-5 text-white">About</h4>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Our Story</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Teachers</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Philosophy</a>
            </div>
            <div className="min-w-37.5">
              <h4 className="text-[1.1rem] mb-5 text-white">Classes</h4>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Schedule</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Pricing</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Workshops</a>
            </div>
            <div className="min-w-37.5">
              <h4 className="text-[1.1rem] mb-5 text-white">Connect</h4>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Contact</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Instagram</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Facebook</a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-[#bbbbbb] text-[0.9rem]">© {new Date().getFullYear()} Raj Yoga. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default YogaLandingPage;
