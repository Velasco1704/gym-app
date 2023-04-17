import adelgazar from "@/assets/clases-grupales/beneficiosImages/adelgazar.jpg";
import productividad from "@/assets/clases-grupales/beneficiosImages/productividad.jpg";
import fortalecimiento from "@/assets/clases-grupales/beneficiosImages/fortalecimiento.jpg";
import Funciona360ExtraImage from "@/assets/clases-grupales/funcional360/funcional-360-extra-img.png";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Funcional360 = () => {
  return (
    <ClassesInfo
      title="FUNCIONAL 360"
      subtitle="Trabaja todo tu cuerpo de manera integral"
      imageBeneficio1={adelgazar}
      imageBeneficio2={productividad}
      imageBeneficio3={fortalecimiento}
      titleBeneficio1="MOVILIDAD"
      titleBeneficio2="PRODUCTIVIDAD"
      titleBeneficio3="FORTALECIMIENTO"
      extraInfo="El entrenamiento Funcional 360 es considerado uno de los entrenamientos más completos que existen hoy en día. En TuGym preparamos circuitos dinámicos y basados en ejercicios de gran variedad y alta intensidad para mejorar gradualmente tu fuerza y resistencia. Recuerda que estas sesiones de entrenamiento están incluidas en tu membresía."
      extraInfoImage={Funciona360ExtraImage}
      numberOfCalories={654}
      numberOfDuration={50}
    />
  );
};

export default Funcional360;
