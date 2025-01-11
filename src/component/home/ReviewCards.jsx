import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    profileImage:
      "https://img.freepik.com/free-photo/portrait-young-woman-smiling-isolated_23-2149143622.jpg",
    rating: 5,
    review:
      "The heavy-duty truck I rented was in perfect condition. It handled all the tough terrain with ease. The rental process was quick and smooth. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Roberts",
    profileImage:
      "https://img.freepik.com/free-photo/smiling-man-isolated-white-background_1303-18180.jpg",
    rating: 4,
    review:
      "Rented a bulldozer for a construction project. The equipment worked well, but the delivery was a bit late. Overall, great service and quality.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    profileImage:
      "https://img.freepik.com/free-photo/happy-girl-holding-camera_23-2148208814.jpg",
    rating: 5,
    review:
      "I rented an excavator for a landscaping project, and it was absolutely perfect! The team helped me choose the right model for the job. Excellent customer service.",
  },
  {
    id: 4,
    name: "James Wilson",
    profileImage:
      "https://img.freepik.com/free-photo/smart-guy-looking-camera_144627-25727.jpg",
    rating: 4,
    review:
      "I rented a heavy-duty crane for a few days, and the performance was great. The only downside was the pickup process could have been faster.",
  },
  {
    id: 5,
    name: "Emily Clark",
    profileImage:
      "https://img.freepik.com/free-photo/portrait-smiling-girl-outdoors_23-2148145724.jpg",
    rating: 5,
    review:
      "Amazing rental experience! The truck was in perfect condition, and the team made the pickup and drop-off process hassle-free. Highly recommend this service!",
  },
  {
    id: 6,
    name: "Daniel Garcia",
    profileImage:
      "https://img.freepik.com/free-photo/cheerful-young-man-smiling-looking-camera_176420-19494.jpg",
    rating: 4,
    review:
      "Rented a backhoe loader for a week. The machine worked perfectly and handled the heavy work with ease. Could improve the documentation provided with the rental.",
  },
  {
    id: 7,
    name: "Olivia Brown",
    profileImage:
      "https://img.freepik.com/free-photo/portrait-young-woman-with-wavy-hair_23-2148999617.jpg",
    rating: 5,
    review:
      "Great experience renting a dump truck. The truck was powerful and in excellent condition. The team was professional and delivered the vehicle on time.",
  },
  {
    id: 8,
    name: "Liam Walker",
    profileImage:
      "https://img.freepik.com/free-photo/man-smiling-looking-camera_23-2149302450.jpg",
    rating: 3,
    review:
      "I rented a forklift for my warehouse, but there were some minor issues with it. The service was good, though, and they took care of the problem quickly.",
  },
  {
    id: 9,
    name: "Sophia Green",
    profileImage:
      "https://img.freepik.com/free-photo/studio-shot-young-woman-smiling_23-2149283297.jpg",
    rating: 5,
    review:
      "I rented a semi-truck for a long-haul delivery, and it was fantastic! Smooth driving and very reliable. The rental process was seamless.",
  },
  {
    id: 10,
    name: "Ethan Harris",
    profileImage:
      "https://img.freepik.com/free-photo/man-sitting-smiling_23-2148289045.jpg",
    rating: 5,
    review:
      "Fantastic service! The equipment was top-notch and well-maintained. The staff were friendly and helped me find the perfect vehicle for my project.",
  },
  {
    id: 11,
    name: "Emma Lewis",
    profileImage:
      "https://img.freepik.com/free-photo/smiling-woman-with-natural-makeup_23-2148457023.jpg",
    rating: 4,
    review:
      "I rented a heavy-duty trailer for a cross-country haul. Everything went smoothly, but I would have liked more information on maintenance tips before the rental.",
  },
  {
    id: 12,
    name: "Noah Martinez",
    profileImage:
      "https://img.freepik.com/free-photo/young-handsome-man-standing_23-2149297613.jpg",
    rating: 5,
    review:
      "Great rental experience! The truck was delivered right on schedule and performed perfectly. The service team was responsive and helpful.",
  },
  {
    id: 13,
    name: "Ava White",
    profileImage:
      "https://img.freepik.com/free-photo/young-woman-standing-outdoors_23-2149164722.jpg",
    rating: 4,
    review:
      "Rented a bulldozer for a construction job. The equipment worked fine, but I did have some trouble with the rental agreement, which could have been clearer.",
  },
  {
    id: 14,
    name: "Lucas Clark",
    profileImage:
      "https://img.freepik.com/free-photo/man-smiling-against-white-background_23-2148155996.jpg",
    rating: 3,
    review:
      "I rented a forklift, but it wasn’t in the best condition. It still got the job done, but I expected better performance for the price.",
  },
  {
    id: 15,
    name: "Mia Robinson",
    profileImage:
      "https://img.freepik.com/free-photo/smiling-woman-with-long-hair_23-2148582314.jpg",
    rating: 5,
    review:
      "Fantastic service. Rented a large truck for my moving business, and it was a game-changer. The vehicle was well-maintained and the rental process was simple.",
  },
  {
    id: 16,
    name: "Mark Davis",
    profileImage:
      "https://img.freepik.com/free-photo/smiling-man-looking-at-camera_23-2148277889.jpg",
    rating: 5,
    review:
      "Rented a heavy-duty excavator, and it was perfect for the job. The staff was knowledgeable and provided excellent guidance on the equipment.",
  },
  {
    id: 17,
    name: "John Miller",
    profileImage:
      "https://img.freepik.com/free-photo/portrait-handsome-young-man-smiling_23-2148189519.jpg",
    rating: 4,
    review:
      "Rented a crane for a construction project. The equipment was good, but the pickup and drop-off process could have been a bit more organized.",
  },
  {
    id: 18,
    name: "Lily Adams",
    profileImage:
      "https://img.freepik.com/free-photo/portrait-young-woman-smiling_23-2149213485.jpg",
    rating: 5,
    review:
      "The best heavy-duty rental service I’ve used! The vehicle was in great condition, and the team was extremely helpful. I’ll be using them again in the future.",
  },
];


const ReviewCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-primary uppercase mb-10">
        Customer Reviews
      </h1>
      <div className="relative overflow-hidden ">
        {/* Slider Content */}
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
                {/* Card Content */}
                <div className="p-4 ">
                  {/* Reviewer Info */}
                  <div className="flex items-center mb-4">
                    <img
                      src={review.profileImage}
                      alt={review.name}
                      className="w-12 h-12 rounded-full border-2 border-blue-500"
                    />
                    <div className="ml-3">
                      <h3 className="font-semibold text-xl text-primary">{review.name}</h3>
                      <div className="flex text-yellow-500">
                        {Array.from({ length: review.rating }).map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Review Text */}
                  <p className=" text-sm">{review.review}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default ReviewCards;
