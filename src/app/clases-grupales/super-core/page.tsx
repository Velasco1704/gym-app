import fortalecimiento from "@/assets/clases-grupales/beneficiosImages/fortalecimiento-abdomen.jpg";
import equilibrio from "@/assets/clases-grupales/beneficiosImages/equilibrio.jpg";
import postura from "@/assets/clases-grupales/beneficiosImages/postura.jpg";
import superCoreExtraImg from "@/assets/clases-grupales/super-core/super-core-extra-img.png";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const SuperCore = () => {
  return (
    <ClassesInfo
      title="SUPER CORE"
      subtitle="Una clase dedicada al fortalecimiento de la zona abdominal."
      imageBeneficio1={fortalecimiento}
      imageBeneficio2={equilibrio}
      imageBeneficio3={postura}
      titleBeneficio1="FORTALECIMIENTO"
      titleBeneficio2="EQUILIBRIO"
      titleBeneficio3="POSTURA"
      extraInfo="Nuestras clases de SUPER CORE consisten en fortalecer los músculos del centro de tu cuerpo por medio de ejercicios con tu propio peso corporal, cargas externas y bases inestables; garantizando mejorar la fuerza en la zona media, el equilibrio y el control de la postura. Recuerda que estas sesiones de entrenamiento están incluidas en tu afiliación."
      extraInfoImage={superCoreExtraImg}
      numberOfCalories={371}
      numberOfDuration={50}
    />
  );
};

export default SuperCore;
