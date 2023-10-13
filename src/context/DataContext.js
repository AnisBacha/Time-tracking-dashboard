import React from 'react';
import { createContext, useState } from 'react';


const DataContext = createContext({});


export const DataProvider = ({children}) => {
    
    const [report] = useState([
        {
          title: "Work",
          timeframe: {
           daily: {
              current: 5,
              previous: 7
            },
            weekly: {
              current: 32,
              previous: 36
            },
            monthly: {
              current: 103,
              previous: 128
            }
          }
        },
        {
          title: "Play",
          timeframe: {
           daily: {
              current: 1,
              previous: 2
            },
            weekly: {
              current: 10,
              previous: 8
            },
            monthly: {
              current: 23,
              previous: 29
            }
          }
        },
        {
          title: "Study",
          timeframe: {
           daily: {
              current: 0,
              previous: 1
            },
            weekly: {
              current: 4,
              previous: 7
            },
            monthly: {
              current: 13,
              previous: 19
            }
          }
        },
        {
          title: "Exercise",
          timeframe: {
           daily: {
              current: 1,
              previous: 1
            },
            weekly: {
              current: 4,
              previous: 5
            },
            monthly: {
              current: 11,
              previous: 18
            }
          }
        },
        {
          title: "Social",
          timeframe: {
           daily: {
              current: 1,
              previous: 3
            },
            weekly: {
              current: 5,
              previous: 10
            },
            monthly: {
              current: 21,
              previous: 23
            }
          }
        },
        {
          title: "Self Care",
          timeframe: {
           daily: {
              current: 0,
              previous: 1
            },
            weekly: {
              current: 2,
              previous: 2
            },
            monthly: {
              current: 7,
              previous: 11
            }
          }
        }
      ])
      const [reportType, setReportType] = useState('Weekly')
	return(
		<DataContext.Provider value={{
            report, reportType, setReportType
		}}>
			{children}
		</DataContext.Provider>
	)
}
export default DataContext;