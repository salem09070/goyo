import "./Admin.css";
import { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { Topbar } from "./components/Topbar/Topbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Home } from "./components/Home/Home";
export const Admin = () => {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar/>
                <div className="others">
                    <Home/>
                </div>
            </div>
        </>
    )
}
