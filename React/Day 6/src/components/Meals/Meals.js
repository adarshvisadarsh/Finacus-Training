import React, { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvaiableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvaiableMeals />
    </Fragment>
  );
};

export default Meals;
