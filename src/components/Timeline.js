import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
const Timeline = () => {
  const [active, setActive] = useState(2);
  const [activeTimeline, setActiveTimeline] = useState(2);
  const onClick = (value) => {
    setActive(value);
  };
  const activeClass = (value) =>
    value === active ? "active" : value > active ? "next" : "previous";
  const filter = (value) => (100 / active) * value;
  return (
    <Fragment>
      {/* Main Title */}
      <div className="neoh_fn_title">
        <h3 className="fn_title">Bajrangi Roadmap</h3>
        <div className="line">
          <span />
        </div>
      </div>
      {/* !Main Title */}
      {/* Timeline */}
      <div className="neoh_fn_timeline">
        {/* Timeline Content */}
        <div className="timeline_content">
          <ul className="timeline_list">
            <li className={`timeline_item ${activeClass(1)}`} data-index={1}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <Image src="/img/about/bajranbali-09.jpg" width={1100} height={1400} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajrangi-08.jpg" width={800} height={1000} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajrangbali-10.jpg" width={800} height={1000} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>March 09, 2023</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                      Bajrangi Token smart contract deployed
                    </Link>
                  </h3>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <Image src="/img/about/bajrangbali-01.jpg" width={1100} height={1400} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajrangbali-02.jpg" width={800} height={1000} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajranbali-03.jpg" width={800} height={1000} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>April 18, 2023</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">Bajrangi Token distribution started</Link>
                  </h3>
                  
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(3)}`} data-index={3}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <Image src="/img/about/bajrangbali-04.jpg" width={1100} height={1400} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajrangbali-5.jpg" width={800} height={1000} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajranbali-6.jpg" width={800} height={1000} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Aug 27, 2024</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">Applying for STO</Link>
                  </h3>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(4)}`} data-index={4}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <Image src="/img/about/bajrangbali-07.jpg" width={1100} height={1400} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajrangi-08.jpg" width={800} height={1000} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajranbali-09.jpg" width={800} height={1000} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Nov 09, 2025</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single"> Applying for Bajrangi DeX</Link>
                  </h3>
                  
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(5)}`} data-index={5}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <Image src="/img/about/bajrangbali-10.jpg" width={1100} height={1400} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajrangbali-01.jpg" width={800} height={1000} alt="" />
                      </div>
                      <div className="item">
                        <Image src="/img/about/bajrangbali-5.jpg" width={800} height={1000} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>March 18, 2026</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">
                      Applying for DeFi
                    </Link>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Timeline Content */}
        {/* Timeline Progress */}
        <div className="timeline_progress">
          {/* Nav */}
          <a
            className="nav_prev c-pointer"
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 1 ? activeTimeline : activeTimeline - 1
              )
            }
          >
            <Image src="/svg/right-arr.svg" width={100} height={100} alt="" className="fn__svg" />
          </a>
          <a
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 7 ? activeTimeline : activeTimeline + 1
              )
            }
            className="nav_next c-pointer"
          >
            <Image src="/svg/right-arr.svg" width={100} height={100} alt="" className="fn__svg" />
          </a>
          {/* !Nav */}
          <div className="progress_line_wrapper">
            <div
              className="progress_line"
              style={{
                width: "1645.66px",
                transform: `translateX(-${
                  (100 / activeTimeline) * (activeTimeline - 2)
                }%)`,
              }}
            >
              <ul>
                <li className={activeClass(1)}>
                  <a onClick={() => onClick(1)}>
                    <span className="text">March 09, 2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(1)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">April 18, 2023</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(2)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(3)}>
                  <a onClick={() => onClick(3)}>
                    <span className="text">Aug 27, 2024</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(3)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(4)}>
                  <a onClick={() => onClick(4)}>
                    <span className="text">Nov 09, 2025</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(4)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(5)}>
                  <a onClick={() => onClick(5)}>
                    <span className="text">March 18, 2026</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(5)}%)` }}
                    />
                  </a>
                </li>
                {/* <li className={activeClass(6)}>
                  <a onClick={() => onClick(6)}>
                    <span className="text">June 23, 2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(6)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(7)}>
                  <a onClick={() => onClick(7)}>
                    <span className="text">July 01, 2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(7)}%)` }}
                    />
                  </a>
                </li> */}
              </ul>
              <span className="active_line" />
            </div>
          </div>
        </div>
        {/* !Timeline Progress */}
      </div>
      {/* !Timeline */}
    </Fragment>
  );
};
export default Timeline;
