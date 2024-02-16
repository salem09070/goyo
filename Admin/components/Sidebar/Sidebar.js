import "./Sidebar.css";

import { IoHome } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineTool } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiCoupon2Line } from "react-icons/ri";
import { GrShop } from "react-icons/gr";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <dvi className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle"> Dashboard</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <IoHome size="40px" className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem active">
                        <AiOutlineTeam size="40px" className="sidebarIcon"/>
                            셀러 관리
                        </li>
                        <li className="sidebarListItem active">
                            <AiOutlineTool  size="40px" className="sidebarIcon"/>
                            광고 수정
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">SEX</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <AiOutlineUser size="40px" className="sidebarIcon"/>
                            유저관리
                        </li>
                        <li className="sidebarListItem active">
                        <RiCoupon2Line  size="40px" className="sidebarIcon"/>
                            쿠폰발급
                        </li>
                        <li className="sidebarListItem active">
                            <GrShop  size="40px" className="sidebarIcon"/>
                            주문현황
                        </li>
                    </ul>
                </div>
                
            </dvi>
        </div>
    )
}