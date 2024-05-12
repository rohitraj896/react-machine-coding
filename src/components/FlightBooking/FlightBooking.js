import { useState } from "react";
const todayDate = new Date().toISOString().split("T")[0];

const FlightBooking = () => {
  const [tripType, setTripType] = useState("one-way");
  const [startDate, setStartDate] = useState(todayDate);
  const [endDate, setEndDate] = useState(startDate);

  const handleStartDate = e => {
    setStartDate(e.target.value);
  };

  const handleEndDate = e => {
    setEndDate(e.target.value);
  };
  const handleTripType = e => {
    setTripType(e.target.value);
  };

  const bookedTicket = e => {
    e.preventDefault();
    if (tripType === "one-way") {
      alert(`You booked ticket one-way on ${startDate}`);
    } else {
      alert(
        `You booked ticket one-way on ${startDate} and return ticket on ${endDate}`
      );
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="one-way">
          <input
            type="radio"
            value="one-way"
            checked={tripType === "one-way"}
            onChange={handleTripType}
          />
          One way
        </label>
        <label>
          <input
            onChange={handleTripType}
            type="radio"
            value="return"
            checked={tripType === "return"}
          />
          Return
        </label>

        <div>
          <input type="date" min={todayDate} onChange={handleStartDate} /> One
          way
        </div>

        {tripType === "return" && (
          <div>
            <input type="date" min={startDate} onChange={handleEndDate} />
            Return
          </div>
        )}
        <button style={{ border: "1px solid black" }} onClick={bookedTicket}>
          Booked
        </button>
      </form>
    </div>
  );
};

export default FlightBooking;
