import { memo } from 'react';

import './Spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner__spin">
        <div className="spinner__spin">
          <div className="spinner__spin">
            <div className="spinner__spin">
              <div className="spinner__spin">
                <div className="spinner__spin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Spinner);
