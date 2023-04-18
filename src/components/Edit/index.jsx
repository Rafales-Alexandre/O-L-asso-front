import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import UserEdit from './UserEdit';
import SuitEdit from './SuitEdit';
import InstrumentEdit from './InstrumentEdit';


const Edit = () => {
  const { id } = useParams(); // get the id if present in the URL
  const [data, setData] = useState({ lastname: '', firstname: '', nickname: '',email: '', birthdate: '', phone: '',address: '', address_2: '', zip_code: '',city: '', gender: '', top_size: '',bottom_size: '', subscription: false, deposit: false, role: ''});
 
  
  
  useEffect(() => {
    // if  id is present in the URL, we retrieve the information of the corresponding data   
    if (id) {
      fetch(`https://thebestofapi/admin/users/${id}`)
      .then(response => response.data())
      .then(data => setData(data))
      .catch(error => console.error(error));
    }
  }, [id]);

  const handleChange = event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const method = id ? 'PATCH' : 'POST'; 
    const url = id ? `https://example.com/api/datas/${id}` : 'https://example.com/api/datas';
    fetch(url, {
      method,
    })
    .then(() => {
// once the request has been sent, the user is redirected to a confirmation page        history.push('/confirmation');
      })
      .catch(error => console.error(error));
    };
  
  
  return (
    <>
      
        <UserEdit data={users}
        OnSubmitFormUser={handleSubmit}  onChange={handleChange}
        />
        <SuitEdit 
        OnSubmitFormSuit={handleSubmit}  onChange={handleChange}
        />
        <InstrumentEdit 
        OnSubmitFormInstrument={handleSubmit} onChange={handleChange}
        />
        
        </>
    )
  }
export default Edit;




