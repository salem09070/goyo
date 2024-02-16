import "./WidgetSm.css";
import { FaEye } from "react-icons/fa";

export const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                New Join Member
            </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                    src="https://cdn.pickdailynews.com/news/photo/202310/551_1000_4927.jpg"
                    alt="asd"/>
                    
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                                장원영
                        </span>
                        <span className="widgetSmUserTitle">
                                첩
                        </span>
                    </div>
                    <button className="widgetSmButton">
                    <FaEye className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                    src="https://img.hankyung.com/photo/202310/BF.34773637.1.jpg"
                    alt="asd"/>
                    
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                                안유진
                        </span>
                        <span className="widgetSmUserTitle">
                                첩
                        </span>
                    </div>
                    <button className="widgetSmButton">
                    <FaEye className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                    src="https://i.namu.wiki/i/fkVvaZoIKCLmpjfKKflug4CkbHE6c2IG2tJmrV_t7cHhom7dyYOGeydJg2VjQpUr6P2I0lDdzuaI-_CgosIlYAaxt1XiOP2kqa2GF3rAIZUHyK5A5fSSwFnTWwVFy5H8dWRf2U-ARn3XpJ9ZQ0j0Yg.webp"
                    alt="asd"/>
                    
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                                카리나
                        </span>
                        <span className="widgetSmUserTitle">
                                정실
                        </span>
                    </div>
                    <button className="widgetSmButton">
                    <FaEye className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}