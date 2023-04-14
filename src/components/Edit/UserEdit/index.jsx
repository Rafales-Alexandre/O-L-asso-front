import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const UserEdit= ({data, OnSubmitFormUser}) => {
  console.log(data[1].top_size)
return(
 <form
onSubmit={OnSubmitFormUser}
//  autoComplete="off"
 className="login-form-element">
    <div className='flex wrap'>
      <label>Nom</label>
         <input 
         type='text'
         className='form-input'
         placeholder={data[1].lastname}
         
         />
         <label>Prénom</label>
         <input
         type='text'
         className='form-input'
         value={data[1].firstname}
        />
        <label>Pseudo</label>
        <input
         type='text'
         className='form-input'
         placeholder={data[1].nickname}
         />
         {/* <input type='url' />

         <button type='submit' >Ajouter une photo</button> */}
    </div>
    <label>Email</label>
        <input
        type='email'
        className='form-input'
        placeholder={data[1].email}
       />
       <button
        type='submit'
        className='form-input'
        placeholder='Réinitialiser mot de passe'
       />
    <div>
    <label>Date de naissance</label>
      <input
        type='date'
        className='form-input'
        placeholder={data[1].birthdate}
        value={data[1].birthdate}
      />
      <label>Téléphone</label>
      <input
        type='tel'
        className='form-input'
        placeholder={data[1].phone}
      />
    </div>  
    <div>
      <label >Genre</label>
    <select name="genre" >
        <option value={data[1].gender} defaultValue>{data[1].gender}</option>
        <option value="femme">F</option>
        <option value="homme">M</option>
    </select>
    <label >Taille Haut</label>
    <select name="Taille-haut" >
        <option value={data[1].top_size} defaultValue>{data[1].top_size}</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
        <option value="xxxl">XXXL</option>
    </select>
    <label >Taille Bas</label>
    <select name="Taille-bas" >
        <option value={data[1].bottom_size} defaultValue>{data[1].bottom_size}</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
        <option value="xxxl">XXXL</option>
    </select>
      
    </div>
    <div>
    <label>Adresse</label>
      <input
        type='text'
        className='form-input'
        placeholder={data[1].address}
      />
      <label>Adresse Complémentaire</label>
      <input
        type='text'
        className='form-input'
        placeholder={data[1].address_2}
        //TODO if adresse_2 ="" add placeholder=Adresse complémentaire
      />
    </div>  
    <div>
    <label>Code postal</label>
      <input
        type='number'
        className='form-input'
        placeholder={data[1].zip_code}
      />
      <label>Ville</label>
      <input
        type='text'
        className='form-input'
        placeholder={data[1].city}
      />
    </div>  
    <label >Role</label>
    <input type='text' value={data[1].role}/>
 
{/* PART Members and Admin */}
{data[1].role === ("member" || "admin") && (
    <fieldset>
        <legend>Adhésion</legend>
     <div>
      <input type="checkbox" id="cotisation" name="cotisation" value="cotisation"/>
      <label >Cotisation payée</label>
      <input type="checkbox" id="caution" name="caution" value="caution"/>
      <label>Caution versée</label>
    </div>
    </fieldset>
)}
{/* Part Admin */}
{data[1].role === ("admin") && (
  <div>
    <label >Choisir un rôle</label>
    <select name="role" id="role">
        <option value="Adhérent">Adhérent</option>
        <option value="Bureau">Bureau</option>
        <option value="Admin">Admin</option>
    </select>
    </div>
)}

{/* Validate form */}

    <button type='submit'><Link to="/">Valider</Link></button>
    { /* <p>* Champs obligatoire</p> 
     => on peut mettre un message d'avertissement lorsqu'un champ est manquant} */}
    </form>
    

)}

export default UserEdit;