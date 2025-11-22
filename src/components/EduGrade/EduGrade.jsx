const EduGrade = () => {
  return (
    <div
      className="app max-w-full mx-auto"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#000",
        background: "#fff",
      }}
    >
      {/* Top bar */}
      <header className="top-bar bg-black text-[#f0c000] flex justify-between py-[10px] px-[20px] text-sm">
        <div className="contact-info flex gap-4">
          <span>+0 (000) 000 00 00</span>
          <span>info@companyname.com</span>
        </div>
        <div className="auth-links">
          <a className="ml-[10px] text-[#f0c000] no-underline" href="#">
            Register
          </a>
          <a className="ml-[10px] text-[#f0c000] no-underline" href="#">
            Login
          </a>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar flex justify-between items-center px-[20px] py-[15px] bg-white shadow-md">
        <div className="logo text-[24px] font-bold">EDUGRADE</div>
        <ul className="nav-links flex list-none p-0 m-0">
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Event
            </a>
          </li>
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Teachers
            </a>
          </li>
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="no-underline text-black px-[15px] font-medium hover:text-[#f0c000] focus:text-[#f0c000]"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section
        className="hero flex items-center justify-between text-white relative"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          height: "500px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div className="hero-text w-1/2 z-10">
          <h5 className="text-[14px] tracking-[2px] text-[#f0c000]">
            WE ARE HERE TO HELP YOU
          </h5>
          <h1 className="text-[48px] mt-[10px] mb-[10px]">WELCOME TO EDUREAD</h1>
          <p className="text-[16px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            className="bg-[#f0c000] border-none px-[25px] py-[12px] font-bold cursor-pointer text-black rounded-[3px]"
            type="button"
          >
            GET STARTED
          </button>
        </div>

        <div className="hero-image">
          {/* Keeping <img /> as in original so it still renders if background fails */}
          <img src="/hero.png" alt="hero" className="max-w-[420px] hidden" />
        </div>
      </section>

      {/* Features */}
      <section className="features bg-black text-white p-[60px] px-[40px] text-center">
        <h2 className="text-[28px] mb-[30px]">BEST PLATFORM TO LEARN EVERYTHING</h2>
        <div className="feature-cards flex justify-center gap-[20px]">
          <div className="card bg-[#f0c000] p-[20px] rounded-[8px] text-black font-medium w-[200px] shadow-md">
            Industry Professional UX Writers
          </div>
          <div className="card bg-[#f0c000] p-[20px] rounded-[8px] text-black font-medium w-[200px] shadow-md">
            Try Before You Buy
          </div>
          <div className="card bg-[#f0c000] p-[20px] rounded-[8px] text-black font-medium w-[200px] shadow-md">
            Dedicated Account Managers
          </div>
        </div>
      </section>

      {/* About & Events */}
      <section className="about-events flex justify-between items-center p-[60px] px-[40px]">
        <div className="about w-1/2">
          <h3 className="text-[32px] mb-[20px]">
            Welcome to <br /> Write My Disso
          </h3>
          <p className="text-[15px] text-[#333333] leading-[1.5]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
          <button
            className="mt-[20px] bg-[#f0c000] border-none px-[20px] py-[10px] font-bold cursor-pointer text-black rounded-[3px]"
            type="button"
          >
            READ MORE
          </button>
        </div>

        <div className="events w-[45%] bg-[#f0c000] p-[20px] rounded-[8px] text-black">
          <h3 className="text-[22px] mb-[15px]">UPCOMING EVENTS</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-[15px] border-b-[1px] border-black pb-[10px]">
              <strong>2 December 2019</strong>
              <p>
                Sed ut perspiciatis unde omnis iste.
                <br />
                10:00 AM - 3:00 PM • Re Auditorium
              </p>
            </li>
            <li className="mb-[15px] border-b-[1px] border-black pb-[10px]">
              <strong>2 December 2019</strong>
              <p>
                Lorem ipsum gravida nibh vel.
                <br />
                10:00 AM - 3:00 PM • Re Auditorium
              </p>
            </li>
            <li className="mb-[15px] border-b-[1px] border-black pb-[10px]">
              <strong>2 December 2019</strong>
              <p>
                Morbi accumsan ipsum velit.
                <br />
                10:00 AM - 3:00 PM • Re Auditorium
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Apply Section */}
      <section className="apply-section flex justify-between bg-white p-[60px] px-[40px]">
        <div className="apply-card w-[48%] bg-[#f0c000] p-[30px] rounded-[6px] text-black">
          <h4 className="text-[20px] mb-[10px]">APPLY FOR FALL 2019</h4>
          <p className="text-[14px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <button
            className="bg-black text-white border-none px-[20px] py-[10px] font-bold rounded-[3px] cursor-pointer"
            type="button"
          >
            Apply Now
          </button>
        </div>

        <div className="apply-card w-[48%] bg-[#f0c000] p-[30px] rounded-[6px] text-black">
          <h4 className="text-[20px] mb-[10px]">APPLY FOR SCHOLARSHIP</h4>
          <p className="text-[14px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <button
            className="bg-black text-white border-none px-[20px] py-[10px] font-bold rounded-[3px] cursor-pointer"
            type="button"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-[40px] text-center">
        <h3 className="text-[24px] font-bold">Featured Courses</h3>
        {/* Add your featured course cards here */}
      </footer>
    </div>
  );
};

export default EduGrade;
