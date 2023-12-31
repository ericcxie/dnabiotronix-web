import { useFormik } from "formik";
import React, { useState } from "react";
import handleSubmit from "../utils/submitForm";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SectionHeader from "../common/Header";
import FadeUpMotionDiv from "../utils/FadeUpMotion";

interface FormValues {
  [key: string]: string;
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container mx-auto px-8 xl:px-20 py-8">
      <div>
        <FadeUpMotionDiv>
          <SectionHeader text="Reach Out" />
        </FadeUpMotionDiv>
        <FadeUpMotionDiv>
          <h1 className="text-3xl lg:text-5xl leading-tight text-gray-900 mb-4">
            Contact
          </h1>
        </FadeUpMotionDiv>
        <FadeUpMotionDiv>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="transition-colors duration-300 relative rounded-lg">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 lg:flex lg:items-start">
              <div>
                <div className="flex justify-center md:justify-start space-x-4 mt-4 text-black">
                  <a
                    className="hover:text-[#4267B2] transition duration-200"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare size={33} />
                  </a>
                  <a
                    className="hover:text-gray-600 transition duration-200"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter size={33} />
                  </a>
                  <a
                    className="hover:text-[#0077B5] transition duration-200"
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={33} />
                  </a>
                  <a
                    className="hover:text-[#0072C6] transition duration-200"
                    href="mailto:michaelc@dnab.bio"
                  >
                    <MdEmail size={33} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUpMotionDiv>
      </div>
    </section>
  );
};

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.name) {
    errors.name = "Please enter a name";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!values.message) {
    errors.message = "Please enter a message";
  }

  return errors;
};

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: { name: "", email: "", message: "" },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit("ContactBiotronix", values);
      actions.resetForm();
      setSubmitted(true);
    },
  });

  return (
    <div className="rounded-3xl p-px border">
      <form
        name="ContactBiotronix"
        onSubmit={formik.handleSubmit}
        data-netlify="true"
        className="space-y-5 bg-white p-6 rounded-[calc(1.5rem-1px)] relative"
      >
        <input type="hidden" name="form-name" value="ContactBiotronix" />
        <div>
          <label className="relative">
            <input
              className="w-full text-gray-600 bg-white transition duration-200 rounded-xl border border-gray-200 p-3 text-sm focus:outline-none"
              type="text"
              id="name"
              name="name"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.name}
            />
            <span className="cursor-text text-md text-gray-500 dark:text-pf-light text-opacity-80 absolute left-0 top-0 mx-1 px-2 transition duration-200 input-text">
              Name
            </span>
          </label>
          {formik.errors.name && formik.touched.name && (
            <p className="text-sm mt-1 text-gray-600 lg:text-base">
              {formik.errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="relative">
            <input
              className="w-full text-gray-600 bg-white transition duration-200 rounded-xl border border-gray-200 p-3 text-sm focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.email}
            />
            <span className="cursor-text text-md text-gray-500 dark:text-pf-light text-opacity-80 absolute left-0 top-0 mx-1 px-2 transition duration-200 input-text">
              Email address
            </span>
          </label>
          {formik.errors.email && formik.touched.email && (
            <p className="text-sm mt-1 text-gray-600 lg:text-base">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="relative">
            <textarea
              className="w-full text-gray-600 bg-white transition duration-200 rounded-xl border border-gray-200 p-3 text-sm focus:outline-none"
              rows={8}
              id="message"
              name="message"
              placeholder=" "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.message}
            />
            <span className="cursor-text text-md text-gray-500 text-opacity-80 absolute left-0 py-3 mx-1 px-2 transition duration-200 input-text">
              Message
            </span>
          </label>
          {formik.errors.message && formik.touched.message && (
            <p className="text-sm mt-1 text-gray-600 lg:text-base">
              {formik.errors.message}
            </p>
          )}
          {submitted && (
            <p className="text-sm mt-1 text-gray-600 dark:text-wild-blue-400 lg:text-base">
              Your message has been successfully sent!
            </p>
          )}
        </div>

        <div className="mt-2">
          <div className="relative group mt-2">
            <button
              type="submit"
              className="transition-colors border duration-300 relative bg-[#0696dc] hover:bg-[#0481bf] text-sm lg:text-md inline-flex w-full items-center justify-center rounded-xl active:shadow-inner px-5 py-3"
            >
              <span className="text-white">Send message</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
