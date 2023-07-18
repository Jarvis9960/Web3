import Link from "next/link";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useLocation } from 'react-router-dom';
import { useRouter } from "next/router";

const BlogSingle = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  const [singleblog, setSingleblog] = useState();
  const [comment, setComment] = useState();
  const [name, setName] = useState();
  const [addcomment, setAddcomment] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios({
      method: "get",
      url: `https://bajrangi-backend.onrender.com/api/getsingleblog?blogId=${blogId}`,
    })
      .then((res) => {
        setSingleblog(res.data.singleBlog);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(singleblog);

  let formattedDate;
  if (singleblog) {
    formattedDate = new Intl.DateTimeFormat().format(
      new Date(singleblog.createdAt)
    );
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios({
        method: "post",
        url: `https://bajrangi-backend.onrender.com/api/postcomment`,
        data: {
          blogId: blogId,
          username: name,
          comment: comment,
        },
      })
      if(response.data.status){
        setLoading(false)
      }
     
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://bajrangi-backend.onrender.com/api/getcommentforblog?blogId=${blogId}`,
    })
      .then((res) => {
        setAddcomment(res.data.savedCommentForBlog)
      })
      .catch((err) => console.log(err));
  }, [loading]);


  return (
    <Layout pageName={"Blog Single"}>
      <div className="neoh_fn_blog_single neoh_fn_single">
        {/* Single Background */}
        <div className="single_bg" />
        {/* !Single Background */}
        {/* Single Content */}
        <div className="single_content">
          <div className="container" id="blog-single-content">
            <div className="neoh_fn_breadcrumbs">
              <p>
                <Link href="/">Home</Link>
                <span className="separator">/</span>
                <Link href="/blog">Blog</Link>
                <span className="separator">/</span>
                <span className="current">
                  {singleblog && singleblog.Title}
                </span>
              </p>
            </div>

            {/* Page With Sidebar */}
            <div className="neoh_fn_wsidebar">
              {/* Left Sidebar */}
              <div className="sidebar_left">
                {/* Mini Items  */}
                <div className="neoh_fn_minis">
                  <div className="m_item">
                    <a href="#">{formattedDate}</a>
                  </div>
                  <div className="m_item">
                    <span>
                      By <a href="#">{singleblog && singleblog.Username}</a>
                    </span>
                  </div>
                  <div className="m_item">
                    <a href="#comments">{addcomment.length} Comments</a>
                  </div>
                </div>
                {/* !Mini Items  */}
                {/* Single Title */}
                <div className="single_title">
                  <h2 className="fn_title">{singleblog && singleblog.Title}</h2>
                </div>
                <div className="single_desc">
                  <p>{singleblog && singleblog.DetailDescription}</p>
                </div>
              </div>
              {/* !Left Sidebar */}
              {/* Right Sidebar */}
              <div className="sidebar_right">
                {/* Widget (about) */}
                <div className="widget">
                  <div className="neoh_fn_widget_about">
                    <div className="afwa_title">
                      <h3>{singleblog && singleblog.Username}</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* !Right Sidebar */}
            </div>
            {/* !Page With Sidebar */}
          </div>
          {/* Previous & Next Box */}

          {/* !Previous & Next Box */}
          <div className="container" id="comment-section">
            {/* Page With Sidebar */}
            <div className="neoh_fn_wsidebar">
              {/* Left Sidebar */}
              <div className="sidebar_left">
                {/* Comments */}
                <div className="neoh_fn_comments">
                
                  <div className="comment-title">
                    <h3 className="fn_title">{addcomment.length} Comments</h3>
                  </div>
                  {addcomment && addcomment.map((e)=>{
                    return(
                      <div className="comment-list" key={e._id}>
                    <ul className="list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-text-wrap">
                            <div className="comment-data">
                              <h3 className="author">{e.Username}</h3>
                              <p className="date">{e.createdAt}</p>
                            </div>
                            <div className="comment-text">
                              <div className="desc">
                                <p>
                                  {e.Comment}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                    )
                  })}
                  
                  <div className="comment-respond">
                    <div className="respond-title">
                      <h3 className="fn_title">Leave a reply</h3>
                    </div>

                    <form className="comment-form">
                      <ul className="input-items">
                        <li className="input-item">
                          <div className="input_item">
                            <textarea
                              name="comment"
                              placeholder="Comment"
                              defaultValue={""}
                              onChange={(e) => setComment(e.target.value)}
                            />
                          </div>
                        </li>
                        <li className="input-item half-item">
                          <div className="input_item">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </li>
                      </ul>
                      <div className="clearfix" />
                      <button
                        type="submit"
                        onClick={handleFormSubmit}
                        className="neoh_fn_button only_text"
                      >
                        <span className="text">Post Comment</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogSingle;
