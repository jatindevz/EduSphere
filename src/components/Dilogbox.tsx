"use client";

import * as React from "react";
import { data } from "@/data/data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BookOpen, Edit, Newspaper, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type Props = {
  code: string;
};

export default function DrawerDialogDemo({ code }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white"
        >
          <Edit className="mr-2 h-4 w-4" />
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-cyan-400">Resorces</DialogTitle>
        </DialogHeader>

        <ProfileForm code={code} />
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({ code }: Props) {
  if (!data[code]) {
    return <div>
      <div className="text-white">Resources are not available</div>;
    </div>;
  }
  return (
    <div>
      {/* Youtube */}
      <div>
        <div className="text-white mb-2">Youtube :</div>
        <div className="flex flex-wrap w-full gap-2">
          {data[code].youtube_playlists.map((resource) => (
            <div
              key={resource.id}
              className="group relative flex items-center space-x-2 p-2 hover:bg-white/5 rounded transition-colors duration-200"
            >
              {/* 20x20 box with tooltip */}
              <Tooltip>
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <TooltipTrigger asChild>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                      aria-label={`Watch ${resource.title} on YouTube`}
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent side="bottom">
                    <p>{resource.title}</p>
                  </TooltipContent>
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      {/* Pdfs */}
      <div>
        <div className="text-white mb-2">Pdfs :</div>
        <div className="flex flex-wrap w-full gap-2">
          {data[code].pdfs.map((resource) => (
            <div
              key={resource.id}
              className="group relative flex items-center space-x-2 p-2 hover:bg-white/5 rounded transition-colors duration-200"
            >
              {/* 20x20 box with tooltip */}
              <Tooltip>
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <TooltipTrigger asChild>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                      aria-label={`Watch ${resource.title} on YouTube`}
                    >
                      <BookOpen className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent side="bottom">
                    <p>{resource.title}</p>
                  </TooltipContent>
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      {/* Other Resources */}
      <div>
        <div className="text-white mb-2">Other Resources :</div>
        <div className="flex flex-wrap w-full gap-2">
          {data[code].other_resources.map((resource) => (
            <div
              key={resource.id}
              className="group relative flex items-center space-x-2 p-2 hover:bg-white/5 rounded transition-colors duration-200"
            >
              {/* 20x20 box with tooltip */}
              <Tooltip>
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <TooltipTrigger asChild>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                      aria-label={`Watch ${resource.title} on YouTube`}
                    >
                      <Newspaper className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent side="bottom">
                    <p>{resource.title}</p>
                  </TooltipContent>
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
