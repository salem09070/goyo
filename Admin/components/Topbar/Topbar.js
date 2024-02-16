import { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import "./Topbar.css";

export const Topbar = () => {
    return (
        <dvi className="topbar">
            <dvi className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        GoyoCompany
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconConrainer">
                        <CiBellOn size="40" />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconConrainer">
                        <CiBellOn size="40" />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconConrainer">
                        <CiBellOn size="40" />
                        <span className="topIconBadge">2</span>
                    </div>
                    <img
                        src="https://newsimg.sedaily.com/2023/11/02/29X2VW4OHU_1.jpg"
                        alt=""
                        className="topAvartar"
                    />
                </div>
            </dvi>
        </dvi>
    )
}

