import { removeBackground } from "@imgly/background-removal"
import { useRef, useState } from "react"
import { FaCamera, FaRecycle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BackgroundRemover = () => {
    const [originalImg, setOriginalImg] = useState(null);
    const [processedImg, setProcessedImg] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = async (file) => {
        if (!file || !file.type.startsWith("image/")) {
            setError("Please select a valid image file");
            return;
        }

        setError(null);
        setProcessedImg(null);
        setIsProcessing(true);
        const reader = new FileReader();

        reader.onload = (e) => {
            if (e.target && typeof e.target.result === "string") {
                setOriginalImg(e.target.result)
            }
        }
        reader.readAsDataURL(file);

        try {
            const blob = await removeBackground(file);
            const url = URL.createObjectURL(blob);
            setProcessedImg(url);
        } catch (err) {
            setError("Failed to process image. Please try again");
            console.error("Background removal error: ", err)
        } finally {
            setIsProcessing(false);
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files && e.target.files[0] ? e.target.files[0] : undefined;
        handleFileSelect(file);
    }

    const downloadImage = () => {
        if (!processedImg) return;
        const link = document.createElement("a");
        link.href = processedImg;
        link.download = "bg-removed.png"
        link.click();
        URL.revokeObjectURL(processedImg);
    }

    const resetApp = () => {
        setOriginalImg(null);
        setProcessedImg(null);
        setIsProcessing(false);
        setError(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 flex items-center justify-center p-6 selection:bg-zinc-700">
            <div className="w-full max-w-6xl">
                
                {/* Header Section */}
                <div className="text-center mb-16 space-y-3">
                    <h1 className="text-4xl md:text-5xl font-extralight tracking-[0.2em] text-white uppercase">
                        Studio <span className="font-medium">Clear</span>
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-8 bg-zinc-800"></span>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-light">
                            Crafted by Pradeep
                        </p>
                        <span className="h-px w-8 bg-zinc-800"></span>
                    </div>
                </div>

                <div className="relative group">
                    {!originalImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            className="group cursor-pointer border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm rounded-3xl p-20 flex flex-col items-center gap-8 text-center transition-all duration-500 hover:border-zinc-500 hover:bg-zinc-900/40"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <FaCamera className="relative text-zinc-400 group-hover:text-white transition-colors duration-500" size={24} />
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm uppercase tracking-[0.2em] text-zinc-100 font-light">
                                    Select Masterpiece
                                </div>
                                <div className="text-[11px] text-zinc-500 uppercase tracking-widest">
                                    PNG, JPG, WEBP • RAW Quality
                                </div>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*"
                                onChange={handleFileInputChange}
                                className="hidden"
                            />
                        </motion.div>
                    )}

                    {error && (
                        <div className="absolute -top-10 left-0 right-0 text-center text-xs tracking-widest uppercase text-red-400/80">
                            {error}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {originalImg && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
                            >
                                {/* Left Side: Original */}
                                <div className="space-y-4">
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 pl-2">
                                        Source
                                    </div>
                                    <div className="aspect-4/5 bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-3xl flex items-center justify-center p-4">
                                        <img src={originalImg} alt="Original" className="max-h-full max-w-full object-contain grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                </div>

                                {/* Right Side: Processed */}
                                <div className="space-y-4">
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 pl-2">
                                        Transformed
                                    </div>
                                    <div className="aspect-4/5 bg-[#0f0f0f] border border-zinc-800 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                                        {processedImg ? (
                                            <img src={processedImg} alt="Processed" className="max-h-full max-w-full object-contain" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-6">
                                                {isProcessing ? (
                                                    <>
                                                        <div className="w-12 h-px bg-zinc-800 relative overflow-hidden">
                                                            <div className="absolute inset-0 bg-white animate-[loading_1.5s_infinite]" />
                                                        </div>
                                                        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 animate-pulse">
                                                            Isolating Subject
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                                        Awaiting Output
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {originalImg && (
                        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                                onClick={downloadImage}
                                disabled={!processedImg}
                                className="relative px-10 py-4 bg-white text-black text-[11px] uppercase tracking-[0.3em] font-semibold rounded-full overflow-hidden transition-all disabled:opacity-20 disabled:grayscale"
                            >
                                {processedImg ? "Export Asset" : "Rendering..."}
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ opacity: 1 }}
                                onClick={resetApp}
                                className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500 opacity-60 transition-all"
                            >
                                <FaRecycle size={12} /> New Composition
                            </motion.button>
                        </div>
                    )}
                </div>
            </div>

            {/* Subtle Gradient Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/10 blur-[120px] rounded-full" />
            </div>

            <style jsx>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    )
}

export default BackgroundRemover