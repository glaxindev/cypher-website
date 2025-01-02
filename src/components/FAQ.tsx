import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I add Cypher to my server?",
    answer:
      'Click the "Add to Discord" button at the top of the page and follow the OAuth2 flow to add Cypher to your server. You\'ll need the "Manage Server" permission.',
  },
  {
    question: "Is Cypher Bot free to use?",
    answer:
      "Yes! Cypher is completely free to use with all core features. We may offer premium features in the future for advanced users.",
  },
  {
    question: "What permissions does Cypher need?",
    answer:
      "Cypher requires basic permissions like Send Messages, Manage Messages, and Embed Links to function properly. The exact permissions depend on which features you want to use.",
  },
  {
    question: "Does the bot support multiple languages?",
    answer:
      "No, the bot currently supports only English. Multilingual support may be considered in future updates.",
  },
  {
    question: "How can I report bugs or suggest new features?",
    answer:
      "You can report bugs or suggest new features by contacting the support team through our Discord server or submitting a ticket via the bot's support system.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#121212]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Find answers to common questions about Cypher Bot.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white/5">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
