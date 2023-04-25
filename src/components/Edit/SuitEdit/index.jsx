import { useMutation } from "@apollo/client";
import { Update_Suit } from "../../../actions/userActions";
// import PropTypes from 'prop-types';

const SuitEdit = ({ OnSubmitFormSuit, onChange }) => {
  return (
    <div className="-mx-3 mb-6 flex flex-wrap">
      <form onSubmit={OnSubmitFormSuit} className="w-full max-w-lg">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="text-black-700 mb-2 block text-xs font-bold uppercase tracking-wide"
              forhtml="grid-label"
            >
              Label
            </label>
            <input
              type="text"
              className="bg-black-200 mb-3 block w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-label"
              onChange={onChange}
              value=""
            />
          </div>
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="text-black-700 mb-2 block text-xs font-bold uppercase tracking-wide"
              forhtml="grid-suit-gender"
            >
              Genre
            </label>
            <input
              type="text"
              className="bg-black-200 mb-3 block w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-suit-gender"
              onChange={onChange}
              value=""
            />
          </div>
        </div>
        <div className="w-full px-3">
          <label
            className="text-black-700 mb-2 block text-xs font-bold uppercase tracking-wide"
            forhtml="grid-suit-observations"
          >
            Observations
          </label>
          <textarea
            rows="5"
            className="bg-black-200 mb-3 block w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="grid-suit-observations"
          />
        </div>

        <label>Taille Haut</label>
        <input type="text" className="form-input" />
        <label>Taille Bas</label>
        <input type="text" className="form-input" />

        <fieldset>
          <legend>Sticker</legend>
          <div>
            <input
              type="radio"
              id="sticker-yes"
              name="sticker"
              value="sticker-yes"
            />
            <label>Oui</label>
            <input
              type="radio"
              id="sticker-no"
              name="sticker"
              value="sticker-no"
            />
            <label>Non</label>
          </div>
        </fieldset>
        {/* Validate form */}

        <button type="submit">Valider</button>
      </form>
      <div className="relative overflow-x-auto">
        <table className="table-zebra border-collapse border border-slate-400">
          <thead>
            <tr>
              <th>Taille</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS</td>
              <td>8</td>
            </tr>
            <tr>
              <td>S</td>
              <td>7</td>
            </tr>
            <tr>
              <td>M</td>
              <td>6</td>
            </tr>
            <tr>
              <td>L</td>
              <td>3</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>6</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>5</td>
            </tr>
            <tr>
              <td>XXXL</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuitEdit;
