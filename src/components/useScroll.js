import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  {
    /* Animetionをcontrolsへ */
  }
  const controls = useAnimation();
  {
    /* threshold=0.5スクロールした際に true/false値を取得 */
  }
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
