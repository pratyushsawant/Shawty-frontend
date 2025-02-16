"use client";

import React, { useState } from "react";
import { Backy } from "../ui/hero-highlight";
import { TypewriterEffectSmooth } from "../ui/typo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { clear } from "console";

export function Creation() {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const words = [
    { text: "Create" },
    { text: "content" },
    { text: "with" },
    {
      text: "Shawty",
      className:
        "text-pink-500 dark:text-pink-400 text-2xl md:text-6xl font-bold text-center",
    },
  ];

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setVideoUrl(null);

    const url = "http://127.0.0.1:5000/generate_quiz";
    const payload = {
      topic: topic,
      num_questions: numQuestions,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const blob = await response.blob();
        const videoUrl = URL.createObjectURL(blob);
        setVideoUrl(videoUrl);
      } else {
        const text = await response.text();
        throw new Error(`${response.status}: ${text}`);
      }
    } catch (error: any) {
      console.error(`An error occurred: ${error}`);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (videoUrl) {
      const link = document.createElement("a");
      link.href = videoUrl;
      link.download = "generated_video.mp4";
      link.click();
    }
  };

  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
      <Backy
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col -z-1 justify-center px-2 md:px-10 gap-7 py-4 w-full h-full"
      >
        <TypewriterEffectSmooth words={words} />

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <input
            type="text"
            className="w-80 h-10 px-3 rounded-lg border-2 border-purple-500 bg-gray-900 text-purple-500 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="What's on your mind?"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[90px]">
                {numQuestions} {numQuestions === 1 ? "Question" : "Questions"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Number of Questions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[1, 2, 3, 4, 5].map((num) => (
                <DropdownMenuItem
                  key={num}
                  onSelect={() => setNumQuestions(num)}
                >
                  {num} {num === 1 ? "Question" : "Questions"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button
          onClick={handleGenerate}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
        >
          {isLoading ? "Generating..." : "Generate"}
        </Button>

        {error && <div className="mt-4 text-red-500">Error: {error}</div>}

        {videoUrl && (
          <div className="mt-8 w-full max-w-2xl">
            <Button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 transition duration-200 rounded-lg text-white mb-4"
            >
              Download Video
            </Button>
          </div>
        )}
      </Backy>
    </div>
  );
}
export default Creation;
