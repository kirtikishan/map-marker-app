import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

import configureMockStore from "redux-mock-store";
import MapMarker from "../map-marker";

const mockStore = configureMockStore();
const store = mockStore({});

describe("MapMarker", () => {
  it("should render map marker", () => {
    const mapObject = {
      markerProps: {
        position: [500, 65],
      },
      mapData: {
        show: true,
        modalData: {
          name: "Black Crystal",
          type: "small town",
          population: 1385,
          wealth: 29842,
          authority: "constable",
          numGuards: 13,
          position: [244, 141],
        },
      },
    };

    const tree = shallow(
      <Provider store={store}>
        <MapMarker props={mapObject} />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
