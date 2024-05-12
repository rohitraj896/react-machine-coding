import { useState } from "react";
const todayDate = new Date().toISOString().split("T")[0];

const FlightBooking = () => {
  const [tripType, setTripType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(todayDate);
  const [returnDate, setReturnDate] = useState(departureDate);

  const handledepartureDate = e => {
    setDepartureDate(e.target.value);
  };

  const handlereturnDate = e => {
    setReturnDate(e.target.value);
  };
  const handleTripType = e => {
    setTripType(e.target.value);
  };

  const bookedTicket = e => {
    e.preventDefault();
    if (tripType === "one-way") {
      alert(`You booked ticket one-way on ${departureDate}`);
    } else {
      alert(
        `You booked ticket one-way on ${departureDate} and return ticket on ${returnDate}`
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
          <input type="date" min={todayDate} onChange={handledepartureDate} />{" "}
          One way
        </div>

        {tripType === "return" && (
          <div>
            <input
              type="date"
              min={departureDate}
              onChange={handlereturnDate}
            />
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
