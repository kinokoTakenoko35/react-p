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
    },
  },
  //If exit animation return
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};
