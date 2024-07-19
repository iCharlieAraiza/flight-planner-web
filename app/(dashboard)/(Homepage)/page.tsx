import { Sidebar } from '@/components/sidebar/sidebar';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="w-screen h-screen bg-slate-500 flex overflow-hidden text-[11px] select-none">
      <Sidebar slug="/" />
    </main>
  )
}

export default page;