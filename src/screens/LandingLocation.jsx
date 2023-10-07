// Landing page, get location
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import React from "react";

export function LandingLocation() {
    const navigate = useNavigate();
    
    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
          (position) => {
            navigate('/closest-bathrooms', {
              state: {
                location: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                },
              },
            });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      }, [navigate]);

    return (
        <>
            <Title justification = "text-left">
                Location Access
            </Title>
            
            <Text justification = "text-center">
                To start, please allow access to your location. You may have to allow location access from settings.
            </Text>

            <Text justification = "text-center pt-5">
                Bathrooms may take a moment to load after allowing location access. 
            </Text>
        
        </>
    )
}