"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ResumeButton = ({ resumeUrl, resumeName = "Resume.pdf", className }) => {
  if (!resumeUrl) return null;

  // Convert Google Drive view URL to direct download URL if needed
  const getDownloadUrl = () => {
    if (resumeUrl.includes("drive.google.com/file/d")) {
      const fileId = resumeUrl.match(/\/d\/(.+?)\/view/)?.[1];
      if (fileId) {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }
    return resumeUrl;
  };

  const getPreviewUrl = () => {
    return resumeUrl;
  };

  const handlePreview = () => {
    window.open(getPreviewUrl(), "_blank");
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = getDownloadUrl();
    downloadLink.download = resumeName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`relative group flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
          size="lg"
        >
          <FileText className="h-5 w-5" />
          <span>Resume</span>
          <ChevronDown className="h-4 w-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 rounded-xl shadow-xl border border-gray-700 bg-gray-900 text-white"
      >
        <DropdownMenuItem
          onClick={handlePreview}
          className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Preview</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleDownload}
          className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
};

export default ResumeButton;