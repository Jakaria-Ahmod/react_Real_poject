import React from 'react';
import { feurtsItem } from './FeaturesData';
import mobileScreen from '../../../assets/img/screenMobile.png';

const Features = () => {
  return (
    <div>
      <div>
        <section>
          <div className="text-center">
            <p className="font-Manjari text-[24px]">Features</p>
            <h2 className="font-Popins text-[30px] font-semibold">
              Our Best Features
            </h2>
          </div>
          <div className="grid md:grid-cols-3 justify-center mt-[80px] items-center mb-[100px]">
            <div>
              {feurtsItem.slice(0, 2).map((item, index) => (
                <div className="flex items-center gap-[19px] mb-[71px]">
                  <img src={item?.img} alt="img" />
                  <div>
                    <p className="font-Popins font-semibold text-[18px]">
                      {item?.title}
                    </p>
                    <p className="font-Popins text-[14px] leading-[23px]">
                      {item?.discrption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex mt-[20px] items-center justify-center">
              <img src={mobileScreen} alt="img" />
            </div>
            <div className="mt-[20px]">
              <div>
                {feurtsItem.slice(2, 4).map((item, index) => (
                  <div className="flex flex-row-reverse items-center gap-[19px] mb-[71px]">
                    <img src={item?.img} alt="img" />
                    <div>
                      <p className="font-Popins font-semibold text-[18px] text-end">
                        {item?.title}
                      </p>
                      <p className="font-Popins text-[14px] leading-[23px] text-end">
                        {item?.discrption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
