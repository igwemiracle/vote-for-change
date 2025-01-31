// src/components/CardContainer.jsx
import React from "react";
import CardLayout from "./CardLayout";
import { cardData } from "../../constant";

const CardContainer = ({ scrollToElectionDetails }) => {
  return (
    <div
      className="relative -mt-20 z-20 flex justify-center gap-4 flex-wrap
      "
    >
      {cardData.map((card) => (
        <CardLayout
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          buttonText={card.buttonText}
          link={card.link}
          scrollToElectionDetails={scrollToElectionDetails}
        />
      ))}
    </div>
  );
};

export default CardContainer;
