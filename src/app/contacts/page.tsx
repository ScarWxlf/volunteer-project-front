import Link from 'next/link';

export default function ContactUs() {
    return (
      <div className="flex p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <header className="bg-green-500 text-white py-6 px-8 rounded-t-lg">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-lg">We’d love to hear from you. Reach out anytime!</p>
          </header>
          <div className="p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-700">
                Whether you have a question, want to collaborate, or just want to say hello, feel free to contact us. 
                Fill out the form below or reach us directly at:
              </p>
              <p className="mt-4 text-gray-700">
                <strong>Email:</strong>{' '}
                <Link href="mailto:contact@yourcompany.com" className="text-green-500 underline">
                  contact@yourcompany.com
                </Link>
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-md font-bold hover:bg-green-600 transition hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
  