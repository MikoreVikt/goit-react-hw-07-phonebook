import { Label, Input } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        autoComplete="off"
        type="text"
        name="filter"
        title="Find contacts by name"
      />
    </Label>
  );
};
