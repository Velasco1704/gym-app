import tonificar from "@/assets/clases-grupales/beneficiosImages/tonificar.jpg";
import fortalecimiento from "@/assets/clases-grupales/beneficiosImages/fortalecimiento-abdomen.jpg";
import equilibrio from "@/assets/clases-grupales/beneficiosImages/equilibrio.jpg";
import gapExtraImg from "@/assets/clases-grupales/gap/gap-extra-img.png";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Gap = () => {
  return (
    <ClassesInfo
      title="GAP"
      subtitle="Entrenamiento de glúteos, abdomen y pierna"
      imageBeneficio1={tonificar}
      imageBeneficio3={fortalecimiento}
      imageBeneficio2={equilibrio}
      titleBeneficio1="TONIFICACIÓN CORPORAL"
      titleBeneficio2="FORTALECIMIENTO"
      titleBeneficio3="EQUILIBRIO"
      extraInfo="Trabaja glúteos, abdominales y piernas de forma dinámica a través de ejercicios con pesas y quema 420 calorías en cada sesión. Adapta la dificultad según tu nivel de entrenamiento y gana estabilidad, fuerza y mejora tu postura."
      extraInfoImage={gapExtraImg}
      numberOfCalories={420}
      numberOfDuration={50}
    />
  );
};

export default Gap;
