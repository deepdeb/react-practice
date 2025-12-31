import React from 'react';
import {
  Facebook, Instagram, Youtube, Phone, Search,
  Briefcase, Mountain, Building2, Landmark, Palmtree, Tent
} from 'lucide-react';

const Journeya = () => {
  const tourTypes = [
    { name: "Wildlife Tour", count: 4, price: 440, icon: <Briefcase size={32} /> },
    { name: "Adventure Tour", count: 5, price: 880, icon: <Mountain size={32} /> },
    { name: "City Tour", count: 10, price: 599, icon: <Building2 size={32} /> },
    { name: "Museum Tour", count: 6, price: 800, icon: <Landmark size={32} /> },
    { name: "Beach Tour", count: 9, price: 455, icon: <Palmtree size={32} /> },
    { name: "Trekking Tour", count: 3, price: 1099, icon: <Tent size={32} /> },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-2 px-6 md:px-20 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">Follow us: <Facebook size={16} /> <Instagram size={16} /> <Youtube size={16} /></span>
          <span className="flex items-center gap-1 border-l pl-4"><Phone size={14} /> +91 (942) 674-7757</span>
        </div>
        <div className="uppercase tracking-wider font-semibold">Login</div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-20 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-sm transform rotate-12 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-2xl font-bold tracking-tighter">JOURNEYA <br /><span className="text-[10px] tracking-[0.3em] font-light block -mt-2">TRAVEL</span></span>
        </div>
        <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
          <a href="#" className="text-indigo-600">Home</a>
          <a href="#">About</a>
          <a href="#">Destination</a>
          <a href="#">Tour</a>
          <a href="#">Blog</a>
          <a href="#">Hotels</a>
          <a href="#">Pages</a>
          <a href="#">Contact</a>
          <button className="bg-indigo-600 text-white p-2 rounded-sm"><Search size={20} /></button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-150 flex flex-col items-center justify-center text-center px-4">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
            alt="Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Let's travel and explore</h1>
          <p className="text-xl mb-12">Discover amazing places at exclusive deals</p>

          {/* Search Bar */}
          <div className="bg-transparent md:bg-white rounded-lg md:rounded-full p-2 md:pl-10 shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-5xl mx-auto">
            <div className="bg-white md:bg-transparent max-md:p-2 max-md:rounded-sm md:flex-1 text-left w-full border-r border-slate-200 pr-4">
              <label className="block text-slate-900 font-bold text-sm">Keyword</label>
              <input type="text" placeholder="Type your keyword here..." className="text-slate-500 outline-none w-full" />
            </div>
            <div className="bg-white md:bg-transparent max-md:p-2 max-md:rounded-sm md:flex-1 text-left w-full border-r border-slate-200 pr-4">
              <label className="block text-slate-900 font-bold text-sm">Destination</label>
              <select className="text-slate-500 outline-none w-full bg-transparent">
                <option>Where to?</option>
              </select>
            </div>
            <div className="bg-white md:bg-transparent max-md:p-2 max-md:rounded-sm md:flex-1 text-left w-full border-r border-slate-200 pr-4">
              <label className="block text-slate-900 font-bold text-sm">Duration</label>
              <select className="text-slate-500 outline-none w-full bg-transparent">
                <option>Check in - Check out</option>
              </select>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 md:py-6 rounded-2xl md:rounded-full text-white max-md:flex max-md:gap-2">
              <Search size={24} />
              <span className="md:hidden font-semibold">Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tour Types Section */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Choose Tour Types</h2>
            <p className="text-slate-500 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tourTypes.map((tour, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-indigo-50 text-indigo-600 aspect-square rounded-2xl flex items-center justify-center mb-4 transition group-hover:bg-indigo-600 group-hover:text-white">
                {tour.icon}
              </div>
              <h3 className="font-bold text-lg">{tour.name}</h3>
              <p className="text-slate-400 text-sm">{tour.count} Tours From ${tour.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Journeya;