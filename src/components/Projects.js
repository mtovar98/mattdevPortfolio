import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Agregar estos íconos si no los tienes

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1",
    image: "/images/fondo3.png",
    details: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el ...",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2",
    image: "/images/fondo4.jpeg",
    details: "Detalles más amplios sobre el proyecto 2.",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción breve del proyecto 3",
    image: "/images/proyecto-3.png",
    details: "Detalles más amplios sobre el proyecto 3.",
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Descripción breve del proyecto 4",
    image: "/images/proyecto-4.png",
    details: "Detalles más amplios sobre el proyecto 4.",
  },
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const itemsPerPage = 2;


  // Calcular los proyectos visibles
  const visibleProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Funciones para cambiar de página
  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < projects.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  //funcion para cerrar el modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-10 bg-black text-text-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-[#b4f532]">Proyectos</h2>
        
        {/* Contenedor de proyectos con transición suave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 ease-in-out">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-secondary bg-slate-600 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navegación entre páginas */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={prevPage}
            className={`px-4 py-2 text-white rounded-lg ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : "flex justify-center items-center"
            }`}
            disabled={currentPage === 0}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextPage}
            className={`px-4 py-2 text-white rounded-lg ml-4 ${
              (currentPage + 1) * itemsPerPage >= projects.length
                ? "opacity-50 cursor-not-allowed"
                : "lex justify-center items-center"
            }`}
            disabled={(currentPage + 1) * itemsPerPage >= projects.length}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-slate-900 rounded-lg max-w-lg w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <p>{selectedProject.details}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
