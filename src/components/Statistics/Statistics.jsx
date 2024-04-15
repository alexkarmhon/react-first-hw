import { StatSection, StatTitle } from "./Statistics.styled";
import { StatList } from "components/StatList/StatList";
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>
      <StatList stats={stats} />
    </StatSection>
  );
};



Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired).isRequired
}