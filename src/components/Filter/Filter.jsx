import { PropTypes } from 'prop-types';
import {FilterSection, Label, Input} from './Filter.module'

export const Filter = ({ filter }) => {
  return (
    <FilterSection>
    <Label>
      Filter contact by Name
      <Input type="text" onChange={filter} />
    </Label>
    </FilterSection>
  );
};

Filter.prototype = {
  filter: PropTypes.func,
};