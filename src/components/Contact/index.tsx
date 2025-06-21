const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-16 md:py-20 lg:py-28 dark:bg-gray-900"
    >
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to transform your business? Let&apos;s discuss your project and
              bring your vision to life.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12 dark:bg-gray-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project Type
                </label>
                <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                  <option>Select project type</option>
                  <option>Website Development</option>
                  <option>E-commerce Store</option>
                  <option>Mobile App</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-3xl">📧</div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                hello@logibrix.in
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-3xl">📞</div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Call Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300">+91 8358952017</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-3xl">💬</div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Live Chat
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
