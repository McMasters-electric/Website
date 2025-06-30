import React from 'react';
const Footer: React.FC = () => {
 return (
   <footer className="bg-black text-white py-8 md:py-12">
     <div className="container mx-auto px-4">
       {/* Main Footer Content */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-8">
         
         {/* Left Side - Logo and Company Name */}
         <div className="flex items-center justify-center md:justify-start space-x-4 md:ml-4">
           <img 
             src="https://raw.githubusercontent.com/McMasters-electric/images/refs/heads/main/McMasters%20logo%20150px_result.webp" 
             alt="McMaster Electric LLC Logo" 
             className="h-25 w-auto"
             style={{ 
               mixBlendMode: 'screen'
             }}
           />
         </div>
         
         {/* Middle - Legal Links */}
         <div className="text-center">
           <div className="flex flex-col space-y-3 text-sm">
             <a href="/privacy-policy" className="chrome-text transition-colors">
               Privacy Policy
             </a>
             <a href="/terms-of-service" className="chrome-text transition-colors">
               Terms of Service
             </a>
             <a href="/cookie-policy" className="chrome-text transition-colors">
               Cookie Policy
             </a>
           </div>
         </div>
         
         {/* Right Side - Follow Us */}
         <div className="text-center md:text-right mr-4">
           <div className="flex flex-col items-center md:items-end space-y-3">
             <span className="text-gray-400 text-sm">Follow Us</span>
             <a 
               href="https://www.facebook.com/mcmasterelectric/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-600 hover:text-blue-500 transition-colors"
             >
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
               </svg>
             </a>
           </div>
         </div>
       </div>
       
       {/* Copyright */}
       <div className="text-center mt-8">
         <p className="text-sm text-gray-400">
           © 2025 McMaster Electric LLC. All rights reserved.
         </p>
       </div>
     </div>
   </footer>
 );
};
export default Footer;
