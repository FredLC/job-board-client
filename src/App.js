import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Jobs from './components/Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCallback) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  updateCallback(json);
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className='App'>
      <Banner />
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
