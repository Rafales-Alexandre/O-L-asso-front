import instrument from '../../../data/instrument.json';
import suit from '../../../data/suit.json';

import Instruments from './Instruments';
import Suits from './Suits';

function DataView({user}){
    return (
        <div className="flex flex-col items-stretch w-full">
            
            <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
                <input type="checkbox" checked="true" onClick={`checked="false"`} />
            <div class="collapse-title text-xl font-medium">Instruments</div>
            <div className="collapse-content">
                {instrument.map((instrument, id) => {
                    return <Instruments key={id + instrument.code} {...instrument} />
                })}
            </div>
        </div>

            <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
                <input type="checkbox" checked="true" onClick={`checked="false"`} />
                <div class="collapse-title text-xl font-medium">Suits</div>
                <div class="collapse-content"> 
                    {suit.map((suit, id) => {
                    return <Suits key={id + suit.code} {...suit} />
                })}
            </div>
        </div>
    </div>
  );
};

export default DataView;
