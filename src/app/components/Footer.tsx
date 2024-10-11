import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
  return (
    <footer className="bg-yellow-600">
  <div className="container px-5 py-4 mx-auto flex items-center justify-between sm:flex-row flex-col">
    <Link href="/" className="flex font-bold items-center md:justify-start justify-center">
    <Image src="/logo1.JPG" alt="logo" width={40} height={40} className="bg-amber-200 rounded-full p-0 m-0 "/>
      <span className="ml-3 text-3xl text-black font-serif">The Cake Palette </span>
    </Link>
    <p className="text-md text-black font-serif sm:ml-4 sm:pl-4 sm:py-2 sm:mt-1 mt-2">All Right Reserved, Terms of Use - Privacy Policy
    </p>
    <ul className="flex gap-x-4 text-black font-serif font-semibold items-center sm:mt-0 mt-4">
        <li>
          <Link className="hover:text-yellow-50" href="https://www.instagram.com/accounts/login/">Instagram</Link>
        </li>
        <li>
          <Link className="hover:text-yellow-50"href="https://www.linkedin.com/in/harmain-bashir-4560b42b5/">Linked</Link>
        </li>
        <li>
          <Link className="hover:text-yellow-50" href="https://www.facebook.com/"> Facebook</Link>
        </li>
      </ul>
  </div>
</footer>
  );
}

export default Footer;