import React from "react";
import hotels from "../data";

const UseSorting = (sortType) => {
  if (sortType === "ascending") {
    const sortedList = hotels.sort(function (a, b) {
      return a.hotelScore - b.hotelScore;
    });
    return [sortedList];
  }
  const sortedList = hotels.sort(function (a, b) {
    return b.hotelScore - a.hotelScore;
  });
  return [sortedList];
};

export default UseSorting;
