// import { BackgroundLines } from "./components/ui/background-lines";
import { Meteors } from "./components/magicui/meteors";
import { AnimatedTestimonials } from "./components/ui/animated-testimonials"

function App() {
  const testimonials = [
    {
      linkedin: "https://www.linkedin.com/in/ugalde-derbez-pedro-daniel-811843361/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      name: "Pedro Daniel Ugalde Derbez",
      designation: "Developer and 6th semester Artificial Intelligence Engineering student",
      src: "/Pdro.jpeg",
    },
    {
      linkedin: "https://www.linkedin.com/in/ilse-yazbeth-castro-paez-807b36361/",
      name: "Ilse Castro Paez",
      designation: "Developer and 6th semester Artificial Intelligence Engineering student",
      src: "/Ilc.jpeg",
    },
    {
      linkedin: "https://www.linkedin.com/in/antonioestrada02/",
      name: "Roberto Antonio Navarro Estrada",
      designation: "Developer and 6th semester Artificial Intelligence Engineering student",
      src: "/AntonioN.jpeg",
    },
    {
      linkedin: "https://www.linkedin.com/in/itziar-segura-065478346/",
      name: "Itziar Segura Ramírez",
      designation: "Developer and 6th semester Artificial Intelligence Engineering student",
      src: "/Itziar.jpeg",
    },
    {
      linkedin: "https://www.linkedin.com/in/ariadna-chico-lampart-b1409b298/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      name: "Ariadna Chico Lampart",
      designation: "Developer and 6th semester Artificial Intelligence Engineering student",
      src: "/Chico.jpeg",
    },

  ];
  return (
    
    <div>
        <div className="relative h-screen w-full overflow-hidden">
        {/* BackgroundLines en el fondo */}
        <div className="absolute inset-0 z-0">
          <Meteors />
        </div>

        {/* Texto IAAPI en la parte superior */}
        <div className="flex flex-col absolute inset-0 z-10 items-center text-center justify-center">
          <div className="text-[5rem] lg:text-[8rem] font-semibold text-[#0C2778] tracking-wider dark:text-white">
            IAPI
          </div>
          <div className="text-[1.3rem] md:text-[1.7rem] font-semibold text-[#7E828B] mb-5 tracking-wider dark:text-white">
          TalentLand Hackathon Micron track 2025 team
          </div>
          <img src="/IAPI-Team.jpeg" className="w-auto h-[50%] md:rounded-3xl mb-10"/>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </div>
  );
}

export default App;
