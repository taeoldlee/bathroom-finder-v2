// page that displays closest bathrooms
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import bathrooms from '../resources/bathrooms.json';
import { GenderTab } from "../components/GenderTab";
import { BathroomDisplay } from "../components/BathroomDisplay";
import { getPathLength } from 'geolib';
import { ToggleClosed } from "../components/ToggleClosed";


export function ClosestBathrooms() {
    const location = useLocation();
    const userLocation = location.state.location;
    
  
    const [selectedTab, setSelectedTab] = useState('All Gender');
    const [filteredBathrooms, setFilteredBathrooms] = useState([]);
    const [showClosed, setShowClosed] = useState(false);

    // open/closed bathroom logic
    const isBathroomOpen = (bathroom) => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      const currentDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][currentTime.getDay()];
    
      let isOpen = false;
      if (bathroom.hours && bathroom.hours[currentDay]) {
        const statusDay = bathroom.hours[currentDay];
        const openTime = statusDay.open.split(':').map(Number);
        const closeTime = statusDay.close.split(':').map(Number);
        
        const openHour = openTime[0];
        const openMinutes = openTime[1];
        const closeHour = closeTime[0];
        const closeMinutes = closeTime[1];
        
        if (openHour < closeHour || (openHour === closeHour && openMinutes <= closeMinutes)) {
          isOpen = (currentHour > openHour || (currentHour === openHour && currentMinutes >= openMinutes)) && (currentHour < closeHour || (currentHour === closeHour && currentMinutes <= closeMinutes));
        } else {
          isOpen = (currentHour > openHour || (currentHour === openHour && currentMinutes >= openMinutes)) || (currentHour < closeHour || (currentHour === closeHour && currentMinutes <= closeMinutes));
        }
      }
    
      return isOpen;
    };
    const handleToggleClosed = () => {
      setShowClosed(!showClosed);
    };
    
    useEffect(() => {
      if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
        console.error("User location is not available");
        return;
      }
      
      const sortedBathrooms = [...bathrooms].sort((a, b) => {
        const pathA = [
          { latitude: parseFloat(userLocation.latitude), longitude: parseFloat(userLocation.longitude) },
          { latitude: parseFloat(a.Lat), longitude: parseFloat(a.Long) }
        ];
        const pathB = [
          { latitude: parseFloat(userLocation.latitude), longitude: parseFloat(userLocation.longitude) },
          { latitude: parseFloat(b.Lat), longitude: parseFloat(b.Long) }
        ];
        const distanceA = getPathLength(pathA);
        const distanceB = getPathLength(pathB);
        return distanceA - distanceB;
      });
      
      let filtered = sortedBathrooms.filter(bathroom => bathroom.Gender === selectedTab);
      if (!showClosed) {
        filtered = filtered.filter(isBathroomOpen);
      }
      setFilteredBathrooms(filtered);
    }, [userLocation, selectedTab, showClosed]);
  
    return (
      <div className="flex flex-col items-center">
        <GenderTab selected={selectedTab} onSelect={setSelectedTab} />
        <ToggleClosed showClosed={showClosed} onToggle={handleToggleClosed} />
        {filteredBathrooms.map((bathroom, index) => {
          const path = [
            { latitude: userLocation.latitude, longitude: userLocation.longitude },
            { latitude: bathroom.Lat, longitude: bathroom.Long }
          ];
          const distance = getPathLength(path) / 1609.34; //mile conversion
          
          return <BathroomDisplay key={index} bathroom={bathroom} distance={distance.toFixed(1)} />;
        })}
      </div>
    );
  }
