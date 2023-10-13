import { useContext } from 'react';
import DataContext from './context/DataContext';
import Category from './Category'
const Report = () => {
    const { report } = useContext(DataContext);
    return (
        <main>
            {
                report.map( report => (
                    <Category report={report} key={report.title}/>
                ))
            }
        </main>
    )
}

export default Report
