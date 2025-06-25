import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center  bg-sky-200 
        p-10">
           <aside>
               <p className='text-xl font-bold'> Billing solutions made simple and secure.</p>
               <p className="font-bold">

                   <span className='text-lg'>Contact us at</span> <br /> <a href="">support@example.com</a> | <a href="">Privacy Policy </a>| <a href="">Terms of Service</a>


               </p>
               <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
           </aside>
       </footer>
    );
};

export default Footer;