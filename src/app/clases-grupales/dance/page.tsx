import adelgazar from "@/assets/clases-grupales/beneficiosImages/adelgazar.jpg";
import coordinacion from "@/assets/clases-grupales/beneficiosImages/coordinacion.jpg";
import cardiovascular from "@/assets/clases-grupales/beneficiosImages/cardiovascular.jpg";
import danceExtraImage from "@/assets/clases-grupales/dance/dance-extra-img.jpg";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Dance = () => {
  return (
    <ClassesInfo
      title="DANCE"
      subtitle="Entrena bailando con esta clase de rumba."
      imageBeneficio1={adelgazar}
      imageBeneficio2={coordinacion}
      imageBeneficio3={cardiovascular}
      titleBeneficio1="PÉRDIDA DE PESO"
      titleBeneficio2="COORDINACIÓN Y ELASTICIDAD"
      titleBeneficio3="CAPACIDAD CARDIOVASCULAR"
      extraInfo="¡Quema de 500 a 800 calorías y libera endorfinas con TuGym Dance!. En estas clases de rumba, pensadas para todos, combinamos ejercicios aeróbicos con movimientos de baile, a ritmo de salsa, merengue, hip-hop, bachata, folclor, reggaeton y muchos más.
      ¡Abandona tu rutina y diviértete sin olvidar tu meta! Recuerda que estas sesiones están incluidas en tu membresía."
      extraInfoImage={danceExtraImage}
      numberOfCalories={765}
      numberOfDuration={50}
    />
  );
};

export default Dance;
