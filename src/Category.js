import { useContext, useEffect, useState } from 'react';
import DataContext from './context/DataContext';

import WorkIcon from './images/icon-work.svg';
import PlayIcon from './images/icon-play.svg';
import StudyIcon from './images/icon-study.svg';
import ExerciseIcon from './images/icon-exercise.svg';
import SocialIcon from './images/icon-social.svg';
import SelfIcon from './images/icon-self-care.svg';

const Category = ({report}) => {
    const { reportType } = useContext(DataContext)
    const [icon, setIcon] = useState();
    const [catgeoryclass, setCategoryClass] = useState('');
    
    
    useEffect(() => {
        setCategoryClass( (report.title).toLowerCase().replace(' ' , '-') )
        setIcon(
            report.title === 'Work' ? WorkIcon :
            report.title === 'Play' ? PlayIcon :
            report.title === 'Study' ? StudyIcon :
            report.title === 'Exercise' ? ExerciseIcon :
            report.title === 'Social' ? SocialIcon : SelfIcon
        )
    } , [report])
    return (
        <section className={`card card__${catgeoryclass}`}>
            <section className={`banner banner__${(catgeoryclass)}`}>     
                <img src={icon} alt='Banner' /> 
            </section>
            <section className='card-info'>
                <h2>{report.title}</h2>
                <section className='timeframe'>
                    <p className='current-timeframe'>
                        {
                            reportType === 'Daily' ? report.timeframe.daily.current:
                            reportType === 'Weekly' ? report.timeframe.weekly.current:
                            report.timeframe.monthly.current
                        }hrs
                    </p>
                    <p className='previous-timeframe'>
                        {
                            reportType === 'Daily' ? `Last Day - ${report.timeframe.daily.previous}`:
                            reportType === 'Weekly' ? `Last Week - ${report.timeframe.weekly.previous}` :
                            `Last Month - ${report.timeframe.monthly.previous}`
                        }hrs
                    </p>
                </section>
            </section>
            
        </section>
    )
}

export default Category
