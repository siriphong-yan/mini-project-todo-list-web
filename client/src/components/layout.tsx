import { useAuthUser } from "@/authHooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SideBar from "./SideBar";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout:React.FC<LayoutProps> = ({ children }) => {
    const { user, isLoading } = useAuthUser();
    const router = useRouter()
    
    useEffect(()=>{
        if(user == null){
            router.push('/signin');
        }
    }, [user]);

    return (
        <div className="contentOfMainLayout">
            <SideBar />
            <main>
                <div className="main">
                    <div className="main-content">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout;