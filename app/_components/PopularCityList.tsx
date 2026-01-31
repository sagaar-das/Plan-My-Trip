"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ArrowDown } from "lucide-react";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destinations to visit 
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Varanasi, UP",
    title: "The world's oldest living city",
    src: "https://images.pexels.com/photos/16747080/pexels-photo-16747080.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-1306815-16747080.jpg&fm=jpg",
    content: <DummyContent />,
  },
  {
    category: "Leh-Ladakh",
    title: "Land of High Passes",
    src: "https://images.pexels.com/photos/5014924/pexels-photo-5014924.jpeg?cs=srgb&dl=pexels-arthousestudio-5014924.jpg&fm=jpg",
    content: <DummyContent />,
  },
  {
    category: "Jaipur, Rajasthan",
    title: "The Pink City",
    src: "https://images.pexels.com/photos/12931430/pexels-photo-12931430.jpeg?cs=srgb&dl=pexels-visualsbymayur-12931430.jpg&fm=jpg",
    content: <DummyContent />,
  },

  {
    category: "Manali, Himachal Pradesh",
    title: "Valley of the Gods",
    src: "https://images.pexels.com/photos/31337120/pexels-photo-31337120.jpeg?cs=srgb&dl=pexels-srikanth-m-2150802154-31337120.jpg&fm=jpg",
    content: <DummyContent />,
  },
  {
    category: "Goa",
    title: "Pearl of the Orient",
    src: "https://thumbs.dreamstime.com/b/word-goa-beach-nature-holiday-background-66377012.jpg",
    content: <DummyContent />,
  },
  {
    category: "Rishikesh, Uttarakhand",
    title: "Yoga Capital of the World",
    src: "https://images.pexels.com/photos/29412639/pexels-photo-29412639.jpeg?cs=srgb&dl=pexels-bhaarat-100nu-3633199-29412639.jpg&fm=jpg",
    content: <DummyContent />,
  },
];