import Image, { StaticImageData } from "next/image";
import { ButtonAnotherClasses } from "../ButtonAnotherClasses/ButtonAnotherClasses";
import "./ClassesInfo.modules.scss";

interface PropsClassesInfo {
  title: string;
  subtitle: string;
  imageBeneficio1: StaticImageData;
  imageBeneficio2: StaticImageData;
  imageBeneficio3: StaticImageData;
  titleBeneficio1: string;
  titleBeneficio2: string;
  titleBeneficio3: string;
  extraInfo: string;
  extraInfoImage: StaticImageData;
  numberOfCalories: number;
  numberOfDuration: number;
}

export const ClassesInfo: React.FC<PropsClassesInfo> = ({
  title,
  subtitle,
  imageBeneficio1,
  imageBeneficio2,
  imageBeneficio3,
  titleBeneficio1,
  titleBeneficio2,
  titleBeneficio3,
  extraInfo,
  extraInfoImage,
  numberOfCalories,
  numberOfDuration,
}) => {
  return (
    <div className="ClassesInfo__container">
      <div className="ClassesInfo__info">
        <div className="ClassesInfo__header">
          <h1 className="ClassesInfo__header__h1">{title}</h1>
          <p className="ClassesInfo__header__p">{subtitle}</p>
        </div>
        <div className="ClassesInfo__beneficios">
          <div className="ClassesInfo__beneficios__container">
            <Image
              className="ClassesInfo__beneficios__img"
              src={imageBeneficio1}
              alt="image"
            />
            <h3 className="ClassesInfo__beneficios__h3">{titleBeneficio1}</h3>
          </div>
          <div className="ClassesInfo__beneficios__container">
            <Image
              className="ClassesInfo__beneficios__img"
              src={imageBeneficio2}
              alt="image"
            />
            <h3 className="ClassesInfo__beneficios__h3">{titleBeneficio2}</h3>
          </div>
          <div className="ClassesInfo__beneficios__container">
            <Image
              className="ClassesInfo__beneficios__img"
              src={imageBeneficio3}
              alt="image"
            />
            <h3 className="ClassesInfo__beneficios__h3">{titleBeneficio3}</h3>
          </div>
        </div>
      </div>
      <div className="ClassesInfo__extra__info">
        <div className="ClassesInfo__extra__info__layout">
          <p className="ClassesInfo__extra__info__p">{extraInfo}</p>
          <div className="ClassesInfo__extra__info__beneficios">
            <div className="beneficios__info">
              <h3 className="beneficios__info__h3">{numberOfCalories}</h3>
              <p className="beneficios__info__p">Calorías</p>
            </div>
            <div className="beneficios__info">
              <h3 className="beneficios__info__h3">{numberOfDuration} min</h3>
              <p className="beneficios__info__p">Duración</p>
            </div>
          </div>
        </div>
        <div className="ClassesInfo__extra__info__container__img">
          <Image
            className="ClassesInfo__extra__info__img"
            src={extraInfoImage}
            alt="image"
          />
        </div>
      </div>
      <ButtonAnotherClasses />
    </div>
  );
};
