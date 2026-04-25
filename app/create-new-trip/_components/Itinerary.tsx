"use client"
import React, { useEffect, useState } from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HotelCardItems from './HotelCardItems';
import PlaceCardItem from './PlaceCardItem';
import { useTripDetail } from '@/app/provider';
import { Activity, TripInfo } from './ChatBox';

// const TRIP_DATA = {

//   "destination": "Pune",
//   "duration": "2 days",
//   "origin": "Mumbai",
//   "budget": "Moderate",
//   "group_size": "Family (3 to 5 People)",
//   "hotels": [
//     {
//       "hotel_name": "The Westin Pune Koregaon Park",
//       "hotel_address": "36/3-B, Mundhwa Road, Koregaon Park Annexe, Ghorpadi, Pune, Maharashtra 411001",
//       "price_per_night": "₹6,500",
//       "hotel_image_url": "https://example.com/westin-pune.jpg",
//       "geo_coordinates": {
//         "latitude": 18.5333,
//         "longitude": 73.9042
//       },
//       "rating": 4.5,
//       "description": "A luxurious hotel with family-friendly amenities, including a pool, spa, and multiple dining options."
//     },
//     {
//       "hotel_name": "Novotel Pune Nagar Road",
//       "hotel_address": "Plot No. 201 A & B, Nagar Bypass Road, Yerwada, Pune, Maharashtra 411006",
//       "price_per_night": "₹5,000",
//       "hotel_image_url": "https://example.com/novotel-pune.jpg",
//       "geo_coordinates": {
//         "latitude": 18.5204,
//         "longitude": 73.8901
//       },
//       "rating": 4.3,
//       "description": "A modern hotel with spacious rooms, a kids' play area, and a multi-cuisine restaurant."
//     }
//   ],
//   "itinerary": [
//     {
//       "day": 1,
//       "day_plan": "Arrive in Pune, check into hotel, and visit Shaniwar Wada and Aga Khan Palace.",
//       "best_time_to_visit_day": "Morning to Evening",
//       "activities": [
//         {
//           "place_name": "Shaniwar Wada",
//           "place_details": "A historic fortification and palace, known for its architectural grandeur and historical significance.",
//           "place_image_url": "https://example.com/shaniwar-wada.jpg",
//           "geo_coordinates": {
//             "latitude": 18.5196,
//             "longitude": 73.8553
//           },
//           "place_address": "Shaniwar Peth, Pune, Maharashtra 411030",
//           "ticket_pricing": "₹25 for adults, ₹10 for children",
//           "time_travel_each_location": "2-3 hours",
//           "best_time_to_visit": "Morning or Evening"
//         },
//         {
//           "place_name": "Aga Khan Palace",
//           "place_details": "A historic palace with beautiful gardens, known for its role in India's independence movement.",
//           "place_image_url": "https://example.com/aga-khan-palace.jpg",
//           "geo_coordinates": {
//             "latitude": 18.5519,
//             "longitude": 73.9014
//           },
//           "place_address": "Gandhi National Memorial Society, Aga Khan Palace Road, Pune, Maharashtra 411006",
//           "ticket_pricing": "₹50 for adults, ₹25 for children",
//           "time_travel_each_location": "1-2 hours",
//           "best_time_to_visit": "Morning or Late Afternoon"
//         }
//       ]
//     },
//     {
//       "day": 2,
//       "day_plan": "Visit Lavasa for a day trip, explore Pataleshwar Cave Temple, and depart for Mumbai.",
//       "best_time_to_visit_day": "Morning to Evening",
//       "activities": [
//         {
//           "place_name": "Lavasa",
//           "place_details": "A picturesque hill station with scenic views, boating, and cycling activities.",
//           "place_image_url": "https://example.com/lavasa.jpg",
//           "geo_coordinates": {
//             "latitude": 18.7996,
//             "longitude": 73.4939
//           },
//           "place_address": "Lavasa, Pune, Maharashtra",
//           "ticket_pricing": "Free entry, activity charges apply",
//           "time_travel_each_location": "4-5 hours",
//           "best_time_to_visit": "Morning to Afternoon"
//         },
//         {
//           "place_name": "Pataleshwar Cave Temple",
//           "place_details": "An ancient rock-cut temple dedicated to Lord Shiva, known for its intricate carvings.",
//           "place_image_url": "https://example.com/pataleshwar-cave-temple.jpg",
//           "geo_coordinates": {
//             "latitude": 18.527,
//             "longitude": 73.8481
//           },
//           "place_address": "Jangali Maharaj Road, Revenue Colony, Shivajinagar, Pune, Maharashtra 411005",
//           "ticket_pricing": "Free entry",
//           "time_travel_each_location": "1 hour",
//           "best_time_to_visit": "Morning or Evening"
//         }
//       ]
//     }
//   ]
// }


function Itinerary() {
  //@ts-ignore
  const {tripDetailInfo, setTripDetailInfo} = useTripDetail();
  const [tripData , setTripData] = useState<TripInfo|null>(null)

  useEffect(()=>{
    tripDetailInfo&&setTripData(tripDetailInfo)
  },[tripDetailInfo])

  const data = tripData?  [
    {
      title: "Recomended Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {tripData?.hotels.map((hotel, index) => (
            <HotelCardItems hotel={hotel} key={index}/>
          ))}
        </div>
      ),
    },
    ...tripData?.itinerary.map((dayData) => ({
      title: `Day ${dayData?.day}`,
      content: (
        <div>

          <p>Best Time: {dayData?.best_time_to_visit_day}</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {dayData?.activities.map((activity,index) => (
              <PlaceCardItem activity={activity} />
            ))}
          </div>

        </div>
      )
    }))

  ]:[];
  return (
    <div className="relative w-full h-[83vh] overflow-auto">
      {/* @ts-ignore */}
      {tripData? <Timeline data={data} tripData={tripData} /> 
      : 
      <Image src={'/travelstrart.png'} alt='travel' width={700}
      height={700}
      className='w-full h-full object-cover rounded-3xl'
      />}
    </div>
  );
}

export default Itinerary