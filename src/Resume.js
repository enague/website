import React from 'react';
import General from './Styles.js';

const Resume = () => (
    <General>
      <h2>Resume</h2>
      <iframe src="https://docs.google.com/viewer?url=https://s3.us-east-2.amazonaws.com/portfolio-ericnague/Eric+Nague+Resume.pdf&embedded=true" style={{height: '600px', width: '500px'}}></iframe>
    </General>
  );

  export default Resume;