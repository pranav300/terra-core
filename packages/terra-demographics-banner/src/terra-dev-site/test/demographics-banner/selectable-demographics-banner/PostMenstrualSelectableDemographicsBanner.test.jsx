import React, { useState } from 'react';
import Image from 'terra-image';
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
        id="post-menstrual-demographics-banner"
        applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
        age="27 Years"
        dateOfBirth="May 9, 1993"
        gender="M"
        genderAria="Male"
        identifiers={[
          {
            label: 'MRN',
            value: '12343',
            ariaLabel: 'MRN 1 2 3 4 5',
          },
          {
            label: 'REA',
            value: '3JSDA',
            ariaLabel: 'R E A 3JSDA',
          },
        ]}
        personName="Johnathon Doe"
        photo={<Image alt="My Cat" src={demographicsImage} />}
        postMenstrualAge="May 13, 2020"
        preferredFirstName="John"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

