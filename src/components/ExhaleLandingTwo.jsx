const profile1 = "https://images.unsplash.com/photo-1502685104226-ee32379fefbe";
const profile2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330";
const profile3 = "https://images.unsplash.com/photo-1527980965255-d3b416303d12";
const profile4 = "https://images.unsplash.com/photo-1544723795-3fb6469f5b39";
const profile5 = "https://images.unsplash.com/photo-1552058544-f2b08422138a";
const profile6 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e";
const profile7 = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";

const yoga2 = "https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

import { FiMenu } from "react-icons/fi";

const ExhaleLandingTwo = () => {

    const navLinks = [
        "Home",
        "Classes",
        "Pricing",
        "Contact"
    ]


    const stats = [
        { statNumber: "50+", title: "Live Session" },
        { statNumber: "3.5k+", title: "Lives Impact" },
        { statNumber: "70%", title: "Engagement Rate" },
        { statNumber: "100%", title: "User Satisfaction" }
    ];


    const testimonials = [
        {
            id: 1,
            quote:
                "First I’ve paid for online yoga program. I can feel my whole approach to life changing by utilising all of the program content",
            name: "Bessie Williams",
            location: "California",
            image: profile6,
            alt: "Bessie Cooper",
        },
        {
            id: 2,
            quote:
                "Absolutely love it so far! The next stage for yoga. The themes are meaningful not silly. Instructors are so helpful!",
            name: "Brett Smith",
            location: "New York",
            image: profile7,
            alt: "Anna Smith",
        },
    ];




    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">






            {/* NAVBAR */}
            <header className="border-b border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto flex items-center  justify-between px-6 py-4">
                    <h2 className="text-xl font-semibold">Breath of Balance .</h2>

                    <nav className="hidden sm:flex sm:gap-8">
                        {navLinks.map((link, index) => (
                            <a key={index} href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">{link}</a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-medium border border-slate-300 rounded-lg hover:bg-slate-100 transition cursor-pointer">Sign In</button>
                        <div className="block text-lg font-medium sm:hidden border border-slate-300 rounded-lg px-2 py-2 hover:bg-slate-100 transition cursor-pointer">
                            <FiMenu />
                        </div>
                    </div>


                </div>
            </header>







            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* right content  */}
                    <div className="flex flex-col justify-center">
                        {/* heading  */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Explore Yourself
                            <br />
                            Explore Yoga
                        </h1>

                        {/* paragraph  */}
                        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl">
                            We share the transformative power of yoga with every mind, every
                            body, everywhere
                        </p>

                        {/* call to action */}
                        <div className="mt-8 flex flex-col gap-6">

                            <div>
                                <button className="px-6 py-3 bg-slate-900 text-white text-sm sm:text-base font-medium rounded-xl hover:bg-slate-800 transition">Join Now</button>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-end flex-wrap gap-3 sm:gap-6">

                                {/* members circle overlapping images  */}
                                <div className="flex -space-x-3 shrink-0">
                                    {[profile1, profile2, profile3, profile4, profile5].map(
                                        (img, i) => (
                                            <img key={i} src={img} alt={`user-${i}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                        )
                                    )}
                                </div>

                                {/* member count  */}
                                <div className="min-w-0">
                                    <p className="text-lg font-semibold">3.5k+</p>
                                    <p className="text-sm text-slate-600 leading-snug">More than 3.5k members are connected with us</p>
                                </div>

                                {/* register button  */}
                                <a
                                    href="#"
                                    className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700 transition"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>




                    {/* left content (image) */}
                    <div className="relative">
                        <img src={yoga2} alt="yoga" className="w-full max-h-130 rounded-2xl object-cover" />

                        <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3">
                            <div className="text-lg font-semibold">80%</div>
                            <span className="text-sm text-slate-600">Mind Progression</span>
                        </div>
                    </div>

                </div>





                {/* STATS */}
                <div className="mt-20">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-2xl font-semibold">{stat.statNumber}</div>
                                <div className="text-sm text-slate-600">{stat.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>







            {/* TESTIMONIALS */}
            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
                    <h2 className="text-xl font-semibold">See What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {testimonials.map(t => (
                            <div key={t.id} className="bg-slate-50 rounded-2xl p-8 shadow-sm">
                                <p className="text-slate-700 text-base leading-relaxed">
                                    {t.quote}
                                </p>

                                <div className="mt-6 flex items-center gap-4">
                                    <img src={t.image} alt={t.alt} className="w-12 h-12 rounded-full object-cover" />
                                    <div className="min-w-0">
                                        <div className="font-medium truncate">{t.name}</div>
                                        <div className="text-sm text-slate-500 truncate">{t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ExhaleLandingTwo;