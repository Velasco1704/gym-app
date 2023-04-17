"use client";
import { useRouter } from "next/navigation";
import "./ButtonAnotherClasses.modules.scss";

export const ButtonAnotherClasses = () => {
  const router = useRouter();
  const handleNavigate = () => router.push("/clases-grupales");
  return (
    <button
      className="ButtonAnotherClasses__button"
      onClick={handleNavigate}
      type="button"
    >
      VER OTRAS CLASES
    </button>
  );
};
