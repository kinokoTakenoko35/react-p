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
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  //If exit animation return
  exit: {
    opacity: 0,
    y: 300,
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
      dutation: 0.75,
    },
  },
};
