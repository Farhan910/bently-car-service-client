import React from "react";

const Blog = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-center p-5">
     <div >
     <h2 className="text-2xl text-white">
     How will you improve the performance of a React Application?
      </h2>
      <h2 className=" mt-5">উত্তর ঃ কয়েকটা ভাবে রিয়েক্ট এপ্লিকেশন কে সুন্দর ও সহজ করা যায় তার মধ্যে একটি হলো ইমিউটেবল ডাটা স্ট্রাকচারের মাধ্যমে,যা একটি মতামতযোগ্য মাধ্যম,এটা তে কোন সাইড ইফেক্ট নেই।সাধারন ভাবে ইমিউটেবল ডাটা অবজেক্ট ক্রিয়েট করা যায়, আরেটি হলো রিয়েক্ট ফ্রেগ্মেন্ট ইউজের মাধ্যমে যেমন '<></>' এইগুলার কারনে কোড অনেক সুন্দর হয়ে যায় ,আরেকটি হলো ইন্ডেক্স কি ইউজ করা বন্ধ করার মাধ্যমে যার কারনে কিছু সমস্যা দেখা দেয় যেমন যখন আপনি এটি কে কোন লিস্টের জন্য ইউজ করবেন তখন এবং আপনি লিস্টের কন্টেন্ট ডিলেট করে দিলেন বা এড করলে তখন এই কি টা কিন্তু নিজের আগের অবস্থা ই রয়ে যায় যার কারনে কিছু সমস্যা হতে পারে ।</h2>
     </div>

     <div>
      <h2 className="text-2xl text-white">What are the different ways to manage a state in a React application?</h2>

      <h2>স্টেট কে কয়েক ভাবে ম্যানেজ করা যায় , <br />
         ১ঃLocal state 
        <br />
        ২ঃGlobal State 
        <br />
         ৩ঃ Server State
         <br />
         ৪ঃURL state
      </h2>
      ১ নং হলো নরামালি যেইভাবে একটা কম্পনেন্টের জন্য স্টেট ডিকলায়ার করা হয় ,
      ২ নং হলো কয়েকটা কম্পনেন্টের জন্য App.js বা এজাতীয় কম্পনেন্টের মধ্যে যেটা ডিক্লায়ার করা হয় ,
      ৩ হলো ইন্টারনাল কোন সার্ভারে স্টেট ডিকলায়ার করা হয় ,
      আর ৪ হলো প্যারামিটার হিসেবে যেই স্টেট পাঠানো হয় তা ।
     </div>

     <div>

      <h2 className="text-2xl text-white">How does prototypical inheritance work?</h2>

      <h2> Prototypal Inheritance হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা মুলত Mathod এবং Property অবজেক্টে যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি অবজেক্ট তার Mathod ও Property এর সাথে অন্য একটি অব্জেক্টের inherit করে </h2>
     </div>

     
    </div>
  );
};

export default Blog;
