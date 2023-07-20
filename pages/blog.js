import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { getPagination, pagination } from "../src/utilits";
import LoadingProgress from "../src/components/Loading";
import axios from "axios";

const Blog = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const [blogs, setBlogs] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [blogData, setBlogData] = useState([]);
  // const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(false);
  // const [percentCompleted, setPercentComplete] = useState();

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    let list = document.querySelectorAll(".neoh_fn_moving_blog ul li");
    pagination(".neoh_fn_moving_blog ul li", sort, active);
    setstate(getPagination(list.length, sort));
  }, [active]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: `https://bajrangi-backend.onrender.com/api/getallblogs?page=${page}`,
    })
      .then((res) => {
        setLoading(false);
        setBlogData([...blogData, ...res.data.savedBlog]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [page]);

  let convertDate = (e) => {
    let date = new Date(e);
    date = date.toLocaleString();
    return date;
  };

  return (
    <Layout pageName={"Blog"}>
      <PageBanner pageName={"Blog"} />
      <div className="neoh_fn_blog_page">
        <div className="container">
          {loading ? (
            <LoadingProgress />
          ) : (
            <>
              {blogData &&
                blogData.map((e) => {
                  return (
                    <div className="neoh_fn_moving_blog" key={e._id}>
                      <ul>
                        <li>
                          <div className="item">
                            <p className="fn_date">
                              <span>{convertDate(e.createdAt)}</span>
                            </p>
                            <h3 className="fn_title">
                              <Link
                                href={{
                                  pathname: "/blog-single",
                                  query: {
                                    blogId: e._id,
                                  },
                                }}
                              >
                                {e.Title}
                              </Link>
                            </h3>
                            <p className="fn_desc">{e.ShortDescription}</p>
                            <p className="fn_read">
                              <Link
                                href={{
                                  pathname: "/blog-single",
                                  query: {
                                    blogId: e._id,
                                  },
                                }}
                              >
                                <a className="neoh_fn_button only_text">
                                  <span className="text">Read More</span>
                                </a>
                              </Link>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              {/* !Moving Blog List Shortcode */}
              {/* Pagination */}
              {/* <div className="neoh_fn_pagination">
            <ul>
              {state &&
                state.map((s, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={` ${active === s ? "current" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(s);
                      }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
            </ul>
          </div> */}

              {/* !Pagination */}
              {blogData.length >= limit ? (
                <div className="buttons fn_desc">
                  <button
                    onClick={() => {
                      setPage(page + 1);
                      setLimit(limit + 6);
                    }}
                    className="neoh_fn_buttons only_text"
                  >
                    Load more
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
