import { TEXT_COLOR } from "@/constasts/appConstats";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "react-bootstrap";

const NavMenu = () => {
    const pathname = usePathname();

    return(
        <>
            <h5 style={{color:TEXT_COLOR}}>TASK</h5>
            <Nav className="flex-column">
                <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} style={{color:TEXT_COLOR}}>วันนี้</Link>
                <Nav.Link eventKey="disabled" disabled>
                    ปฏิทิน
                </Nav.Link>
                <Link href="/all-tasks" className={`nav-link ${pathname === '/all-tasks' ? 'active' : ''}`} style={{color:TEXT_COLOR}}>ทั้งหมด</Link>
            </Nav>
        </>
    )
}

export default NavMenu;