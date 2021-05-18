import styled from "styled-components";
import PropTypes from "prop-types";

const MapDetailsContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 150px;
  top: 15%;
  right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 15px;
  line-height: 1.5;
  border: 1px solid grey;
  padding: 16px;
  background: blanchedalmond;
`;

const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DetailCol = styled.div``;

const MapDetails = (props) => {
  const { details } = props;

  return (
    <MapDetailsContainer>
      <DetailRow>
        <DetailCol>NAME</DetailCol>
        <DetailCol>{details.name}</DetailCol>
      </DetailRow>
      <DetailRow>
        <DetailCol>AUTHORITY</DetailCol>
        <DetailCol>{details.authority}</DetailCol>
      </DetailRow>
      <DetailRow>
        <DetailCol>NUMBER OF GUARDS</DetailCol>
        <DetailCol>{details.numGuards}</DetailCol>
      </DetailRow>
      <DetailRow>
        <DetailCol>POPULATION</DetailCol>
        <DetailCol>{details.population}</DetailCol>
      </DetailRow>
      <DetailRow>
        <DetailCol>TYPE</DetailCol>
        <DetailCol>{details.type}</DetailCol>
      </DetailRow>
      <DetailRow>
        <DetailCol>WEALTH</DetailCol>
        <DetailCol>{details.wealth}</DetailCol>
      </DetailRow>
    </MapDetailsContainer>
  );
};

MapDetails.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    authority: PropTypes.string,
    numGuards: PropTypes.number,
    population: PropTypes.number,
    type: PropTypes.string,
    wealth: PropTypes.number,
  }),
};

MapDetails.defaultProps = {
  details: {
    name: "NA",
    authority: "NA",
    numGuards: 0,
    population: 0,
    type: "NA",
    wealth: 0,
  },
};

export default MapDetails;
