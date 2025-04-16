import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

function AiFeatures() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRemoveBackground = () => {
    setIsProcessing(true);
    // Simulate API call or processing time
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would typically handle the actual background removal functionality
      alert("Background removal processed!");
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 mt-12">
      <h2 className="text-lg font-semibold mb-3 flex items-center justify-center">
        <Sparkles className="h-5 w-5 text-purple-500 mr-2" />
        AI Image Creation
      </h2>
      <p className="text-gray-700 mb-4 text-center">
        Create stunning thumbnails images for your YouTube videos with AI - <span className="font-semibold text-green-600">Free to try!</span>
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          variant="outline"
          className="rounded-full px-5 py-6 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-purple-700 border-purple-200 shadow-sm flex items-center"
        >
          Generate thumbnail from video title
        </Button>
        <Button
          variant="outline"
          className="rounded-full px-5 py-6 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 text-pink-700 border-pink-200 shadow-sm flex items-center"
        >
          Generate custom thumbnail image
        </Button>
        <Button
          variant="outline"
          className="rounded-full px-5 py-6 bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 text-teal-700 border-teal-200 shadow-sm flex items-center"
          onClick={handleRemoveBackground}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Remove background"}
        </Button>
      </div>
    </div>
  );
}

export default AiFeatures;