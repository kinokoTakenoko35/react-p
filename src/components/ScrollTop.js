import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  {
    /*pathnameでスクロール位置を取得する */
  }
  const { pathname } = useLocation();
  useEffect(() => {
    {
      /* Window位置をスタートポジションに戻すために設定 */
    }
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
