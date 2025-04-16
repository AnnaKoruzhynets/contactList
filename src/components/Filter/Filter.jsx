import { useDispatch} from 'react-redux';
import  {setFilter}  from '../../redux/contactsSlice';
import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const change = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className='filter'>
      <input 
      type="text"
      onChange={change}
      placeholder='Фільтр'
      className='filterInp'
      />
    </div>
  );
};
