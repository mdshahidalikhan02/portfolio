import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = useCallback(
    (id: string) => {
      if (location.pathname === "/") {
        if (id === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    },
    [location.pathname, navigate]
  );

  return { goToSection };
}
