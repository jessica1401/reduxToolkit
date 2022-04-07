import React from "react";

interface ReservationCardTypes {
    name: string
}

function ReservationCard(props: ReservationCardTypes) {
  return (
    <div
      className="reservation-card-container"
    >
      <p>{props.name}</p>
    </div>
  );
}

export default ReservationCard;