import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import Image from "next/image";

const Roadmap = () => {
  return (
    <Layout pageName={"RoadMap"}>
      <PageBanner pageName={"RoadMap"} />
      <div className="neoh_fn_roadmappage">
        <div className="container">
          <div className="neoh_fn_roadmaplist">
            <ul className="roadlist">
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="neoh_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <Image src="img/timeline/1/1.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/1/2.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/1/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>May 05, 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/roadmap-single">
                        Lorem ipsum dolor sit amet.
                      </Link>
                    </h3>
                    <p className="fn_desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="neoh_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <Image src="img/timeline/2/1.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/2/2.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/2/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>May 27, 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/roadmap-single">
                        Lorem ipsum dolor sit amet.
                      </Link>
                    </h3>
                    <p className="fn_desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="neoh_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <Image src="img/timeline/3/1.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/3/2.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/3/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>June 01, 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/roadmap-single">
                       Lorem ipsum dolor sit amet.
                      </Link>
                    </h3>
                    <p className="fn_desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="neoh_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <Image src="img/timeline/4/1.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/4/2.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/4/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>June 07, 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/roadmap-single">
                        Lorem ipsum dolor sit amet.
                      </Link>
                    </h3>
                    <p className="fn_desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="neoh_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <Image src="img/timeline/5/1.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/5/2.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/5/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>June 15, 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/roadmap-single">
                        Lorem ipsum dolor sit amet.
                      </Link>
                    </h3>
                    <p className="fn_desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="neoh_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <Image src="img/timeline/6/1.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/6/2.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/6/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>June 23, 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/roadmap-single">
                        Lorem ipsum dolor sit amet.
                      </Link>
                    </h3>
                    <p className="fn_desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li className="road_item">
                <div className="t_item">
                  <div className="t_item_img">
                    <div className="neoh_fn_gallery_1_2">
                      <div className="gallery_in">
                        <div className="item row2">
                          <Image src="img/timeline/7/1.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/7/2.jpg" alt="" />
                        </div>
                        <div className="item">
                          <Image src="img/timeline/7/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="t_item_info">
                    <p className="fn_date">
                      <span>July 01, 2022</span>
                    </p>
                    <h3 className="fn_title">
                      <Link href="/roadmap-single">
                        Lorem ipsum dolor sit amet.
                      </Link>
                    </h3>
                    <p className="fn_desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse earum quisquam sunt.
                    </p>
                    <p className="fn_read">
                      <Link href="/roadmap-single">
                        <a className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Roadmap;
