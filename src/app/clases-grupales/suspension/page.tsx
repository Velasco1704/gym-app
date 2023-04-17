import tonificar from "@/assets/clases-grupales/beneficiosImages/tonificar.jpg";
import movilidadCorporal from "@/assets/clases-grupales/beneficiosImages/agilidad.jpg";
import fortalecimiento from "@/assets/clases-grupales/beneficiosImages/fortalecimiento-abdomen.jpg";
import suspensionExtraImg from "@/assets/clases-grupales/suspension/suspension-extra-img.png";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Suspension = () => {
  return (
    <ClassesInfo
      title="SUSPENSION"
      subtitle="Entrenamiento funcional con un sistema de cintas en suspensión."
      imageBeneficio1={tonificar}
      imageBeneficio2={fortalecimiento}
      imageBeneficio3={movilidadCorporal}
      titleBeneficio1="TONIFICACIÓN CORPORAL"
      titleBeneficio2="FORTALECIMIENTO"
      titleBeneficio3="MOVILIDAD"
      extraInfo="¿Qué es SUSPENSIÓN? Es una clase en donde mezclaremos ejercicios funcionales con un sistema de cintas y en el cual utilizas el peso de tu propio cuerpo para aumentar fuerza y resistencia muscular. En nuestras clases grupales puedes controlar el grado de intensidad de los ejercicios de acuerdo a tus necesidades y objetivos. Recuerda que estas sesiones de entrenamiento están incluidas en tu afiliación."
      extraInfoImage={suspensionExtraImg}
      numberOfCalories={475}
      numberOfDuration={50}
    />
  );
};

export default Suspension;
