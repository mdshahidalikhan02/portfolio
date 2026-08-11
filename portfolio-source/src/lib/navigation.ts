import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Scrolls to a section by id. If we're not on the home page, navigates
// there first and passes the target id via router state; Home.tsx picks
// that up on mount and scrolls once the sections exist in the DOM.
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
