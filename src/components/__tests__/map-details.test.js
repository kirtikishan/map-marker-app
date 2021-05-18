import React from "react";
import { shallow } from "enzyme";
import MapDetails from "../map-details";

describe("MapDetails", () => {
  it("should render map details", () => {
    const details = {
      authority: "captain of the guard",
      name: "Oakheart",
      numGuards: 32,
      population: 3274,
      position: [89, 283],
      type: "large town",
      wealth: 299335,
    };
    const tree = shallow(<MapDetails props={details} />);
    expect(tree).toMatchSnapshot();
  });
});
