
import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is this service-sharing web application about?",
      answer: "This platform allows users to add, manage, book, and update services shared by others, offering a convenient way to connect service providers and customers.",
    },
    {
      question: "How do I add a service?",
      answer: "You can add a service by logging in and navigating to the dashboard. Click on 'Add Service' and fill in the required details.",
    },
    {
      question: "Can I book a service without an account?",
      answer: "No, you need to register or log in to book a service. This ensures a secure and personalized experience.",
    },
    {
      question: "How can I update the status of a service?",
      answer: "If you're a service provider, go to the 'Service To Do' section in your dashboard. From there, you can update the status of a booked service using the dropdown options.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, your data is securely stored and accessed only by authorized personnel. We use industry-standard security practices, including JWT authentication.",
    },
  ];

  return (
    <div className="my-12 p-6 bg-base-200 rounded-lg">
      <h2 className="text-3xl text-primary font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-base-100 border border-gray-300 rounded-lg p-4"
          >
            <summary className="font-semibold text-lg group-hover:cursor-pointer group-hover:text-primary">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
