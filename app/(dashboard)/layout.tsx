import React from 'react'

type Props = {
    children?: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <main className="w-screen h-screen bg-slate-500 flex overflow-hidden text-[11px] select-none">
                {children}
            </main>
        </>
    )
}


