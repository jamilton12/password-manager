"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { BarChart, DoorClosed, House, RectangleEllipsis } from "lucide-react"
import Link from "next/link"
import { SingleItem } from "../SingleItem"
import { dataSidebarConfigurations, dataSidebarElements } from "./SidebarRoutes.data"
import { signOut } from "next-auth/react";

export function SidebarRoutes() {
  return (
    <div>
      <SingleItem href="/" label="Homepage" icon={House} />


      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion type="single" key={title} className="w-full px-2"  collapsible> 
          <AccordionItem value="item-1" className="border-b-0" >
            <AccordionTrigger > 
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 rounded-md p-2">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div key={item} >
                  <Link href={href} 
                  className="flex gap-2 items-center p-2 hover:bg-blue-100/20 
                    duration-300 transition-all rounded-md"
                  >
                  <Icon size={20} />
                  {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem href= "/generator" label="Generator" icon={RectangleEllipsis} />

      {dataSidebarConfigurations.map(({ title, icon: Icon, children }) => (
        <Accordion type="single" key={title} className="w-full px-2"  collapsible> 
          <AccordionItem value="item-1" className="border-b-0" >
            <AccordionTrigger > 
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 rounded-md p-2">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon, premium }) => (
                <div key={item} className="flex items-center justify-between mt-2 
                  hover:bg-blue-100/20 duration-300 transition-all rounded-md pr-1
                " >
                  <Link href={href} 
                  className="flex gap-2 items-center px-6 py-2" 
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                  {
                    premium && (
                      <span className="flex gap-2 text-xs px-2 py-1 bg-blue-400 rounded-md">
                        Premium
                      </span>
                    )
                  }
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem href= "/analytics" label="Analytics" icon={BarChart} />

      <SingleItem onClick={() => signOut()} href= "#" label="Close Session" icon={DoorClosed} />
    </div>
  )
}