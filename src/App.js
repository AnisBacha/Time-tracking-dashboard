import Person from './Person';
import Report from './Report';
import ReportType from './ReportType'
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider> 
        <header>
          <Person />
          <ReportType />
        </header>
        <Report />
      </DataProvider>
    </div>
  );
}

export default App;
