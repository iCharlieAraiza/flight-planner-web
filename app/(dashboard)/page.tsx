import { ClipboardCheck } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-slate-500 flex overflow-hidden text-[11px]">

      {/* Sidebar */}

      <aside className="w-16 bg-slate-400 h-full">
        <nav>
          <ul>
            <MenuItem active={true}>
              <ClipboardCheck size={20} />
              <p>Board</p>
            </MenuItem>
            <MenuItem>
              <ClipboardCheck size={20} />
              <span>Map</span>
            </MenuItem>
            <li>Airport</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main content section */}

      <section className="flex-1 bg-slate-300">
        <nav className="flex bg-slate-700">
          <ul className="flex">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Settings</li>
          </ul>
        </nav>

        <section className="flex h-full">
          <nav className="w-28 md:w-52 lg:w-60">
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
      className={`flex flex-col items-center justify-center gap-1 cursor-pointer py-2 hover:bg-slate-600 ${active && 'bg-slate-600'}`}>
      {children}
    </li>
  )
}