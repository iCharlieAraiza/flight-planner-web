'use client';

import { ClipboardCheck, TowerControl, ExternalLink, SlidersVertical, Search, Info, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import clsx from "clsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";


export default function Home() {

  const [zoom, setZoom] = useState(1)

  return (
    <main className="w-screen h-screen bg-slate-500 flex overflow-hidden text-[11px] select-none">

      {/* Sidebar */}
      <aside className="w-16 bg-[#1E384F] h-full">
        <nav>
          <ul>
            <MenuItem active={true}>
              <ClipboardCheck size={22} />
              <p>Board</p>
            </MenuItem>
            <MenuItem>
              <TowerControl size={22} />
              <span>Airport</span>
            </MenuItem>
            <MenuItem>
              <ClipboardCheck size={22} />
              <span>Map</span>
            </MenuItem>
          </ul>
        </nav>
      </aside>

      {/* Main content section */}

      <section className="flex-1 bg-slate-300">
        <nav className="flex bg-[#1E374F] justify-between">
          <ul className="flex gap-2 text-[13px] p-2">
            <li className="px-3 py-1 bg-[#3498DB] rounded">Home</li>
            <li className="px-3 py-1 bg-[#43536a] rounded">Dashboard</li>
          </ul>
          <ul className="flex items-center p-2 gap-2">
            <li className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90" onClick={() => setZoom(zoom + 0.2)}>
              <Plus size={18} />
            </li>
            <li className="bg-[#375777] rounded p-1 cursor-pointer hover:opacity-90" onClick={() => setZoom(zoom - 0.2)}>
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
          <section className="flex-1 bg-[#0f2335] h-full w-full p-4 relative overflow-auto">
            <div className="">

            </div>
            <img
              className="h-full m-4 block mx-auto" style={{ transform: `scale(${zoom})` }}
              src="https://static.wixstatic.com/media/a27d24_3fc700c02ea24720adfc624bd1ed5d6c~mv2.jpg/v1/fill/w_901,h_669,al_c,q_85,enc_auto/a27d24_3fc700c02ea24720adfc624bd1ed5d6c~mv2.jpg"
              alt="Logo" />
          </section>
        </section>
      </section>


    </main>
  );
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