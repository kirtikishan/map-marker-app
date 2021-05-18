import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import backgroundmap from "./images/backgroundmap.jpg";
import Marker from "./components/map-marker";
import MapDetails from "./components/map-details";
import data from "./map-data.json";
import { hideModal } from "./redux/actions/mapActions";

const MainContainer = styled.div`
  width: 100%;
  height: 800px;
  padding-top: 50px;
  padding-left: 50px;
`;

const BackgroundMap = styled.div`
  background-image: url(${backgroundmap});
  background-repeat: no-repeat;
  background-size: auto;
  position: relative;
  width: 100%;
  height: 100%;
`;

const createMarkerKey = (marker) => {
  const { name } = marker;
  const namedKey = name ? name.replace(/\s/g, "") + "markerID" : "markerID";
  return namedKey;
};

function App(props) {
  // assigning the imported JSON data to markerdata as a setup.
  const markerData = data;
  const {
    mapData: { modalData, show },
    hideModal,
  } = props;

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };

  return (
    <MainContainer>
      <BackgroundMap onClick={closeModal}>
        {markerData.map((marker, index) => (
          <Marker markerProps={marker} key={createMarkerKey(marker, index)} />
        ))}
      </BackgroundMap>
      {show && <MapDetails details={modalData} />}
    </MainContainer>
  );
}

function mapStateToProps(state) {
  return {
    mapData: state.mapData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      hideModal,
    },
    dispatch
  );
}

App.propTypes = {
  mapData: PropTypes.shape({
    modalData: PropTypes.shape({}),
    show: PropTypes.bool,
  }),
  hideModal: PropTypes.func.isRequired,
};

App.defaultProps = {
  mapData: {
    modalData: {
      name: "",
      authority: "",
      numGuards: "",
      population: "",
      type: "",
      wealth: "",
    },
    show: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
