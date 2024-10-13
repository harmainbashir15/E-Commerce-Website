
import Image from 'next/image';
import React from 'react';
function About() {
  return (
    <section className="bg-yellow-600">
  <div className="container m-0 p-0 py-10 mx-auto">
    <div className="flex flex-wrap w-full mb-18">
      <div className="lg:w-1/2 w-full mb-6  lg:mb-0"> 
        <h1 className="sm:text-4xl text-2xl g-3 font-bold mb-2 text-black"> Our Specialities</h1>
      </div>
      <p className="lg:w-10/12 w-full text-bold text-black">At <b>The Cake Palette</b>, our journey began with a passion for baking and a dream to share the warmth and comfort of freshly made goods with our community. From humble beginnings in a small kitchen to a beloved neighborhood bakery, we&#39ve grown thanks to the love and support of our loyal customers. Every day, we bake with heart, using the finest ingredients to create delicious treats that bring people together. Join us in celebrating the art of baking and the simple joys of life, one bite at a time.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/cookies.jpg" alt="image" width={400} height={300} />
          <h2 className="text-lg text-black font-bold  mb-4">Cookies</h2>
          <p className="text-base"> Our cookies are the heart of our bakery, baked fresh daily to achieve the perfect balance of crispiness on the outside and chewy goodness on the inside. Each cookie is a delightful treat, bursting with rich flavors that keep our customers coming back for more. </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/lavacake.jpg" alt="image" width={400} height={300} />
          <h2 className="text-lg text-black font-bold mb-4">
          Lava Cake</h2>
          <p className="text-base">A standout on our dessert menu is our lava cake, an exquisite creation that is as delightful to the eyes as it is to the palate. With a rich chocolate exterior that encases a molten center, each bite is a luxurious experience that transports you to chocolate heaven</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/pastry.jpg" alt="image" width={400} height={300} />
          <h2 className="text-lg text-black font-bold mb-4">Pastry </h2>
          <p className="text-base">  Our pastries are crafted with precision and care, featuring light, flaky layers that melt in your mouth. From buttery croissants to sweet danishes, they make for the perfect accompaniment to your morning coffee or an afternoon indulgence.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-110 ">
          <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/cake.jpg" alt="image" width={400} height={300}/> 
          <h2 className="text-lg text-black font-bold mb-4">Cakes </h2>
          <p className="text-base">  And not forget our cakes, which are beautifully designed and bursting with flavor, making them the perfect centerpiece for any celebration. Whether its a classic vanilla, rich chocolate, or a unique seasonal creation, our cakes are made to elevate every special occasion. Every item we create is made with love and the finest ingredients, ensuring that each bite is a moment to savor.
             We invite you to visit our bakery and experience the sweet magic for yourself!</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default About;
