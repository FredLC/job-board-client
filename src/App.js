import React from 'react';
import './App.css';
import Jobs from './components/Jobs';

const mockJobs = [
  {
    title: 'Full Stack Developer',
    company: 'OpenPlay',
  },
  {
    title: 'Ruby on Rails Developer',
    company: 'Reva Media',
  },
  {
    title: 'Full Stack Developer',
    company: 'Links Technology',
  },
];

function App() {
  return (
    <div className='App'>
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
