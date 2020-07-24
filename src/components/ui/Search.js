import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Search = ({ getQuery }) => {
  const [startDate, setStartDate] = useState("");
  const onChange = (q) => {
    setStartDate(q);
    getQuery(formatDate(q));
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  console.log(startDate);
  return (
    <section className="search">
      <div className="d-flex justify-content-center py-3">
        <p className="pr-2">Select Date:</p>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => onChange(date)}
        />
      </div>
    </section>
  );
};

export default Search;
