import SideBar from "../components/SideBar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (

        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            
            <div className="flex flex-col">

           

                <div className="flex flex-row p-2 w-full text-sl text-slate-900">
                    <div>
                    <SideBar />
                    </div>
                    

                    {children}
                    

                </div>

            </div>
        </div>
    );
}