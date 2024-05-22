import { useAuthMethod } from "@/authHooks";
import { AuthUser, TEXT_COLOR, TEXT_GRAY_NO1 } from "@/constasts/appConstats";
import { RootState } from "@/redux/store";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import NavMenu from "./NavMenu";

interface AvataProps {
    src: AuthUser
};

const SideBar = () => {
    const { logout } = useAuthMethod();
    const users = useSelector((state: RootState) => state.users);

    const Avata:React.FC<AvataProps> = ({ src })=>{

        return(
            <div
                style={{
                    backgroundColor:"#ddc3a8",
                    width:70,
                    height:70,
                    borderRadius:"100%",
                    padding:13,
                    fontSize:28,
                    color:"#fff",
                    textAlign:"center"
                }}
            >
                {src?.displayName[0]}
            </div>
        )
    }
    
    return(
        <div className="sidebar">
            <div className="topSection">
                <div className="profile">
                    { users && (
                        <>
                            <Avata src={users.userAuth} />
                            <div className="user-info">
                                <h5 style={{color:TEXT_COLOR, marginBottom:4}}>{users.userAuth?.displayName}</h5>
                                <p style={{fontSize:11, marginBottom:0, color:TEXT_GRAY_NO1}}>{users.userAuth?.about}</p>
                            </div>
                        </>
                    ) }
                </div>
                <div className="nav-menu">
                    <NavMenu />
                </div>
            </div>
            <div className="bottomSection">
                <a onClick={logout} style={{
                    fontWeight:600,
                    cursor:"pointer",
                    color:TEXT_COLOR
                }}><MdLogout size={22} /> ออกจากระบบ</a>
            </div>
        </div>
    )
};

export default SideBar;