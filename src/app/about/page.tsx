import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-green-500 text-white py-6 px-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Learn more about who we are and what we do.</p>
        </header>
        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At <span className="font-bold">Company Name</span>, we aim to bring positive change by delivering high-quality services and creating value for our customers and the community. 
              We are dedicated to sustainability, innovation, and excellence in everything we do.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-700 mb-4">
              Our team is composed of passionate professionals with expertise in various fields. We work together to provide outstanding solutions tailored to our clients&apos; needs.
            </p>
            <Image
              src="/home.jpg"
              alt="Our Team"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions? We’d love to hear from you! Reach out to us{' '}
              <Link href="/contacts" className="text-green-500 underline">
                Contact Us
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
