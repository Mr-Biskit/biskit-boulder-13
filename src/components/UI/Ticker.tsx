import React from "react";

type TickerProps = {
  messages: string[];
};

const Ticker = ({ messages }: TickerProps) => {
  return (
    <div className="ticker">
      <div className="ticker__items">
        {messages.map((message, index) => (
          <span key={index} className="ticker__item">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
