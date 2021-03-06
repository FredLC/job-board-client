import React from 'react';
import JobModal from './JobModal';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Job from './Job';

const Jobs = ({ jobs }) => {
  // modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // pagination
  const [activeStep, setActiveStep] = React.useState(0);
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='jobs'>
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <div className='header'>
        <Typography variant='h3' component='h1'>
          <strong>Only Entry Level Software Engineering Jobs</strong>
        </Typography>
        <Typography variant='h5' component='h2'>
          <strong>{numJobs} job opportunities!</strong>
        </Typography>
      </div>
      {jobsOnPage.map((job, i) => (
        <Job
          key={i}
          job={job}
          onClick={() => {
            handleClickOpen();
            selectJob(job);
          }}
        />
      ))}
      <div>
        Page {activeStep + 1} of {numPages}
      </div>
      <MobileStepper
        variant='progress'
        steps={numPages}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === numPages - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Jobs;
