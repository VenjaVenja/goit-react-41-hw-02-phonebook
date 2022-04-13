import propTypes from "prop-types";
import { FilterLabel, FilterText, FilterInput } from "./Filter.styled";

export const Filter = ({ filter, onChangeFilter }) => (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" value={filter} onChange={onChangeFilter} />
    </FilterLabel>
  );


Filter.propTypes = {
    filter: propTypes.string,
    onChangeFilter:propTypes.func.isRequired
}