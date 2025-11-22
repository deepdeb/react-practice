import profile1 from "../../assets/images/profile images/image1.jpg";
import profile2 from "../../assets/images/profile images/image2.jpg";
import profile3 from "../../assets/images/profile images/image3.jpg";
import profile4 from "../../assets/images/profile images/image4.jpg";
import profile5 from "../../assets/images/profile images/image5.jpg";
import profile6 from "../../assets/images/profile images/image6.jpg";
import profile7 from "../../assets/images/profile images/image7.jpg";
import yoga2 from "../../assets/images/yoga6.jpg";

const ExhaleLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf6] to-[#f3f3ed] text-[#1f1f1f] font-poppins">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a]">Breath of Balance</h2>

          <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#" className="hover:text-black transition">Classes</a>
            <a href="#" className="hover:text-black transition">Pricing</a>
            <a href="#" className="hover:text-black transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border-2 border-[#333] rounded-md font-medium hover:bg-[#333] hover:text-white transition">Sign In</button>

            {/* mobile nav toggle placeholder (if you add one) */}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Explore Yourself<br />Explore Yoga</h1>
          <p className="text-lg text-[#444] mb-6">We share the transformative power of yoga with every mind, every body, everywhere</p>

          <div className="flex items-center gap-6 flex-wrap">
            <button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#6c63ff] to-[#b76df2] text-white shadow-lg transform hover:-translate-y-1 transition">Join Now</button>

            <div className="flex items-center gap-6 mt-4 lg:mt-0">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[profile1, profile2, profile3, profile4, profile5].map((img, i) => (
                    <img key={i} src={img} alt={`user-${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-[0_0_0_6px_#e0e0e0] object-cover" />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold">3.5k+</p>
                <p className="text-xs text-gray-600">More than 3.5k members are connected with us</p>
              </div>

              <a href="#" className="text-sm font-medium underline text-[#6c63ff] hover:text-[#4d44d1]">Register Now</a>
            </div>
          </div>
        </div>

        <div className="lg:flex-1 relative w-full max-w-lg">
          <img src={yoga2} alt="yoga" className="w-full rounded-2xl shadow-xl object-cover" />

          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-xl font-bold text-sm shadow-md text-center">
            80%<br /><span className="font-normal text-xs text-gray-600">Mind Progression</span>
          </div>
        </div>

        {/* STATS - on large screens show as vertical column, on small screens arrange in grid */}
        <div className="w-full lg:w-auto gap-6 mt-6 lg:mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 bg-transparent">
            <div className="min-w-[120px] text-center">
              <div className="text-2xl font-extrabold text-[#6c63ff]">50+</div>
              <div className="text-sm font-semibold">Live Session</div>
            </div>

            <div className="min-w-[120px] text-center">
              <div className="text-2xl font-extrabold text-[#6c63ff]">3.5k+</div>
              <div className="text-sm font-semibold">Lives Impact</div>
            </div>

            <div className="min-w-[120px] text-center">
              <div className="text-2xl font-extrabold text-[#6c63ff]">70%</div>
              <div className="text-sm font-semibold">Engagement Rate</div>
            </div>

            <div className="min-w-[120px] text-center">
              <div className="text-2xl font-extrabold text-[#6c63ff]">100%</div>
              <div className="text-sm font-semibold">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f8f8f8] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:-translate-y-2 transition">
            <p className="italic mb-4 text-[#333]">“First I’ve paid for online yoga program. I can feel my whole approach to life changing by utilising all of the program content”</p>
            <div className="flex items-center gap-4">
              <img src={profile6} alt="Bessie Cooper" className="w-11 h-11 rounded-full object-cover border-2 border-gray-200" />
              <div>
                <div className="font-semibold">Bessie Williams</div>
                <div className="text-sm text-gray-600">California</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:-translate-y-2 transition">
            <p className="italic mb-4 text-[#333]">“Absolutely love it so far! The next stage for yoga. The themes are meaningful not silly. Instructors are so helpful!”</p>
            <div className="flex items-center gap-4">
              <img src={profile7} alt="Anna Smith" className="w-11 h-11 rounded-full object-cover border-2 border-gray-200" />
              <div>
                <div className="font-semibold">Brett Smith</div>
                <div className="text-sm text-gray-600">New York</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhaleLanding;
