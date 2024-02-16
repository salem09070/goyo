import { ToolTips } from 'rechart'
import '../Chart/Chart.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Responsive, ResponsiveContainer
} from 'recharts'

export const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
                <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart data={data}>
                        <XAxis dataKey= "name" stroke = "5550bd"></XAxis>
                        <Line type = "monotone" dataKey = {dataKey}/>
                        <Tooltip/>{
                            grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                        }
                        
                    </LineChart>
                </ResponsiveContainer>
            
        </div>
    )
}