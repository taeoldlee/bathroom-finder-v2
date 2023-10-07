// Individual bathroom component that shows on the ClosestBathrooms page
import { Title } from './Title';
import { Text } from './Text';
import React from 'react';

export function BathroomDisplay({ bathroom }) {
  const features = [];
  if (bathroom.ADA) {
    features.push('ADA Accessible');
  }
  if (bathroom.PP) {
    features.push('Period Products');
  }
  if (bathroom.PTowel) {
    features.push('Paper Towels');
  }
  if (bathroom.Changing) {
    features.push('Changing Table');
  }

const bathroomHours = bathroom.hours;

// helper function to convert 24h time to 12h time
const convertTime = (time) => {
    let [hours, minutes] = time.split(":");
    let period = "AM";
    
    if (hours >= 12) {
      period = "PM";
      if (hours > 12) hours -= 12;
    }
    if (hours === "00") {
      hours = "12";
    }
    
    return `${hours}:${minutes} ${period}`;
  };


  return (
    <>
      <Title justification="text-center pt-1 pb-1 text-lg">
        {bathroom["BuildingNickname"]}, Floor {bathroom.Floor}, Room {bathroom.Room}
      </Title>

      
      <div style={{textDecoration: 'none', overflow: 'hidden', maxWidth: '100%', width: '500px', height: '310px'}}>
        <div id="display-google-map" style={{height: '100%', width: '100%', maxWidth: '100%'}}>
          <iframe style={{height: '100%', width: '100%', border: '0'}} src={`https://www.google.com/maps/embed/v1/place?q=${bathroom.Lat},${bathroom.Long}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}></iframe>
        </div>
      </div>


        <Text justification="text-center pt-2 text-base font-bold">
            Visitor Hours:
        </Text>
        <div className="grid grid-cols-2 text-sm leading-4">
        {Object.keys(bathroomHours).map((day) => (
            <React.Fragment key={day}>
            <div className="text-left">
                {day.charAt(0).toUpperCase() + day.slice(1)}
            </div>
            <div className="text-right">
                {bathroomHours[day].open === "0:00" && bathroomHours[day].close === "0:00" ? (
                "CLOSED"
                ) : (
                `${convertTime(bathroomHours[day].open)} - ${convertTime(bathroomHours[day].close)}`
                )}
            </div>
            </React.Fragment>
        ))}
        </div>


      
      <Text justification="text-center py-2 text-xs">
        Extra Notes: {bathroom.ExtraInfo}
      </Text>
      <Text justification="text-center py-2 text-xs">
        Features: {features.join(', ')}
      </Text>
      <Text justification="text-center pt-2 pb-5 text-xs">
        <a 
          className="text-blue-500" 
          href="https://docs.google.com/forms/d/1vyvpFzhzzt_MSuNIuukqQA6OnVE_I7Uznp6-ygttKyI/viewform?edit_requested=true"
        >
          Bathroom Feedback Form →
        </a>
      </Text>
      <svg className="fill-slate-100" width="80%" height="15">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="3" />
      </svg>
    </>
  );
}
