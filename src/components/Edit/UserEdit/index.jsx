import PropTypes from 'prop-types';

const UserEdit= ({data}) => {
return(
 <form
 autoComplete="off"
 className="login-form-element">
    <div className='flex wrap'>
      <label>Nom</label>
         <input 
         type='text'
         className='form-input'
         />
         <label>Prénom</label>
         <input
         type='text'
         className='form-input'
        />
        <label>Pseudo</label>
        <input
         type='text'
         className='form-input'
         />
    </div>
    <label>Email</label>
        <input
        type='email'
        className='form-input'
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
      />
      <label>Téléphone</label>
      <input
        type='tel'
        className='form-input'
      />
    </div>  
    <div>
      <label >Genre</label>
    <select name="genre" >
        <option value=""></option>
        <option value="femme">FEMME</option>
        <option value="homme">HOMME</option>
    </select>
    <label >Taille Haut</label>
    <select name="Taille-haut" >
        <option value=""></option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
        <option value="xxl">XXL</option>
    </select>
    <label >Taille Bas</label>
    <select name="Taille-bas" >
        <option value=""></option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
        <option value="xxl">XXL</option>
    </select>
      
    </div>
    <div>
    <label>Adresse</label>
      <input
        type='text'
        className='form-input'
      />
      <input
        type='text'
        className='form-input'
        placeholder='Adresse complémentaire'
      />
    </div>  
    <div>
    <label>Code postal</label>
      <input
        type='number'
        className='form-input'
      />
      <label>Ville</label>
      <input
        type='text'
        className='form-input'
      />
    </div>  
 
{/* PART Members and Admin */}
{data[0].role === ("member" || "admin") && (
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
{data[0].role === ("admin") && (
  <div>
    <label >Choisir un rôle</label>
    <select name="role" id="role">
        <option value="Adhérent">Adhérent</option>
        <option value="Bureau">Bureau</option>
        <option value="Admin">Admin</option>
        <option value="Ajouter">Ajouter un rôle</option>
    </select>
    </div>
)}

{/* Validate form */}

    <button type='submit'>Valider</button>
    { /* <p>* Champs obligatoire</p> 
     => on peut mettre un message d'avertissement lorsqu'un champ est manquant} */}
    </form>
    

)}

export default UserEdit;