import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import marker from "../images/marker.png";
import markerSelected from "../images/marker-selected.png";
import { showModal } from "../redux/actions/mapActions";

const MarkerImage = styled.div`
  background-image: url(${(props) =>
    props.isMarkerSelected ? markerSelected : marker});
  background-repeat: no-repeat;
  background-size: auto;
  position: absolute;
  width: 25px;
  height: 40px;
  top: ${(props) => props.topPosition}px;
  left: ${(props) => props.leftPosition}px;
  cursor: pointer;
`;

const Marker = (props) => {
  const {
    markerProps,
    showModal,
    mapData: { modalData, show },
  } = props;
  const { name: modalName } = modalData;
  const { position, name } = markerProps;
  let isMarkerSelected = false;

  if (show && modalName === name) {
    isMarkerSelected = true;
  }

  const myHandler = (e) => {
    e.preventDefault();
    showModal(true, markerProps);
  };

  return (
    <MarkerImage
      topPosition={position[0]}
      leftPosition={position[1]}
      onClick={myHandler}
      isMarkerSelected={isMarkerSelected}
    />
  );
};

function mapStateToProps(state) {
  return {
    mapData: state.mapData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showModal,
    },
    dispatch
  );
}

Marker.propTypes = {
  mapData: PropTypes.shape({
    show: PropTypes.bool,
    modalData: PropTypes.shape({}),
  }),
  showModal: PropTypes.func.isRequired,
  markerProps: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.array.isRequired,
  }),
};

Marker.defaultProps = {
  mapData: {
    show: false,
    modalData: {
      name: "",
    },
  },
  markerProps: {
    name: "",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Marker);
