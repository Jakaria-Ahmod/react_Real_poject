import { Button } from '@/components/ui/button';
import React from 'react';

const ProdactCard = ({ item }) => {
  const { img, prodactList, text, button } = item;
  return (
    <div>
      <div>
        <div className="shadow-2xl shadow-amber-100">
          <img src={img} alt="img" className="w-full h-full" />
          <div>
            <div className="p-4">
              {prodactList.map((item, index) => (
                <div className="flex items-center gap-x-5" key={index}>
                  <img src={item.img} alt="img" />
                  <p className="font-Popins text-base text-[#333] mt-[15px]">
                    {item?.title}
                  </p>
                </div>
              ))}
              <div className="flex justify-between mt-[37px]">
                <p className="text-[18px] font-Popins font-medium">{text}</p>
                <Button className="bg-parimary hover:bg-parimary cursor-pointer">
                  {button}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdactCard;
