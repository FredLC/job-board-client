import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Jobs = ({ job }) => {
  return (
    <div className='job'>
      <Card>
        <CardContent>
          <Typography variant='h6'>{job.title}</Typography>
          <Typography variant='body1'>{job.company}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Jobs;
