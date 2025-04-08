import Link from "next/link";
import React from "react";

const ContactUs = async () => {
  return (
    // bg-[#f6f6f6]
    <section className=" bg-[#f6f6f6] py-4">
      <div className="container mx-auto flex flex-col  justify-between items-center  lg:py-12 px-6 text-center ">
        <div className="py-6 flex flex-col gap-6">
          <h2 className="text-1xl sm:text-2xl md:text-4xl font-bold bg-red">
            Get In Touch With Us
          </h2>
          <h3 className="text-md sm:text-lg md:text-2xl">
            In My Cash, we are keen to offer a comfortable and seamless
            experience to our customers. So our customer service team is always
            ready to provide support and answer any queries or resolve any
            complaints you may encounter
          </h3>
        </div>
        <Link
          href="/contactus"
          className="bg-primary-green py-2 px-12 md:px-12 md:py-2 md:text-lg hover:text-green border-2 border-primary-green hover:bg-white text-white rounded-full"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
