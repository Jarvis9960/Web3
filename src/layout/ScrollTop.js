import Image from "next/image";
import { Fragment } from "react";

const ScrollTop = () => {
  return (
    <Fragment>
      <a href="#" className="neoh_fn_totop">
        <span className="arrow">
          <Image src="/svg/right-arr.svg" width={100} height={100} alt="" className="fn__svg" />
        </span>
        <span className="circle">
          <Image src="/svg/circle.svg" width={100} height={100} alt="" className="fn__svg" />
        </span>
      </a>
    </Fragment>
  );
};
export default ScrollTop;
