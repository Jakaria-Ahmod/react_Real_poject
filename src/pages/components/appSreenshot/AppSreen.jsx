import React from 'react';
import { appScreenData } from './appscreenData';
import { motion } from 'framer-motion';
const AppSreen = () => {
  return (
    <div>
      <section className="container">
        <div className="text-center">
          <p className="font-Manjari text-[24px]">Screenshots</p>
          <h2 className="font-Popins text-[30px] font-semibold">
            App Screenshots
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center mt-[95px] mb-[146px] gap-3">
          {appScreenData.map((item, index) => (
            <div key={index}>
              <motion.img
                initial={{ opacity: 0, x: -200 }} // Initially hidden on left
                whileInView={{ opacity: 1, x: 0 }} // Scroll করলে দেখা যাবে
                transition={{ duration: 1 }}
                src={item?.img}
                alt="screenshot img"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AppSreen;
