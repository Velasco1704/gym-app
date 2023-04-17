import resistencia from "@/assets/clases-grupales/beneficiosImages/cardiovascular.jpg";
import agilidad from "@/assets/clases-grupales/beneficiosImages/elasticidad.png";
import fuera from "@/assets/clases-grupales/beneficiosImages/tonificar.jpg";
import starkEffectExtraImg from "@/assets/clases-grupales/stark-effect/stark-effect-extra-img.jpg";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const StarkEffect = () => {
  return (
    <ClassesInfo
      title="STARK EFFECT"
      subtitle="Entrenamiento de formato SMALL GROUP TRAINING"
      imageBeneficio1={resistencia}
      imageBeneficio2={agilidad}
      imageBeneficio3={fuera}
      titleBeneficio1="RESISTENCIA"
      titleBeneficio2="AGILIDAD"
      titleBeneficio3="FUERZA"
      extraInfo="Clase dirigida con pesas y equipamiento funcional. En 45 minutos se podrá entrenar todo el cuerpo, distribuido en sesiones a lo largo de la semana. Dichas sesiones son dictadas en el área funcional. Es para todo tipo de personas que buscan sentirse bien por fuera y ser más fuertes por dentro. Entrenamiento FUNCIONAL para mejorar las cualidades físicas como: Resistencia, fuerza, potencia, agilidad, velocidad, equilibrio y flexibilidad. Combina  entrenamiento cardio Intervalado de alta intensidad (H.I.I.T) para elevar el metabolismo. "
      extraInfoImage={starkEffectExtraImg}
      numberOfCalories={800}
      numberOfDuration={45}
    />
  );
};

export default StarkEffect;
