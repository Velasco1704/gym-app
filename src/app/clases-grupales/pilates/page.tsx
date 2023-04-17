import fuerza from "@/assets/clases-grupales/beneficiosImages/fortalecimiento.jpg";
import elasticidad from "@/assets/clases-grupales/beneficiosImages/elasticidad.png";
import equilibrio from "@/assets/clases-grupales/beneficiosImages/equilibrio.jpg";
import pilatesExtraImg from "@/assets/clases-grupales/pilates/pilates-extra-img.jpg";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Pilates = () => {
  return (
    <ClassesInfo
      title="PILATES"
      subtitle="Disciplina fitness"
      imageBeneficio1={elasticidad}
      imageBeneficio2={fuerza}
      imageBeneficio3={equilibrio}
      titleBeneficio1="ELASTICIDAD"
      titleBeneficio2="FUERZA"
      titleBeneficio3="EQUILIBRIO"
      extraInfo="Trabajas con tu propio cuerpo para lograr la conquista del mismo, re aprender a como respirar y como mantener una buena postura genera una diferencia en el estilo de vida de cada persona para conocer y conectar con el verdadero ser natural, que nos compone tanto física, mental y espiritualmente, no tiene distinción de edad y es también terapéutico para personas con preexistencias en salud leve."
      extraInfoImage={pilatesExtraImg}
      numberOfCalories={150}
      numberOfDuration={45}
    />
  );
};

export default Pilates;
