import { FeaturedInfo } from "../FeaturedInfo/FeaturedInfo"
import { Chart } from "../Chart/Chart";
import "./Home.css";
import chartData from '../../../../backend/db/chart'
import { WidgetLg } from "../WidgetLg/WidgetLg";
import { WidgetSm } from "../WidgetSm/WidgetSm";

export const Home = () => {
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart
                data= {chartData}
                title = "User Analutics"
                grid
                dataKey = "Active User"
            />
            <div className="homeWidhets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}