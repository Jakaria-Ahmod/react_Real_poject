import React from 'react';
import ProdactCard from './ProdactCard';
import { prodactItems } from './Prodactet';

const Prodact = () => {
  return (
    <div>
      <div className=" mb-[100px]">
        <section>
          <div className="text-center">
            <p className=" font-Manjari text-[24px]">Supplies</p>
            <h2 className="font-Popins text-[30px] font-semibold">
              Pick Our Products
            </h2>
          </div>
          <div className="flex gap-x-5 justify-between mt-[73px] p-6">
            {prodactItems.map((item, index) => (
              <div key={index}>
                <ProdactCard item={item}></ProdactCard>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prodact;
