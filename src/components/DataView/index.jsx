import instrument from '../../../data/instrument.json';
import suit from '../../../data/suit.json';
import users from '../../../data/user.json';
import usersuit from '../../../data/user_has_suit.json';

import Instruments from './Instruments';
import Suits from './Suits';

const DataView = () => {
    return (
    <>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">Instruments</div>
            <div className="collapse-content">
                {instrument.map((instrument, id) => {
                    return <Instruments key={id + instrument.code} {...instrument} />
                })}
            </div>
        </div>
        
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">Suits</div>
            <div className="collapse-content">
                {suit.map((suit, id) => {
                    return <Suits key={id + suit.code} {...suit} />
                })}
            </div>
        </div>
    </>
  );
};

export default DataView;
