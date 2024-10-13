import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function About() {
  return (
    <div>
      <Header />

      <section className="bg-yellow-500 min-h-screen">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-black text-center py-10 mb-2 font-bold text-5xl">
           ABOUT US
          </h1>
          <p className="text-black text-xl text-center pt-0 mb-5">
          Welcome to <b>The Cake Palette</b>, where every cake tells a story! Established with a passion for baking and a love for bringing joy to special moments, we specialize in creating delicious, custom-made cakes that look as good as they taste.

At <b>Cake Palette</b>, we believe that every celebration deserves a centerpiece that reflects your personality and tastes. Whether you are planning a birthday, wedding, anniversary, or any special occasion, our cakes are baked fresh with the finest ingredients and crafted with precision and care.

Our talented bakers and decorators work closely with you to design cakes that not only satisfy your sweet tooth but also leave a lasting impression. From classic flavors to innovative creations, we cater to all tastes and dietary preferences, offering a wide range of options, including gluten-free, vegan, and sugar-free cakes.

We take pride in our attention to detail, creativity, and commitment to customer satisfaction. Every cake we make is a blend of artistry and passion, ensuring that each bite is as delightful as the experience itself.

Thank you for choosing <b>Cake Palette</b> to be a part of your celebrations. We look forward to sweetening your special moments!
          </p>
          </div>
         
      </section>
      <Footer />
    </div>
  );
}


export default About;
