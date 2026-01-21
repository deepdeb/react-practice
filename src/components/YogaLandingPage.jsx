import { useState } from 'react'

// Original imports with same file names
import yogaLogo from '../assets/logos/logo.png'
const yogaImg2 = 'https://images.pexels.com/photos/8436842/pexels-photo-8436842.jpeg'
const yogaImg3 = 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1200&q=80'
const yogaImg4 = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'

// Testimonial profile images
const profile1 = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
const profile2 = 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80'
const profile3 = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80'
const profile4 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
const profile5 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
const profile6 = 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&w=400&q=80'
const profile7 = 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80'
const profile8 = 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80'

const testimonials = [
  {
    img: profile1,
    name: "Anika T.",
    role: "Copywriter",
    quote: "Raj Yoga's morning sessions transformed my daily routine. I'm more focused and calm.",
  },
  {
    img: profile2,
    name: "Denver S.",
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
    name: "Eric R.",
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
    name: "Chris J.",
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


const instructors = [
  {
    img: 'https://images.pexels.com/photos/6648534/pexels-photo-6648534.jpeg',
    name: "Ivan Carter",
    specialization: "Hatha & Ashtanga Specialist",
    badge: "500+ hours certified",
    description: "With 8 years of teaching experience, Ivan focuses on alignment and breath awareness.",
    tags: ["Beginners", "Advanced"]
  },
  {
    img: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=600&q=80',
    name: "Monica Alexandro",
    specialization: "Kundalini & Meditation",
    badge: "Meditation Expert",
    description: "Monica combines traditional yoga with modern mindfulness techniques for holistic wellness.",
    tags: ["Meditation", "All Levels"]
  },
  {
    img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=600&q=80',
    name: "Maya Reddy",
    specialization: "Vinyasa & Restorative Yoga",
    badge: "RYT Certified",
    description: "Maya's healing approach helps students find balance through gentle flows and restorative poses.",
    tags: ["Therapeutic", "Women's Health"]
  }
]


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


      {/* Expert Instructors Section */}
      <section className="py-24 px-[5%] bg-white" id="trainers">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[0.9rem] font-semibold text-[#5a4fcf] uppercase tracking-[1px] mb-4">Our Guides</span>
            <h2 className="text-[2.5rem] font-bold mb-4">Meet Our Instructors</h2>
            <p className="text-[#666666] max-w-150 mx-auto">Learn from certified yoga experts with years of experience and deep spiritual knowledge.</p>
          </div>

          <div className="grid gap-8 mb-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Instructor cards mapped from data */}
            {instructors.map((instructor, index) => (
              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all hover:transform hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                <div className="h-72 relative overflow-hidden">
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[#5a4fcf] font-medium text-sm">{instructor.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[1.5rem] font-bold mb-1 text-[#333333]">{instructor.name}</h3>
                  <p className="text-[#5a4fcf] font-medium mb-4">{instructor.specialization}</p>
                  <p className="text-[#666666] mb-6">{instructor.description}</p>
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-[#5a4fcf] font-medium text-sm hover:underline">View schedule</a>
                    <div className="flex gap-2">
                      {instructor.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-[#f0f0ff] text-[#5a4fcf] px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Team CTA Card */}
          <div className="rounded-2xl overflow-hidden transition-all bg-linear-to-br from-[#5a4fcf] to-[#8a7cff] text-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative">
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)', opacity: 0.2 }}></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">+</span>
              </div>
              <h3 className="text-[1.5rem] font-bold mb-3">Join Our Team</h3>
              <p className="mb-6 opacity-90">Passionate about yoga? We're always looking for dedicated instructors.</p>
              <a href="#" className="inline-block bg-white text-[#5a4fcf] px-6 py-3 rounded-4xl font-medium transition-all hover:bg-[#f0f0ff]">Apply Now</a>
            </div>
          </div>
        </div>
      </section>


      {/* Modern Testimonial Section */}
      <section className="py-24 px-[5%] relative bg-[#f9f9ff]" id="reviews">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[0.9rem] font-semibold text-[#5a4fcf] uppercase tracking-[1px] mb-4">Voices of Change</span>
            <h2 className="text-[2.5rem] font-bold mb-4">Student Experiences</h2>
            <p className="text-[#666666] max-w-150 mx-auto">See how our members have transformed their lives through yoga.</p>
          </div>

          <div className="flex items-center gap-12 mt-16 flex-col lg:flex-row">
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-8 order-2 md:order-1">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative group cursor-pointer transition-all duration-500 ease-in-out aspect-square rounded-full overflow-hidden ${isActive ? 'scale-110 z-10 ring-4 ring-[#5a4fcf] ring-offset-4 shadow-xl' : 'scale-100 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 shadow-md'}`}
                  >
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                );
              })}
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
            <div className='w-10 h-10 overflow-hidden'>
              <img src={yogaLogo} alt="Raj Yoga" className="w-full scale-110 rounded-lg object-cover" />
            </div>
            <span className="font-bold text-[1.25rem]">RAJ YOGA</span>
          </div>

          <div className="flex flex-wrap gap-20 md:gap-30">
            <div className="">
              <h4 className="text-[1.1rem] mb-5 text-white">About</h4>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Our Story</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Teachers</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Philosophy</a>
            </div>
            <div className="">
              <h4 className="text-[1.1rem] mb-5 text-white">Classes</h4>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Schedule</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Pricing</a>
              <a className="block text-[#bbbbbb] no-underline mb-3 hover:text-[#5a4fcf]">Workshops</a>
            </div>
            <div className="">
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
