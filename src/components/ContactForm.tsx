import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {

  const [state, handleSubmit] = useForm("xjkejvqy");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.succeeded) {
      const result = await handleSubmit(e);
      formRef.current?.reset();
    }
  };

  return (
    <div className="space-y-6">
      <form ref={formRef} onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        <textarea
          rows={6}
          id="message"
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        ></textarea>

        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-4'
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 cursor-pointer text-md font-semibold text-black border-2 border-black rounded-sm shadow-sm"
          >
            <button type="submit" disabled={state.submitting} className="mt-2 text-gray-700">{state.succeeded ? "Thanks For Message!" : "Send Message"} </button>
          </motion.span>
        </motion.div>
      </form>
    </div>
  )
}

export default ContactForm