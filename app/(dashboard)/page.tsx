import { ClipboardCheck, TowerControl, ExternalLink, SlidersVertical, Search, Info } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  return (
    <main className="w-screen h-screen bg-slate-500 flex overflow-hidden text-[11px]">

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
            <li className="bg-[#375777] rounded p-1">
              <ExternalLink size={18} />
            </li>
            <li className="bg-[#375777] rounded p-1">
              <SlidersVertical size={18} />
            </li>
          </ul>
        </nav>

        <section className="flex h-full text-[13px]">
          <nav className="w-60 md:w-64 lg:w-72 bg-[#234461] p-4">
            <header className="text-center">
              <div className="uppercase text-[19px] font-semibold bg-[#2d4c67] flex justify-between items-center px-2">
                <div></div>
                <h1>
                  EHAM - AMS
                </h1>
                <Info size={18} />
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

            <ul>
              <li>Home</li>
              <li>Dashboard</li>
              <li>Settings</li>
            </ul>
          </nav>
          <section className="flex-1 bg-blue-300 h-full">
            <h1 className="text-3xl">Dashboard</h1>
            <p>Welcome to the dashboard</p>
            <Image src="/logo.svg" alt="Logo" width={200} height={200} />
          </section>
        </section>
      </section>


    </main>
  );
}


const MenuItem = ({ children, active }: { active?: boolean, children: ReactNode }) => {
  return (
    <li
      className={`flex flex-col items-center justify-center gap-1 cursor-pointer py-2 hover:bg-[#3e5c72] ${active && 'bg-[#3e5c72] active'}`}>
      {children}
    </li>
  )
}