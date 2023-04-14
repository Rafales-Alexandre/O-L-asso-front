import UserEdit from './UserEdit';
import SuitEdit from './SuitEdit';
import InstrumentEdit from './InstrumentEdit';

import users from '../../../data/users.json';

const Edit = () => {
    return (
      <div>
        <UserEdit data={users} />
        <SuitEdit  />
        <InstrumentEdit />
        
      </div>
    )
  }
export default Edit;