import tonificar from "@/assets/clases-grupales/beneficiosImages/tonificar.jpg";
import adelgazar from "@/assets/clases-grupales/beneficiosImages/adelgazar.jpg";
import agilidad from "@/assets/clases-grupales/beneficiosImages/agilidad.jpg";
import gritExtraImage from "@/assets/clases-grupales/grit/grit-extra-img.png";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Grit = () => {
  return (
    <ClassesInfo
      title="GRIT"
      subtitle="Trabajo de cardio, fuerza y ejercicios pliométricos"
      imageBeneficio1={tonificar}
      imageBeneficio2={adelgazar}
      imageBeneficio3={agilidad}
      titleBeneficio1="TONIFICACIÓN CORPORAL"
      titleBeneficio2="PÉRDIDA DE PESO"
      titleBeneficio3="AGILIDAD"
      extraInfo="Quema calorías y mejora tu salud cardiovascular con este entrenamiento por intervalos de alta intensidad (HIIT). En TuGym hemos preparado una clase de 30 minutos de pura fuerza, cardio y máxima potencia. Con cada sesión de GRIT llevarás tu cuerpo al siguiente nivel. Recuerda que estas sesiones de entrenamiento están incluidas en tu afiliación."
      extraInfoImage={gritExtraImage}
      numberOfCalories={720}
      numberOfDuration={30}
    />
  );
};

export default Grit;
