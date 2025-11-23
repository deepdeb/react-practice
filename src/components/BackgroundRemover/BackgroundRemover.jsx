import { removeBackground } from "@imgly/background-removal"
import { useRef, useState } from "react"
import { FaCamera, FaRecycle } from "react-icons/fa";

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
        <div className="min-h-screen bg-linear-to-br from-fuchsia-950 via-neutral-900 to-purple-950 flex flex-col items-center justify-center p-4 gap-12">
            <span className="text-5xl text-center bg-linear-to-r text-fuchsia-200">
                Background Remover
            </span>
            <span className="text-xl text-center bg-linear-to-r text-fuchsia-200">
                Made with ❤️ by Pradeep
            </span>

            <div className="w-full max-w-2xl bg-linear-to-r from-fuchsia-900 to-indigo-950 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-fuchsia-500">
                {!originalImg && (
                    <div className="flex flex-col items-center justify-center h-96 mb-6 p-4 bg-linear-to-b from-indigo-950/40 to-fuchsia-950/50 rounded-2xl opacity-80 hover:opacity-100 hover:shadow-fuchsia-700 shadow-2xl transition-all duration-400 text-center cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <div>
                            <FaCamera color="white" size={30} />
                        </div>
                        <div className="text-lg sm:text-xl text-fuchsia-200 mb-2">
                            Drag & drop or click to upload
                        </div>
                        <div className="text-xs sm:text-sm text-fuchsia-400">
                            JPG, PNG, WEBP supported
                        </div>
                        <input type="file" ref={fileInputRef} accept="image/" onChange={handleFileInputChange} className="hidden" />

                    </div>
                )}

                {error && <div className="text-center text-pink-400 mb-4">{error}</div>}

                {
                    originalImg && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="flex flex-col items-center">
                                <div className="text-fuchsia-300 text-xl mb-2">Original</div>
                                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden flex items-center justify-center border-2 border-fuchsia-600/50">
                                    <img src={originalImg} alt="Original" className="object-contain w-full h-full" />
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="text-fuchsia-300 text-xl mb-2">Background Removed</div>
                                <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden flex items-center justify-center border-2 border-fuchsia-600/50">
                                    {processedImg ?
                                        <img src={processedImg} alt="Processed" className="object-contain w-full h-full" />
                                        :
                                        <div className="flex flex-col items-center justify-center w-full h-full text-fuchsia-400">
                                            {isProcessing ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="animate-spin w-6 h-6 border-2 border-fuchsia-300/30 border-t-fuchsia-100 rounded-full"></div>
                                                    Processing...
                                                </div>
                                            ) : (
                                                <span>Processed image will appear here</span>
                                            )}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }

                {originalImg && (
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mt-2">
                        <button onClick={downloadImage} disabled={!processedImg} className="px-6 py-3 bg-linear-to-r from-fuchsia-600 to-pink-400 hover:opacity-80 text-white font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                            {processedImg ? "Download Result" : "Processing..."}
                        </button>
                        <button onClick={resetApp} className="px-6 flex items-center gap-2 py-3 bg-linear-to-r from-fuchsia-600 to-pink-400 hover:opacity-80 text-white font-semibold rounded  cursor-pointer">
                            <FaRecycle/> Process another image
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BackgroundRemover