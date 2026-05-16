import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { assets } from '../lib/assets';

export default function LoginModal() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xs overflow-hidden flex w-[1139px] h-[624px] relative">
         {/* Close Button */}
         <button 
           onClick={() => navigate("/")}
           className="absolute top-8 right-8 text-neutral-900 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
         >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
         </button>

         {/* Left Side - Image */}
         <div className="w-[501px] h-[624px] relative shrink-0">
            <img src={assets.dish} alt="Cooking" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
            <h2 className="absolute top-[72px] left-[110px] w-[302px] text-white font-poppins text-[24px] leading-[36px] font-bold text-center">
               "Embrace the art of cooking, where flavors come alive!"
            </h2>
         </div>

         {/* Right Side - Form */}
         <div className="flex-1 flex flex-col pt-8 pl-[32px] pr-[24px]">
            <h1 className="text-[32px] leading-[48px] font-bold font-poppins text-neutral-900 mt-2 mb-[24px]">Login</h1>
            <p className="font-manrope text-[20px] leading-[30px] font-normal text-neutral-900 mb-5">Enter your email to log in.</p>
            
            <div className="relative mb-[24px]">
               <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[582px] h-[46px] bg-[#F3F4F6] hover:bg-[#F3F4F6] focus:bg-white rounded-xl px-4 font-manrope text-[14px] leading-[22px] outline-none focus:ring-2 focus:ring-primary-200 transition-all placeholder:text-[#BCC1CA] text-neutral-900" 
               />
            </div>
            
            <button
              disabled={!email.trim()}
              onClick={() => navigate('/dashboard')}
              className="w-[582px] h-[44px] bg-[#F44B87] hover:bg-[#F0105E] active:bg-[#D20D52] disabled:opacity-40 text-white font-manrope font-normal text-[16px] leading-[26px] rounded-xl flex items-center justify-center transition-colors mb-8"
            >
               Continue
            </button>

            <div className="w-[582px] flex items-center gap-4 mb-8">
               <div className="flex-1 h-px bg-gray-200"></div>
               <span className="text-sm text-gray-400 font-manrope">OR</span>
               <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <p className="w-[564px] font-manrope text-[14px] leading-[22px] text-[#9095A0] text-center mb-8 mx-auto">
               By continuing, you agree to the updated <span className="font-bold text-gray-700">Terms of Sale</span>, <span className="font-bold text-gray-700">Terms of Service</span>, and <span className="font-bold text-gray-700">Privacy Policy</span>.
            </p>

            <div className="flex flex-col gap-4">
               <button className="w-[582px] h-[44px] flex items-center justify-center gap-[6px] rounded-md bg-[#F1F4FE] hover:bg-[#F1F4FE] active:bg-[#F1F4FE] text-[#EA4336] font-manrope text-[16px] leading-[26px] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"/></svg>
                  <span>Continue with Google</span>
               </button>
               <button className="w-[582px] h-[44px] flex items-center justify-center gap-[6px] rounded-md bg-[#F1F4FE] hover:bg-[#F1F4FE] active:bg-[#F1F4FE] text-[#3F5893] font-manrope text-[16px] leading-[26px] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
                  <span>Continue with Facebook</span>
               </button>
               <button className="w-[582px] h-[44px] flex items-center justify-center gap-[6px] rounded-md bg-[#F1F4FE] hover:bg-[#F1F4FE] active:bg-[#F1F4FE] text-[#000000] font-manrope text-[16px] leading-[26px] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  <span>Continue with Apple</span>
               </button>
            </div>
            
            <div className="mt-6 text-center w-[582px]">
               <span className="text-[#565E6C] font-manrope text-[14px]">Don't have an account? </span>
               <Link to="/auth" state={{ showSignup: true }} className="text-[#F44B87] font-manrope font-bold hover:underline cursor-pointer">Sign up</Link>
            </div>
         </div>
      </div>
    </div>
  );
}
