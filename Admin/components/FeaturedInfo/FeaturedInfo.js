import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import "./FeaturedInfo.css";

export const FeaturedInfo = () =>{
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <GoArrowDown className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,234</span>
                    <span className="featuredMoneyRate">-3.4 <GoArrowDown  className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,415</span>
                    <span className="featuredMoneyRate">+11.4 <GoArrowUp  className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
        </div>
    )
}