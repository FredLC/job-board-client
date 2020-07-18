import React from 'react';
import Typography from '@material-ui/core/Typography';
import Pll from 'react-pll';

const Job = ({ job, onClick }) => {
  const jobLanguages = [];
  const filterJobLanguages = (job) => {
    const programmingLanguages = [
      'python',
      'javascript',
      'ruby',
      'php',
      'java',
      'go',
      'swift',
      'typescript',
      'kotlin',
    ];
    const jobsArray = job.description.split(' ');
    for (let i = 0; i < jobsArray.length; i++) {
      for (let j = 0; j < programmingLanguages.length; j++) {
        if (jobsArray[i] === programmingLanguages[j]) {
          jobLanguages.push(programmingLanguages[j]);
        }
      }
    }
  };
  {
    filterJobLanguages(job);
  }
  return (
    <div onClick={onClick} className='job'>
      <div className='logo-wrapper'>
        <img className='logo' src={job.company_logo} />
      </div>
      <div className='job-position'>
        <Typography variant='h6' style={{ 'text-align': 'left' }}>
          {job.title}
        </Typography>
        <Typography variant='body1' className='secondary'>
          {job.company}
        </Typography>
        <Typography variant='body1' className='secondary'>
          {job.location}
        </Typography>
      </div>
      {jobLanguages.map((jobLanguage) => {
        return (
          <Pll
            className='languages'
            alt={`${jobLanguage} logo`}
            height={25}
            language={jobLanguage}
          />
        );
      })}
      <div>
        <Typography variant='body1'>
          {job.created_at.split(' ').slice(0, 3).join(' ')}
        </Typography>
      </div>
    </div>
  );
};

export default Job;
