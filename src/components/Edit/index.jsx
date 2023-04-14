
import UserEdit from './UserEdit';
import SuitEdit from './SuitEdit';
import InstrumentEdit from './InstrumentEdit';

import users from '../../../data/users.json';

const Edit = () => {


  const handleAdd = (event) => {
    event.preventDefault();
  }

    return (
      <div>
        <UserEdit data={users}
        OnSubmitFormUser={handleAdd} 
        />
        <SuitEdit 
        OnSubmitFormSuit={handleAdd} />
        <InstrumentEdit 
        OnSubmitFormInstrument={handleAdd}/>
        
      </div>
    )
  }
export default Edit;