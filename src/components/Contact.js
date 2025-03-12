import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Contact() {
    return (
        <section id="contact" className="min-h-screen py-6 bg-black text-[#b4f532]">
            <div className="container mx-auto px-10 text-center">
                <h2 className="text-4xl font-extrabold mb-8">Contacto</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <form className="bg-slate-600 p-8 rounded-lg shadow-lg space-y-2">
                            <div>
                                <label htmlFor="name" className="block text-left mb-2">
                                    Nombre
                                </label>
                                <input 
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-900 rounded-lg bg-slate-800 text-textPrimary focus:outline-none focus:border-accent"
                                    placeholder="Tu nombre"
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-left mb-2">
                                    Correo electrónico
                                </label>
                                <input 
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-900 rounded-lg bg-slate-800 text-textPrimary focus:outline-none focus:border-accent"
                                    placeholder="Tu correo electrónico"
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-left mb-2">
                                    Asunto
                                    </label>
                                    <input
                                    type="text"
                                    id="subject"
                                    className="w-full p-3 border border-gray-900 rounded-lg bg-slate-800 text-textPrimary focus:outline-none focus:border-accent"
                                    placeholder="Asunto del mensaje"
                                    />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-left mb-2">
                                Mensaje
                                </label>
                                <textarea
                                id="message"
                                rows="5"
                                className="w-full p-3 border border-gray-900 rounded-lg bg-slate-800 text-textPrimary focus:outline-none focus:border-accent"
                                placeholder="Escribe tu mensaje aquí"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-accent/80 transition duration-300"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div>
                        <p className="text-xl mb-6">Sígueme en mis redes sociales:</p>
                        <div className="flex justify-center space-x-6">
                            {/* LinkedIn */}
                            <a
                            href="www.linkedin.com/in/miguel-tovar-tabares-6553021b9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 transition duration-300 text-3xl"
                            >
                            <i className="fab fa-linkedin"></i>
                            </a>

                            {/* Facebook */}
                            <a
                            href="https://www.facebook.com/share/18aLTub7t5/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 transition duration-300 text-3xl"
                            >
                            <i className="fab fa-facebook"></i>
                            </a>

                            {/* Instagram */}
                            <a
                            href="https://www.instagram.com/mtovar.98?igsh=emR2cDFiZWZyM2U1&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 transition duration-300 text-3xl"
                            >
                            <i className="fab fa-instagram"></i>
                            </a>

                            {/* TikTok */}
                            <a
                            href="https://www.tiktok.com/@mtovar098?_t=ZS-8tLvDTyL13H&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 transition duration-300 text-3xl"
                            >
                            <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact;