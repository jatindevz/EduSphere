"use client"

import * as React from "react"
import { X, ChevronRight, BookOpen, Download, Edit, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import DrawerDialogDemo from "./Dilogbox"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type subProps = {
  sname: string
  id: string
}

type Props = {
  subject: subProps[]
  branchname: string
}

export default function DrawerDemo({ subject, branchname }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full mt-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300">
          View Details
          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-slate-900 border-slate-700">
        <div className=" w-full p-6">
          {/* Drawer Header with Close button on right */}
          <DrawerHeader className="px-2">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle className="text-white text-2xl font-bold text-left flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-cyan-400" />
                  {branchname}
                </DrawerTitle>
                <DrawerDescription className="text-left text-slate-200">
                  {subject.length} subjects available
                </DrawerDescription>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-800 text-slate-400 hover:text-white">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>

            </div>
          </DrawerHeader>

          {/* Subjects List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-3">
            {subject.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/30 transition-colors duration-300 text-white"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-3">
                    {index + 1}
                  </div>
                  <p className="font-medium">{item.sname}</p>
                </div>
                <DrawerDialogDemo code={item.id} />
              </div>
            ))}
          </div>


          {/* Footer with action buttons */}
          <DrawerFooter className="px-0">
            <div className="flex justify-end space-x-3">
              <DrawerClose asChild>
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white">
                  Cancel
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

