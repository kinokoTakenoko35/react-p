export const pageAnimation = {
  //initial初期値定義
  hidden: {
    opacity: 0,
    y: 300,
  },
  //Animation実行時の設定
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  //If exit animation return
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const photoAnim = {
  /*opacity:0 完全に透明 */
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    /*opacity:1 完全に不透明にチェンジ*/
    opacity: 1,
    transition: {
      wase: "easeOut",
      duration: 0.75,
      delay: 0.5,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const slider = {
  /* skew = rotate */
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  /* staggerChildre子コンポーネントとの時間差を指定できる。 */
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const swoopAdoop = {
  /* skew = rotate */
  hidden: { width: "0%", transition: { duration: 0.5 } },
  show: {
    width: "100%",
    transition: { ease: "easeOut", duration: 1 },
  },
};
