import React, { useState, useEffect, useRef } from "react";
import { Calendar, defaultStaticRangesm, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function CustomCalendar({ isVisible, onClose, onSelectDates }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDatesOctober, setSelectedDatesOctober] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });

  const [selectedDatesNovember, setSelectedDatesNovember] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });

  const calendarRef = useRef(null);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  const handleOctoberDateSelection = (ranges) => {
    setSelectedDatesOctober(ranges.selection);
    onSelectDates(ranges.selection);
  };

  const handleNovemberDateSelection = (ranges) => {
    setSelectedDatesNovember(ranges.selection);
    onSelectDates(ranges.selection);
  };

  return (
    <div
      ref={calendarRef}
      style={{
        position: "absolute",
        top: "165px",
        left: "70.2%",
        transform: "translateX(-50%)",
        zIndex: "1000",
        display: isVisible ? "block" : "none",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        padding: "20px",
        display: "flex",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <DateRangePicker
          ranges={[selectedDatesOctober]}
          onChange={handleOctoberDateSelection}
          theme={{
            dateRange: {
              color: "#1a73e8", 
            },
            calendar: {
              background: "#fff",
              color: "#333",
            },
          }}
          months={2}
          direction="horizontal"
          preventSnapRefocus={true}
          calendarFocus="backwards"
        />
      </div>
    </div>
  );
}

export default CustomCalendar;
