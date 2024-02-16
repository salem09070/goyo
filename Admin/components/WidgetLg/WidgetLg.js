import "./WidgetLg.css";

export const WidgetLg = () => {
    const Button = ({ type }) => {
        // Ensure there's a space between class names
        const className = `widgetLgButton ${type}`;
        return <button className={className}>{type}</button>;
    };


    return (
        <div className="widgetLg">
            <h3 className="widgetLgTilte"> Latest transactions </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Custome</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg"
                            src="https://cdn.pickdailynews.com/news/photo/202310/551_1000_4927.jpg"
                            alt="" />
                        <span className="widgetLgName">Jang WonYoung</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg"
                            src="https://cdn.pickdailynews.com/news/photo/202310/551_1000_4927.jpg"
                            alt="" />
                        <span className="widgetLgName">Jang WonYoung</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" className="widgetLgButton Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg"
                            src="https://cdn.pickdailynews.com/news/photo/202310/551_1000_4927.jpg"
                            alt="" />
                        <span className="widgetLgName">Jang WonYoung</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Panding" /></td>
                </tr>
            </table>
        </div>
    )
}