"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bodyCombat from "@/assets/clases-grupales/body-combat/body-combat.png";
import cardioBox from "@/assets/clases-grupales/cardio-box/cardio-box.jpg";
import dance from "@/assets/clases-grupales/dance/dance.jpg";
import funcional360 from "@/assets/clases-grupales/funcional360/funcional-360.png";
import gap from "@/assets/clases-grupales/gap/gap.jpg";
import grit from "@/assets/clases-grupales/grit/grit.png";
import hiit from "@/assets/clases-grupales/hiit/hiit.png";
import suspension from "@/assets/clases-grupales/suspension/suspension.png";
import superCore from "@/assets/clases-grupales/super-core/super-core.png";
import tabata from "@/assets/clases-grupales/tabata/tabata.jpg";
import yoga from "@/assets/clases-grupales/yoga/yoga.jpg";
import pilates from "@/assets/clases-grupales/pilates/pilates.jpg";
import starkEffect from "@/assets/clases-grupales/stark-effect/stark-effect.jpg";
import "@/styles/ClasesGrupales.modules.scss";

const clasesGrupales = () => {
  const router = useRouter();
  const handleNavigate = (route: string) =>
    router.push(`/clases-grupales/${route}`);

  return (
    <div className="clasesGrupales__container">
      <div className="clasesGrupales__header">
        <h1 className="clasesGrupales__header__h1">CLASES</h1>
        <p className="clasesGrupales__header__p">
          Ven a TuGym y completa tu rutina de ejercicios con nuestras clases
          grupales.
        </p>
      </div>
      <div className="clasesGrupales__info">
        <h1 className="clasesGrupales__info__h1">
          ELIGE LA CLASE QUE MAS TE GUSTE
        </h1>
        <p className="clasesGrupales__info__p">
          Todas las sesiones de entrenamiento están incluidas en tu membresía y
          no tienen costo adicional. Para conocer los horarios de clase puedes
          ingresar a la disciplina de tu preferencia o puedes consultarlos en el
          counter de tu sede TuGym.
        </p>
      </div>
      <div className="clasesGrupales__clases__layout">
        <div className="clasesGrupales__clase">
          <Image
            className="clasesGrupales__clase__img"
            src={bodyCombat}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">BODY COMBAT</h1>
            <p className="clasesGrupales__clase__info__p">
              La clase de artes marciales (karate, boxeo, muay thai, capoeira)
              numero 1 del mundo
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("body-combat")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase clase__reverse">
          <Image
            className="clasesGrupales__clase__img"
            src={cardioBox}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">CARDIO BOX</h1>
            <p className="clasesGrupales__clase__info__p">
              Entrenamiento aeróbico ideal para tonificar, el cual combina la
              fuerza muscular, resistencia, agilidad y coordinación
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("cardio-box")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase">
          <Image
            className="clasesGrupales__clase__img"
            src={dance}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">DANCE</h1>
            <p className="clasesGrupales__clase__info__p">
              Clase de rumba.Quema de 500 a 800 calorías y libera endorfinas
              bailando.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("dance")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase clase__reverse">
          <Image
            className="clasesGrupales__clase__img"
            src={funcional360}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">Funcional 360</h1>
            <p className="clasesGrupales__clase__info__p">
              Entrenamiento en módulos con ejercicios de gran variedad y alta
              intensidad.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("funcional-360")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase">
          <Image className="clasesGrupales__clase__img" src={gap} alt="image" />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">GAP</h1>
            <p className="clasesGrupales__clase__info__p">
              Trabaja Glúteos, Abdominales y Piernas de forma dinámica.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("gap")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase clase__reverse">
          <Image
            className="clasesGrupales__clase__img"
            src={grit}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">GRIT</h1>
            <p className="clasesGrupales__clase__info__p">
              30 minutos de pura fuerza, cardio y máxima potencia.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("grit")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase">
          <Image
            className="clasesGrupales__clase__img"
            src={hiit}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">HIIT</h1>
            <p className="clasesGrupales__clase__info__p">
              Activa tu metabolismo consiguiendo mayor efectividad en menos
              tiempo.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("hiit")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase clase__reverse">
          <Image
            className="clasesGrupales__clase__img"
            src={suspension}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">SUSPENSION</h1>
            <p className="clasesGrupales__clase__info__p">
              Trabajo funcional con tu propio peso en un sistema de correas en
              suspensión.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("suspension")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase">
          <Image
            className="clasesGrupales__clase__img"
            src={superCore}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">SUPER CORE</h1>
            <p className="clasesGrupales__clase__info__p">
              Ejercicios con cargas externas, bases inestables y tu propio peso
              para fortalecer el core.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("super-core")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase clase__reverse">
          <Image
            className="clasesGrupales__clase__img"
            src={tabata}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">TABATA</h1>
            <p className="clasesGrupales__clase__info__p">
              Entrena por intervalos de tiempo con ejercicios de fuerza y
              resistencia para ganar masa muscular.{" "}
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("tabata")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase">
          <Image
            className="clasesGrupales__clase__img"
            src={yoga}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">YOGA</h1>
            <p className="clasesGrupales__clase__info__p">
              La clase de Yoga combina posturas que buscan el equilibrio y la
              concentración del cuerpo para unirlo con la mente. La respiración
              adecuada y la relajación son claves para el balance del cuerpo y
              la mente.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("yoga")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase clase__reverse">
          <Image
            className="clasesGrupales__clase__img"
            src={pilates}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">PILATES</h1>
            <p className="clasesGrupales__clase__info__p">
              La clase de Pilates mejora la tonificación muscular y activa el
              núcleo del cuerpo a través de movimientos fluidos conscientes. La
              conexión mente-cuerpo mejora la técnica y la calidad del ejercicio
              físico.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("pilates")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
        <div className="clasesGrupales__clase">
          <Image
            className="clasesGrupales__clase__img"
            src={starkEffect}
            alt="image"
          />
          <div className="clasesGrupales__clase__info">
            <h1 className="clasesGrupales__clase__info__h1">STARK EFFECT</h1>
            <p className="clasesGrupales__clase__info__p">
              Una clase completa que combina diferentes tipos de entrenamientos
              para mejorar la fuerza, la tonificación y el acondicionamiento
              físico, maximizando la diversión y los resultados notables.
            </p>
            <button
              className="clasesGrupales__clase__info__button"
              onClick={() => handleNavigate("stark-effect")}
              type="button"
            >
              CONOCE MAS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clasesGrupales;
