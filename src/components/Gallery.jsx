
import React, { useState, useEffect } from "react";

const images = [
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
        title: "Desert Road",
        caption: "A long winding road disappearing into the bright desert horizon.",
    },
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        title: "Forest Leaves",
        caption: "Soft green leaves glowing in sunset light.",
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        title: "Ocean Waves",
        caption: "Strong waves crashing against jagged cliffs.",
    },
    {
        src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",
        title: "Golden Sunset",
        caption: "A warm golden sunset casting silhouettes across the field.",
    },
    {
        src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
        title: "Misty Pier",
        caption: "A peaceful foggy pier during early morning.",
    },
    {
        src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
        title: "Deep Forest",
        caption: "Lush green forest vegetation illuminated by sunlight.",
    },
    {
        src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80",
        title: "Rocky Cove",
        caption: "A quiet rocky beach with calm waters.",
    },
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
        title: "Field House",
        caption: "A tiny house surrounded by an endless golden field.",
    },
    {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
        title: "Dreamy Blur",
        caption: "Soft-focused greenery for a dreamy aesthetic.",
    },
];

export default function Gallery({ className = "", thumbnailsPerPage = 7 }) {
    const [current, setCurrent] = useState(0);
    const [thumbPageStart, setThumbPageStart] = useState(0); // index of first thumbnail visible
    const total = images.length;

    useEffect(() => {
        // Ensure the thumbnail page contains the current image
        if (current < thumbPageStart) setThumbPageStart(current);
        if (current >= thumbPageStart + thumbnailsPerPage)
            setThumbPageStart(current - thumbnailsPerPage + 1);
    }, [current, thumbPageStart, thumbnailsPerPage]);

    function prevMain() {
        setCurrent((s) => (s - 1 + total) % total);
    }
    function nextMain() {
        setCurrent((s) => (s + 1) % total);
    }

    function prevThumbPage() {
        setThumbPageStart((s) => Math.max(0, s - thumbnailsPerPage));
    }
    function nextThumbPage() {
        setThumbPageStart((s) => Math.min(total - thumbnailsPerPage, s + thumbnailsPerPage));
    }

    function goto(index) {
        setCurrent(index);
    }

    // compute visible thumbnails
    const visibleThumbs = images.slice(
        thumbPageStart,
        Math.min(thumbPageStart + thumbnailsPerPage, total)
    );

    return (
        <div className={`w-full ${className}`}>
            {/* Gallery stage */}
            <div className="relative bg-gray-900 text-white overflow-hidden shadow-lg">
                {/* Main image */}
                <div className="w-full h-[520px] sm:h-[520px] md:h-[520px] lg:h-[520px] flex items-center justify-center bg-black">
                    <img
                        src={images[current].src}
                        alt={images[current].title}
                        className="max-w-full max-h-[100%] object-cover w-full h-full opacity-100 transition-opacity duration-300"
                    />

                    {/* Left arrow on image */}
                    <button
                        onClick={prevMain}
                        aria-label="previous"
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/60 flex items-center justify-center shadow"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6L9 12l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Right arrow on image */}
                    <button
                        onClick={nextMain}
                        aria-label="next"
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/60 flex items-center justify-center shadow"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Caption overlay bottom-left */}
                    <div className="absolute left-6 bottom-6 right-6 text-white/90">
                        <h3 className="text-2xl font-semibold drop-shadow">{images[current].title}</h3>
                        <p className="mt-2 text-sm max-w-3xl leading-6 drop-shadow">
                            {images[current].caption}
                        </p>
                    </div>

                    {/* Index/total bottom-right */}
                    <div className="absolute right-6 bottom-6 text-sm text-white/80">{current + 1} / {total}</div>
                </div>
            </div>

            {/* Thumbnails strip */}
            <div className="mt-4 flex items-center justify-center gap-4">
                {/* Prev page */}
                <button
                    onClick={prevThumbPage}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/70 text-white"
                    aria-label="previous thumbnails"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M15 6L9 12l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="flex gap-3 overflow-hidden">
                    {visibleThumbs.map((img, i) => {
                        const globalIndex = thumbPageStart + i;
                        const isActive = globalIndex === current;
                        return (
                            <button
                                key={globalIndex}
                                onClick={() => goto(globalIndex)}
                                className={`w-20 h-20 p-1 rounded-sm shadow-lg transform hover:scale-105 transition-transform focus:outline-none ${isActive ? "ring-4 ring-yellow-300" : ""
                                    } bg-black`}
                            >
                                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                            </button>
                        );
                    })}
                </div>

                {/* Next page */}
                <button
                    onClick={nextThumbPage}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/70 text-white"
                    aria-label="next thumbnails"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}