import fortalecimiento from "@/assets/clases-grupales/beneficiosImages/fortalecimiento.jpg";
import resistencia from "@/assets/clases-grupales/beneficiosImages/cardiovascular.jpg";
import tonificar from "@/assets/clases-grupales/beneficiosImages/tonificar.jpg";
import tabataExtraImg from "@/assets/clases-grupales/tabata/tabata-extra-img.png";
import { ClassesInfo } from "@/components/ClassesInfo/ClassesInfo";

const Tabata = () => {
  return (
    <ClassesInfo
      title="TABATA"
      subtitle="Ejercicios de fuerza en intervalos de tiempo. "
      imageBeneficio1={fortalecimiento}
      imageBeneficio2={resistencia}
      imageBeneficio3={tonificar}
      titleBeneficio1="FORTALECIMIENTO"
      titleBeneficio2="RESISTENCIA"
      titleBeneficio3="TONIFICACIÓN"
      extraInfo="Nuestras clases de Tabata son de alta intensidad.  ¡Es un entrenamiento con mucha energía! Entrena por intervalos de tiempo con ejercicios de fuerza y resistencia para ganar masa muscular. Trabajamos en bloques de 20 segundos por 10 segundos de descanso. Recuerda que estas sesiones están incluidas en tu membresía."
      extraInfoImage={tabataExtraImg}
      numberOfCalories={450}
      numberOfDuration={30}
    />
  );
};

export default Tabata;
