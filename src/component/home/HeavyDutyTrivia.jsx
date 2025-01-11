import React from "react";
import { motion } from "framer-motion";

const HeavyDutyTrivia = () => {
  const trivia = [
    {
      fact: "The world's largest dump truck, the BelAZ 75710, can carry a staggering 450 metric tons of material!",
    },
    {
      fact: "Modern excavators can rotate a full 360 degrees, making them incredibly versatile on construction sites.",
    },
    {
      fact: "The first tractor was invented in the late 19th century and ran on steam power, not gasoline or diesel.",
    },
    {
      fact: "Forklifts were first developed in the early 20th century to help warehouses manage heavy loads efficiently.",
    },
    {
      fact: "Some heavy-duty trucks are equipped with over 1,000 horsepower engines, making them as powerful as race cars.",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Heavy-Duty Vehicle Trivia & Fun Facts
        </motion.h2>
        <ul className="space-y-4">
          {trivia.map((item, index) => (
            <motion.li
              key={index}
              className=" p-4 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="">{item.fact}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeavyDutyTrivia;
