import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../SelectableDemographicsBanner';
import demographicsImage from '../../../doc/assets/demographicsCat.jpg';

export default () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        id="deceased-demographics-banner"
        applicationContent={<span className="risk-score">5%</span>}
        age="27 Years"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="May 9, 1993"
        deceasedDate="March 12, 2020"
        gender="M"
        genderAria="Male"
        identifiers={[
          {
            label: 'MRN',
            value: '12343',
            identifierAria: 'MRN 1 2 3 4 5',
          },
          {
            label: 'REA',
            value: '3JSDA',
            identifierAria: 'R E A 3JSDA',
          },
        ]}
        personName="Johnathon Doe"
        preferredFirstName="John"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};
