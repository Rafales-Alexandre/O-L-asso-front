import { Link, Router,Route } from 'react-router-dom';
import UserEdit from './UserEdit';
import SuitEdit from './SuitEdit';
import InstrumentEdit from './InstrumentEdit';

import users from '../../../data/users.json';



const Edit = () => {


  const handleAdd = (event) => {
    event.preventDefault();
  }

    return (
      <Router>
        <Route path="/member/user/:id/edit" element={SuitEdit }/>
        <Route path="/member/user/:id/add" element={SuitEdit }/>

        <UserEdit
        OnSubmitFormUser={handleAdd} 
        />
        <Route path="/member/suits/:id/edit" element={SuitEdit }/>
        <SuitEdit 
        OnSubmitFormSuit={handleAdd} />
        <Route path="/member/instruments/:id/edit" element={InstrumentEdit} />
        <InstrumentEdit 
        OnSubmitFormInstrument={handleAdd}/>
        
        </Router>
    )
  }
export default Edit;