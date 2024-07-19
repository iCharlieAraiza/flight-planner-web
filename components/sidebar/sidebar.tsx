import { ClipboardCheck, TowerControl, Map } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode } from 'react'


type Props = {
    slug: string
}

export const Sidebar = (props: Props) => {
    const { slug } = props
    return (
        <aside className="w-16 bg-[#1E384F] h-full">
            <nav>
                <div className="p-2">
                    <LogoSvg />
                </div>
                <ul>
                    <MenuItem active={slug === '/'} slug={'/'}>
                        <ClipboardCheck size={22} />
                        <p>Board</p>
                    </MenuItem>
                    <MenuItem active={slug === 'airport'} slug={'airport'}>
                        <TowerControl size={22} />
                        <span>Airport</span>
                    </MenuItem>
                    <MenuItem active={slug === 'itinerary'} slug={'itinerary'}>
                        <ClipboardCheck size={22} />
                        <span>Itinerary</span>
                    </MenuItem>
                    <MenuItem active={slug === 'map'} slug={'map'}>
                        <Map size={22} />
                        <span>Map</span>
                    </MenuItem>
                </ul>
            </nav>
        </aside>
    )
}

const MenuItem = ({ children, active, slug }: { active?: boolean, children: ReactNode, slug: string }) => {
    return (
        <Link href={slug}
            className={`flex flex-col items-center justify-center gap-1 cursor-pointer py-2 hover:bg-[#3e5c72] ${active && 'bg-[#0099ff47] active'}`}>
                {children}
        </Link>
    )
}

function LogoSvg() {
    return (
        <svg
            xmlns=" dhttp://www.w3.org/2000/svg"
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

