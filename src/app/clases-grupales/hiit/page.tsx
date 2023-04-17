import adelgazar from "@/assets/clases-grupales/beneficiosImages/adelgazar.jpg";
import cardiovascular from "@/assets/clases-grupales/beneficiosImages/cardiovascular.jpg";
import agilidad from "@/assets/clases-grupales/beneficiosImages/agilidad.jpg";
import hiitExtraImage from "@/assets/clases-grupales/hiit/hiit-extra-img.png";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Hiit = () => {
  return (
    <ClassesInfo
      title="HIIT"
      subtitle="Entrenamiento de alta intensidad por intervalos"
      imageBeneficio1={adelgazar}
      imageBeneficio2={cardiovascular}
      imageBeneficio3={agilidad}
      titleBeneficio1="PÉRDIDA DE PESO"
      titleBeneficio2="CAPACIDAD CARDIOVASCULAR"
      titleBeneficio3="AGILIDAD"
      extraInfo="Activa tu metabolismo consiguiendo mayor efectividad en menos tiempo. Este entrenamiento por intervalos alterna intensidad anaeróbica con descansos y periodos de intensidad baja-media. Quema hasta 720 calorías en cada clase."
      extraInfoImage={hiitExtraImage}
      numberOfCalories={720}
      numberOfDuration={30}
    />
  );
};

export default Hiit;
