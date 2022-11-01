import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
      <div className="hero my-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative lg:mb-0 mb-5">
            <img
              src={person}
              className="rounded-lg shadow-2xl w-4/5 h-full"
              alt=""
            />
            <img
              src={parts}
              className="rounded-lg shadow-2xl absolute w-3/5 right-5 border-8 top-1/2"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <p className="text-xl text-orange-500 font-bold">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;