import { useContext, useState } from "react";
import DataContext from './context/DataContext';


const ReportType = () => {
    const {setReportType} = useContext(DataContext);
    const [checked, setChecked] = useState('Weekly');

    const isChecked = (value) => value === checked;    
    const handleSelect = (e) => {
        setChecked(e.target.value);
        setReportType(e.target.value);
    }
    
    return (
        <section className="header__type">
            <div>    
                <input
                    className="radio"
                    type="radio"
                    name="type" 
                    id="daily" 
                    value='Daily'
                    checked={isChecked('Daily')}
                    onChange={(e) => handleSelect(e)}
                />
                <label htmlFor="daily">Daily</label>

            </div>

            <div>
                <input
                    className="radio"   
                    type="radio" 
                    name="type" 
                    id="weekly" 
                    value='Weekly'
                    checked={isChecked('Weekly')}
                    onChange={(e) => handleSelect(e)}
                />
                <label htmlFor="weekly">Weekly</label>

            </div>

            <div>
                <input 
                    className="radio"
                    type="radio" 
                    name="type" 
                    id="monthly" 
                    value='Monthly'
                    checked={isChecked('Monthly')}
                    onChange={(e) => handleSelect(e)}
                />
                <label htmlFor="monthly">Monthly</label>
            </div>
        </section>
    )
}

export default ReportType
