import fortalecimiento from "@/assets/clases-grupales/beneficiosImages/fortalecimiento.jpg";
import resistencia from "@/assets/clases-grupales/beneficiosImages/cardiovascular.jpg";
import mente from "@/assets/clases-grupales/beneficiosImages/equilibrio.jpg";
import yogaExtraImg from "@/assets/clases-grupales/yoga/yoga-extra-img.jpg";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Yoga = () => {
  return (
    <ClassesInfo
      title="YOGA"
      subtitle="Fortalecimiento y resistencia para cuerpo y mente"
      imageBeneficio1={fortalecimiento}
      imageBeneficio2={resistencia}
      imageBeneficio3={mente}
      titleBeneficio1="FORTALECIMIENTO"
      titleBeneficio2="RESISTENCIA"
      titleBeneficio3="MENTE"
      extraInfo="Trabajas con tu propio cuerpo para lograr la conquista del mismo, re aprender a como respirar y como mantener una buena postura genera una diferencia en el estilo de vida de cada persona para conocer y conectar con el verdadero ser natural, que nos compone tanto física, mental y espiritualmente, no tiene distinción de edad y es también terapéutico para personas con preexistencias en salud leve."
      extraInfoImage={yogaExtraImg}
      numberOfCalories={150}
      numberOfDuration={45}
    />
  );
};

export default Yoga;
