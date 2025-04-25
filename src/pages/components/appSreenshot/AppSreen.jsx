import React from 'react';
import { appScreenData } from './appscreenData';

const AppSreen = () => {
  return (
    <div>
      <section>
        <div className="text-center">
          <p className="font-Manjari text-[24px]">Screenshots</p>
          <h2 className="font-Popins text-[30px] font-semibold">
            App Screenshots
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center mt-[95px] mb-[146px] gap-3">
          {appScreenData.map((item, index) => (
            <div key={index}>
              <img src={item?.img} alt="screenshot img" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AppSreen;
