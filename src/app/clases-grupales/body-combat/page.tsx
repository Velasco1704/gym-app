import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";
import bodyCombatExtraImage from "@/assets/clases-grupales/body-combat/body-combat-extra-image.png";
import tonificar from "@/assets/clases-grupales/beneficiosImages/tonificar.jpg";
import adelgazar from "@/assets/clases-grupales/beneficiosImages/adelgazar.jpg";
import agilidad from "@/assets/clases-grupales/beneficiosImages/agilidad.jpg";

const BodyCombat = () => {
  return (
    <ClassesInfo
      title="BODY COMBAT"
      subtitle="Trabajo cardiovascular con artes marciales."
      imageBeneficio1={tonificar}
      imageBeneficio2={adelgazar}
      imageBeneficio3={agilidad}
      titleBeneficio1="TONIFICACIÓN CORPORAL"
      titleBeneficio2="PÉRDIDA DE PESO"
      titleBeneficio3="AGILIDAD"
      extraInfo="En nuestras clases de BODY COMBAT con ejercicios de artes marciales
      mixtas, trabajamos principalmente la resistencia cardiovascular y el
      fortalecimiento del core. La música es un elemento indispensable en
      BODY COMBAT para marcar el ritmo de los movimientos. Recuerda que
      estas sesiones están incluidas en tu membresía."
      extraInfoImage={bodyCombatExtraImage}
      numberOfCalories={763}
      numberOfDuration={50}
    />
  );
};

export default BodyCombat;
