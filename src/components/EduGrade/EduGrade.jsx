const navLinks = [
  "Home",
  "Courses",
  "Event",
  "Pages",
  "Teachers",
  "Shop",
  "Blog",
  "Contact"
]


const EduGrade = () => {
  return (
    <div className="font-sans bg-white">



      {/* Top black bar */}
      <header className="flex items-center px-5 py-2 bg-black text-white text-sm">
        <div className="flex gap-4">
          <span>+0 (000) 000 00 00</span>
          <span>info@companyname.com</span>
        </div>
      </header>




      {/* Navbar */}
      <nav className="shadow bg-white">
        <div className="px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between h-16">

              {/* heading  */}
              <div className="text-2xl font-bold">EDUGRADE <span className='text-yellow-400'>.</span> </div>


              <div className="flex items-center gap-8">
                {/* navlinks  */}
                <ul className="flex list-none p-0 m-0 gap-6">
                  {navLinks.map((link, index) => (
                    <li key={index}><a href="#" className="text-gray-700 hover:text-yellow-400 transition-colors font-medium">{link}</a></li>
                  ))}
                </ul>


                {/* authlinks  */}
                <div className="flex items-center gap-4">
                  <a href="#" className="text-gray-700 font-medium hover:text-black transition-colors">Login</a>
                  <a href="#" className="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-500 transition-colors">Register</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>





      {/* Hero */}
      <section className="bg-gray-50">
        <div className="px-6 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

              {/* text  */}
              <div className="w-full lg:max-w-xl space-y-5 text-center lg:text-left">
                <h5 className="text-sm tracking-widest text-yellow-400 font-medium">WE ARE HERE TO HELP YOU</h5>
                <h1 className="text-4xl font-bold">WELCOME TO EDUGRADE</h1>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <button type="button" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-500 transition-colors w-full lg:w-auto">GET STARTED</button>
              </div>

              {/* image */}
              <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg" alt="image1" className='w-full max-w-md' />
              </div>

            </div>
          </div>
        </div>
      </section>






      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold">250+</h3>
              <p className="text-gray-600">Courses</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold">120+</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>

          </div>
        </div>
      </section>





      {/* Features */}
      <section className='text-center py-16 px-6 lg:px-16'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-2xl lg:text-3xl font-bold text-center mb-10'>BEST PLATFORM TO LEARN EVERYTHING</h2>
          <div className='flex justify-center flex-col lg:flex-row gap-6'>
            <div className='bg-yellow-400 text-black p-6 rounded-lg font-medium w-full lg:flex-1 flex items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-300'>Industry Professional UX Writers</div>
            <div className='bg-yellow-400 text-black p-6 rounded-lg font-medium w-full lg:flex-1 flex items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-300'>Try Before You Buy</div>
            <div className='bg-yellow-400 text-black p-6 rounded-lg font-medium w-full lg:flex-1 flex items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-300'>Dedicated Account Managers</div>
          </div>
        </div>
      </section>





      {/* About & Events */}
      <section className='px-6 lg:px-16 py-16'>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* about/welcome div  */}
            <div className='w-full lg:w-7/12 space-y-5'>
              <h3 className='text-3xl font-bold'>
                Welcome to <br /> Write My Disso
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
              <button type="button" className='bg-yellow-400 text-black font-bold py-2 px-5 rounded hover:bg-yellow-500 transition-colors'>READ MORE</button>
            </div>

            {/* upcoming events  */}
            <div className='w-full lg:w-5/12 bg-yellow-400 p-6 rounded-lg'>
              <h3 className='text-xl! font-bold! mb-4'>UPCOMING EVENTS</h3>
              <ul className='list-none p-0 m-0 space-y-4'>
                <li className='pb-4 border-b border-black/20 last:border-b-0'>
                  <strong className='block font-semibold mb-1 text-lg text-black' >2 December 2019</strong>
                  <p className="text-sm leading-relaxed">
                    Sed ut perspiciatis unde omnis iste.
                    <br />
                    10:00 AM - 3:00 PM • Re Auditorium
                  </p>
                </li>
                <li className='pb-4 border-b border-black/20 last:border-b-0'>
                  <strong className='block font-semibold mb-1 text-lg text-black' >2 December 2019</strong>
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum gravida nibh vel.
                    <br />
                    10:00 AM - 3:00 PM • Re Auditorium
                  </p>
                </li>
                <li className='pb-4 border-b border-black/20 last:border-b-0'>
                  <strong className='block font-semibold mb-1 text-lg text-black' >2 December 2019</strong>
                  <p className="text-sm leading-relaxed">
                    Morbi accumsan ipsum velit.
                    <br />
                    10:00 AM - 3:00 PM • Re Auditorium
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>




      {/* Apply Section */}
      <section className="px-6 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="bg-yellow-400 text-black p-8 rounded-lg w-full lg:w-1/2 flex flex-col justify-between">
              <h4 className="text-lg font-bold mb-4">APPLY FOR FALL 2019</h4>
              <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <button type="button" className="bg-black text-white font-bold px-5 py-2 rounded hover:bg-gray-800 transition-colors duration-300 cursor-pointer">Apply Now</button>
            </div>

            <div className="bg-yellow-400 text-black p-8 rounded-lg w-full lg:w-1/2 flex flex-col justify-between">
              <h4 className="text-lg font-bold mb-4">APPLY FOR SCHOLARSHIP</h4>
              <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <button type="button" className="bg-black text-white font-bold px-5 py-2 rounded hover:bg-gray-800 transition-colors duration-300 cursor-pointer">Apply Now</button>
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="px-10 py-12 text-center bg-gray-100">
        <h3 className="text-xl font-bold">Featured Courses</h3>
      </footer>
    </div>
  );
};

export default EduGrade;
