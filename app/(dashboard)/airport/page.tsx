'use client';

import { ClipboardCheck, TowerControl, ExternalLink, SlidersVertical, Search, Info, Plus, Minus, RotateCcw } from "lucide-react";
import { ReactNode, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import clsx from "clsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/sidebar/sidebar";


export default function Home() {

  const [zoom, setZoom] = useState(1)


  return (
    <main className="w-screen h-screen bg-slate-500 flex overflow-hidden text-[11px] select-none">

      {/* Sidebar */}
      <Sidebar slug="airport" />
 
      {/* Main content section */}

      <section className="flex-1 bg-slate-300">
        <nav className="flex bg-[#1E374F] justify-between items-center">
          <ul className="flex gap-2 text-[13px] p-2">
            <li className="px-3 py-1 bg-[#3498DB] rounded">Home</li>
            <li className="px-3 py-1 bg-[#43536a] rounded">Dashboard</li>
          </ul>

          <div className="ml-[-60px]">
            <div className="text-center py-2">
              <h2 className="font-semibold text-[13px]">EHAM</h2>
              <p>Airport section</p>
            </div>
          </div>

          <ul className="flex items-center p-2 gap-2">
            <li className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90" onClick={() => setZoom(zoom + 0.1)}>
              <Plus size={18} />
            </li>
            <li className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90" onClick={() => setZoom(zoom - 0.1)}>
              <Minus size={18} />
            </li>
            <li className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90">
              <ExternalLink size={18} />
            </li>
            <li className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90">
              <SlidersVertical size={18} />
            </li>
          </ul>
        </nav>

        <section className="flex h-full text-[13px]">

          {/* Side description section */}

          <nav className="w-60 md:w-64 lg:w-72 bg-[#1b3249] p-4 flex flex-col ">
            <header className="text-center">
              <div className="uppercase text-[19px] font-semibold bg-[#2d4c674f] flex justify-between items-center px-2">
                <div></div>
                <h1>
                  EHAM - AMS
                </h1>
                <HoverCard>
                  <HoverCardTrigger>
                    <div className=" cursor-pointer">
                      <Info size={18} />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-2 capitalize text-left bg-[#0b1925]" align="start">
                    <h3 className="text-[14px]">Schipol International Airport</h3>
                    <p className="text-sm">ICAO: EHAM</p>
                    <p className="text-sm">IATA: AMS</p>
                    <p className="text-sm">ATC: 293.22</p>
                    <p className="text-sm">Runways</p>
                    <ul className="text-sm">
                      <li>02 R: 2000 meters</li>
                      <li>02 L: 2200 meters</li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <h2 className="text-[13px] text-slate-200">Aeropuerto Felipe Ángeles</h2>
              <h2 className="text-[13px] text-slate-200">Mexico City, Mexico</h2>
            </header>

            {/* Search box */}
            <div className="p-2 flex items-center gap-2 bg-white/15 rounded my-2">
              <Search size={16} />
              <input type="text" placeholder="Search by ICAO code" className="bg-transparent w-full focus:outline-none" />
            </div>

            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="bg-[#7f7f7f2e]">
                <TabsTrigger className="data-[state=active]:bg-red-500" value="account">Account</TabsTrigger>
                <TabsTrigger className="data-[state=active]:bg-red-500" value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Make changes to your account here.</TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

            <div className="flex flex-col gap-1 flex-1 overflow-y-auto">
              <ChartList label="ILS 05R VOR" code="12-3" />
              <ChartList label="ILS 05L CAT-3" code="12-4" active={true} />
              <ChartList label="VFR 05R VOR" code="12-5" />
              <ChartList label="VFR 05R VOR" code="12-5" />
              <ChartList label="VFR 05R VOR" code="12-5" />
              <ChartList label="VFR 05R VOR" code="12-5" />
              <ChartList label="VFR 05R VOR" code="12-5" />
              <ChartList label="VFR 05R VOR" code="12-5" />
              <ChartList label="VFR 05R VOR" code="12-5" />

            </div>

          </nav>
          <section className="flex-1 bg-[#0f2335] h-full w-full min-w-fit p-4 py-6 relative overflow-auto">
            <TransformWrapper
              initialScale={1}
              initialPositionX={60}
              initialPositionY={0}
            >
              <Controls />
              <TransformComponent >
                <img
                  className="block mx-auto h-full" style={{ transform: `scale(${zoom})` }}
                  src="https://static.wixstatic.com/media/a27d24_3fc700c02ea24720adfc624bd1ed5d6c~mv2.jpg/v1/fill/w_901,h_669,al_c,q_85,enc_auto/a27d24_3fc700c02ea24720adfc624bd1ed5d6c~mv2.jpg"
                  alt="Logo" />
              </TransformComponent>
            </TransformWrapper>


          </section>
        </section>
      </section>


    </main>
  );
}

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools flex gap-2 p-2 fixed backdrop-blur-[1px] bg-white/5 z-10">
      <button onClick={() => zoomIn()} className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90">
        <Plus size={18} />
      </button>
      <button onClick={() => zoomOut()} className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90">
        <Minus size={18} />
      </button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div onClick={() => resetTransform()} className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90">
              <RotateCcw size={18} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset position</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}


const MenuItem = ({ children, active }: { active?: boolean, children: ReactNode }) => {
  return (
    <li
      className={`flex flex-col items-center justify-center gap-1 cursor-pointer py-2 hover:bg-[#3e5c72] ${active && 'bg-[#0099ff47] active'}`}>
      {children}
    </li>
  )
}

const ChartList = ({ label, code, active }: { label: string, code: string, active?: boolean }) => {
  return (
    <div className={clsx(`bg-slate-300/10 p-2 cursor-pointer hover:bg-[#1e5788] rounded-[2px]`, active && 'bg-[#1e5788]')}>
      <h3 className="font-semibold">{label}</h3>
      <p>{code}</p>
    </div>
  )
}


function LogoSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 129 125"
      className="w-full"
    >
      <rect width="123" height="123" x="2" fill="transparent" rx="28"></rect>
      <g clipPath="url(#clip0_82_7)">
        <path
          fill="#FFD600"
          d="M80.49 39.94L58.236 51.992a12.72 12.72 0 00-3.954 3.23 12.265 12.265 0 00-2.314 4.479l-6.883 23.78c-.111.407-.053.838.163 1.2.216.363.571.626.989.734.402.093.827.042 1.196-.142L69.687 73.22a12.718 12.718 0 003.954-3.23 12.263 12.263 0 002.314-4.479l6.883-23.78a1.544 1.544 0 00-.163-1.2 1.616 1.616 0 00-.989-.734 1.786 1.786 0 00-1.196.142zM64.597 67.141a4.928 4.928 0 01-2.751-.466 4.706 4.706 0 01-2.01-1.873 4.54 4.54 0 01-.591-2.648 4.632 4.632 0 011.027-2.532 4.869 4.869 0 012.3-1.56 4.961 4.961 0 012.797-.065 4.792 4.792 0 012.35 1.454 4.572 4.572 0 011.113 2.482 4.601 4.601 0 01-1.012 3.447 4.898 4.898 0 01-3.223 1.761z"
        ></path>
        <path
          fill="#fff"
          d="M69.95 112.705c-10.205 1.212-20.529-.538-29.667-5.026-9.138-4.489-16.68-11.517-21.67-20.194a48.95 48.95 0 01-6.369-28.553c.839-9.94 4.694-19.437 11.08-27.29 6.385-7.853 15.013-13.71 24.793-16.828a53.482 53.482 0 0130.15-.694c9.878 2.666 18.698 8.121 25.344 15.674 6.647 7.553 10.822 16.865 11.997 26.759 1.575 13.267-2.35 26.636-10.912 37.167-8.563 10.53-21.06 17.359-34.745 18.985zM59.06 20.995c-8.504 1.01-16.527 4.442-23.054 9.862-6.527 5.42-11.265 12.585-13.615 20.589a40.79 40.79 0 00.413 24.376c2.62 7.89 7.597 14.83 14.303 19.947 6.706 5.115 14.839 8.176 23.37 8.794a44.576 44.576 0 0024.562-5.323c7.483-4.088 13.563-10.229 17.474-17.645 3.91-7.417 5.475-15.776 4.496-24.02-1.313-11.057-7.102-21.122-16.095-27.982-8.992-6.86-20.45-9.953-31.854-8.599z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_82_7">
          <rect
            width="115.674"
            height="112.145"
            y="13.642"
            fill="#fff"
            rx="56.072"
            transform="rotate(-6.773 0 13.642)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}