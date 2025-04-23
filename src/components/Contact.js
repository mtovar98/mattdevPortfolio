import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const data = new FormData(form);
  
    const response = await fetch("https://formspree.io/f/mvgaorpg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
  
    if (response.ok) {
      alert("✅ Email Sent Successfully! Thank you for reaching out — I'll be in touch shortly.");
      form.reset(); // limpia el formulario
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  };
  



function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-[#101010] flex flex-col items-center justify-center px-8 py-8">
          <h2 className="text-[#c2cad0] xl:text-[25px] sm:text-[20px] xs:text-[18px] tracking-wider mb-10">
            LET'S <span className="text-[#b4f532]">WORK</span> TOGETHER!
          </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center xl:gap-20 sm:gap-0 xs:gap-0">
      
          <div className="flex justify-center items-start  xl:flex-wrap md:flex-nowrap">
            <form 
                onSubmit={handleSubmit}
                method="POST"
                className="backdrop-blur-md bg-[#1a1a1a]/50 border border-[#b4f532] shadow-[0_0_15px_#b4f53244] rounded-2xl p-8 xl:w-[380px] xs:w-[40vh] text-left space-y-3 xs:text-[12px] xl:text-[15px]">
              <div>
                <label htmlFor="name" className="block text-[#c2cad0] font-semibold mb-2">NAME</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full p-2 rounded-lg bg-[#1f1f1f] text-[#c2cad0] border border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-[#b4f532]/60 transition-all duration-200 xl:text-[12px] sm:text-[10px] xs:text-[10px]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#c2cad0] font-semibold mb-2 ">EMAIL</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 rounded-lg bg-[#1f1f1f] text-[#c2cad0] border border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-[#b4f532]/60 transition-all duration-200 xl:text-[12px] sm:text-[10px] xs:text-[10px]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#c2cad0] font-semibold mb-2">SUBJECT</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 rounded-lg bg-[#1f1f1f] text-[#c2cad0] border border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-[#b4f532]/60 transition-all duration-200 xl:text-[12px] sm:text-[10px] xs:text-[10px]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#c2cad0] font-semibold mb-2">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write here your message"
                  className="w-full p-2 rounded-lg bg-[#1f1f1f] text-[#c2cad0] border border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-[#b4f532]/60 transition-all duration-200 xl:text-[12px] sm:text-[10px] xs:text-[10px]"
                />
              </div>
              <button
                type="submit"
                className="xl:w-3/4 sm: xs:w-[10vh] bg-[#b4f532] text-[#101010] mx-auto block py-2 rounded-lg hover:bg-[#a5e42f] transition duration-300 tracking-wide"
              >
                Enviar
              </button>
            </form>
          </div>


        <div className="flex flex-col items-center justify-start space-y-4">

          <div className="flex justify-center space-x-6 mt-8">
            {[
              { href: "https://www.linkedin.com/in/miguel-tovar-tabares-6553021b9", icon: "fab fa-linkedin" },
              { href: "https://www.facebook.com/share/18aLTub7t5/?mibextid=wwXIfr", icon: "fab fa-facebook" },
              { href: "https://www.instagram.com/mtovar.98?igsh=emR2cDFiZWZyM2U1&utm_source=qr", icon: "fab fa-instagram" },
              { href: "https://www.tiktok.com/@mtovar098?_t=ZS-8tLvDTyL13H&_r=1", icon: "fab fa-tiktok" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b4f532]/80 xl:text-3xl sm:text-2xl xs:text-2xl hover:text-[#b4f532] transition duration-300"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        </div>
      </section>
      
    )
}


export default Contact;