import adelgazar from "@/assets/clases-grupales/beneficiosImages/adelgazar.jpg";
import coordinacion from "@/assets/clases-grupales/beneficiosImages/coordinacion.jpg";
import cardiovascular from "@/assets/clases-grupales/beneficiosImages/cardiovascular.jpg";
import CardioBoxExtraImage from "@/assets/clases-grupales/cardio-box/cardio-box-extra-img.jpg";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const CardioBox = () => {
  return (
    <ClassesInfo
      title="CARDIO BOX"
      subtitle="Entrenamiento aeróbico que combina técnicas de combate"
      imageBeneficio1={adelgazar}
      imageBeneficio2={coordinacion}
      imageBeneficio3={cardiovascular}
      titleBeneficio1="PÉRDIDA DE PESO"
      titleBeneficio2="COORDINACIÓN"
      titleBeneficio3="CAPACIDAD CARDIOVASCULAR"
      extraInfo="¿Sabes qué es CARDIO BOX? Es un estilo de entrenamiento aeróbico ideal para tonificar, el cual combina la fuerza muscular, resistencia, agilidad y coordinación, usando movimientos de combate con diferentes técnicas especiales. Recarga tu energía mejorando tu bienestar, autoestima y disciplina. Recuerda que estas sesiones de entrenamiento están incluidas en tu plan de afiliación."
      extraInfoImage={CardioBoxExtraImage}
      numberOfCalories={750}
      numberOfDuration={50}
    />
  );
};

export default CardioBox;
