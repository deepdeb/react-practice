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
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
            <div className="w-full max-w-5xl bg-slate-900 rounded-2xl shadow-xl p-6 md:p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Background Remover
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Made with ❤️ by Pradeep
                    </p>
                </div>

                <div>
                    {!originalImg && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            className="cursor-pointer border-2 border-dashed border-slate-600 rounded-xl p-10 flex flex-col items-center gap-4 text-center hover:border-slate-400 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center">
                                <FaCamera color="white" size={30} />
                            </div>
                            <div className="text-lg font-medium">
                                Drag & drop or click to upload
                            </div>
                            <div className="text-sm text-slate-400">
                                JPG, PNG, WEBP supported
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/"
                                onChange={handleFileInputChange}
                                className="hidden"
                            />
                        </motion.div>
                    )}

                    {error && <div>{error}</div>}


                    <AnimatePresence>
                        {originalImg && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >


                                <div className="bg-slate-800 rounded-xl p-4">

                                    <div className="mb-3 text-sm font-semibold text-slate-300">
                                        Original
                                    </div>

                                    <div className="aspect-square bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center">
                                        <img src={originalImg} alt="Original" className="max-h-full max-w-full object-contain" />
                                    </div>
                                </div>

                                <div className="bg-slate-800 rounded-xl p-4">

                                    <div className="mb-3 text-sm font-semibold text-slate-300">
                                        Background Removed
                                    </div>

                                    <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center text-slate-400">
                                        {processedImg ? (
                                            <img src={processedImg} alt="Processed" className="max-h-full max-w-full object-contain" />
                                        ) : (
                                            <span>
                                                {isProcessing ? (
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                                                        <span className="text-sm">
                                                            "Processing..."
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-sm">
                                                        Processed image will appear here
                                                    </span>
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {originalImg && (
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={downloadImage}
                                disabled={!processedImg}
                                className="px-6 py-3 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processedImg ? "Download Result" : "Processing..."}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="px-6 py-3 rounded-lg font-medium bg-slate-700 hover:bg-slate-600 transition flex items-center justify-center gap-2"
                                onClick={resetApp}
                            >
                                <FaRecycle /> Process another image
                            </motion.button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BackgroundRemover
