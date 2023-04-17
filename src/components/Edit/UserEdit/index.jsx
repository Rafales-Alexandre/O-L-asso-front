
import PropTypes from 'prop-types';

const UserEdit= ({data,OnSubmitFormUser, onChange}) => {
return(
 <form
onSubmit={OnSubmitFormUser}
//  autoComplete="off"
 className="w-full max-w-lg">
  <div className='flex flex-wrap -mx-3 mb-6'>
    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
      <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-lastname'>Nom</label>
         <input 
         type='text'
         className='appearance-none block w-full bg-black-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
         id='grid-lastname'
         placeholder={data[1].lastname}
         onChange={onChange}
         />
    </div>
    <div className='w-full md:w-1/3 px-3'>
         <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-firstname'>Prénom</label>
         <input
         type='text'
         className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
         id='grid-firstname'
         placehoder={data[1].firstname}
         onChange={onChange}
        />
      </div>
      <div className='w-full md:w-1/3 px-3'>
        <label  className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-nickname'>Pseudo</label>
        <input
         type='text'
         className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
         id='grid-nickname'
         placeholder={data[1].nickname}
         onChange={onChange}
         />
      </div>
         {/* <input type='url' />

         <button type='submit' >Ajouter une photo</button> */}
    </div>
    <div className='flex flex-wrap -mx-3 mb-6'>
      <div className='w-full px-3'>
        <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-email'>
        Email
        </label>
          <input
          type='email'
          className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
          id='grid-email'
          placeholder={data[1].email}
          onChange={onChange}
        />
      </div>
      <div className='w-full px-3'>
        <button
        type='submit'
        className='block appearance-none block w-full bg-black-200 text-white-700 border py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >Réinitialiser mot de passe
        </button>
      </div>
    </div>
  <div className='flex flex-wrap -mx-3 mb-2'>
    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='"block uppercase tracking-wide text-white-700 text-xs font-bold mb-2' forHtml='grid-birthdate'>
      Date de naissance
      </label>
        <input
        type='date'
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        id='grid-birthdate'
        placeholder={data[1].birthdate}
        onChange={onChange}
        />
    </div>
    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='"block uppercase tracking-wide text-white-700 text-xs font-bold mb-2' forHtml='grid-phone'>
      Téléphone
      </label>
        <input
        type='tel'
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        id='grid-phone'
        placeholder={data[1].phone}
        onChange={onChange}
        />
    </div>  
    <div className='flex flex-wrap -mx-3 mb-6'>
      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
        <label className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2' forHtml="grid-gender">
        Genre
        </label>
            <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
            id='grid-gender' 
            name='gender'  >
              <option value={data[1].gender} defaultValue>{data[1].gender} </option>
              <option value="femme">F</option>
              <option value="homme">M</option>
            </select>
      </div>
      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
        <label className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2' forHtml="grid-top_size">
        Taille Haut
        </label>
          <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
          id='grid-top_size' 
          name='top_size'  >
            <option value={data[1].top_size} defaultValue>{data[1].top_size}</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="xxxl">XXXL</option>
          </select>
      </div>
      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
        <label className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2' forHtml="grid-bottom_size">
        Taille Bas
        </label>
          <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
          id='grid-bottom_size' 
          name='bottom_size'  >
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
    </div>
  </div>  
  <div className='flex flex-wrap -mx-3 mb-2'>
    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-address'>
      Adresse
      </label>
        <input
        type='text'
        className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
          id='grid-address'
        placeholder={data[1].address}
        onChange={onChange}
        />
    </div>
    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-address_2'>
      Adresse Complémentaire
      </label>
        <input
        type='text'
        className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
          id='grid-address_2'
        placeholder={data[1].address_2}
        onChange={onChange}
        //TODO if adresse_2 ="" add placeholder=Adresse complémentaire
        />
    </div>  
  </div> 
  <div className='flex flex-wrap -mx-3 mb-2'>
    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-zip_code'>
      Code postal
      </label>
        <input
        type='number'
        className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
          id='grid-zip_code'
        placeholder={data[1].zip_code}
        onChange={onChange}
        />
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-city'>
      Ville
      </label>
        <input
        type='text'
        className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
        id='grid-city'
        placeholder={data[1].city}
        onChange={onChange}
        />
    </div>
  </div>
  <div className='flex flex-wrap -mx-3 mb-6'>
    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'> 
    <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forHtml='grid-role'>
    Role
    </label>
    <input 
    type='text'
    className='appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
    id='grid-role'
    value={data[1].role}
    onChange={onChange}
    />
 </div>
 </div>
{/* PART Members and Admin */}
{data[1].role === ("member" || "admin") && (
    <fieldset>
        <legend>Adhésion</legend>
     <div>
      <input type="checkbox" id="cotisation" name="cotisation" value="cotisation"
      onChange={onChange}/>
      <label >Cotisation payée</label>
      <input type="checkbox" id="caution" name="caution" value="caution"
      onChange={onChange}/>
      <label>Caution versée</label>
    </div>
    </fieldset>
)}
{/* Part Admin */}
{data[1].role === ("admin") && (
  <div>
    <label >
    Choisir un rôle</label>
    <select name="role" id="role" onChange={onChange}>
        <option value="Adhérent">Adhérent</option>
        <option value="Bureau">Bureau</option>
        <option value="Admin">Admin</option>
    </select>
    </div>
)}

{/* Validate form */}

<button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Valider</button>
    { /* <p>* Champs obligatoire</p> 
     => on peut mettre un message d'avertissement lorsqu'un champ est manquant} */}
     
    </form>
    

)}

export default UserEdit;