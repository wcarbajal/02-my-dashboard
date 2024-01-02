import SideBar from '@/components/SideBar';
import Link from 'next/link'

export default function NotFound({ children }: { children: React.ReactNode; }) {
  return (

    <div className="w-screen h-screen bg-slate-100 overflow-y-scroll  antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex flex-col">



        <div className="flex flex-row w-full text-sl text-slate-900">
          <div>
            <SideBar />
          </div>


          <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-[#FF6A3D] text-sm rounded rotate-12 absolute">
              Page Not Found
            </div>
            <button className="mt-5">
              <div
                className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
              >
                <span
                  className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <Link href="/dashboard/main">Go Home</Link>
                </span>
              </div>
            </button>
          </main>


          {children}


        </div>

      </div>
    </div>



  )


}