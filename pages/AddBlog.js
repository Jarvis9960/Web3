import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import AddblogPageBanner from "../src/layout/AddblogPageBanner";
import { getPagination, pagination } from "../src/utilits";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const AddBlog = () => {
  let sort = 3;

  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const [user, setUser] = useState();
  const [title, setTitle] = useState();
  const [short, setShort] = useState();
  const [long, setLong] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let list = document.querySelectorAll(".neoh_fn_moving_blog ul li");
    pagination(".neoh_fn_moving_blog ul li", sort, active);
    setstate(getPagination(list.length, sort));
  }, [active]);

  const closeModal = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `https://bajrangi-backend.onrender.com/api/createblog`,
        data: {
          username: user,
          title: title,
          shortDescription: short,
          detailsDescription: long,
        },
      });
      const status = response.data.status;
      if (status) {
        setOpen(!open);
      }
      console.log(status);
    } catch (error) {
      console.log(error);
    }
  };

  const getClaim = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout pageName={"Write a Blog"}>
        <AddblogPageBanner pageName={"Write a Blog"} />
        
        <div className="neoh_fn_blog_page">
          <div className="container">
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <a className="close" onClick={closeModal} style={{color: "black"}}>
                Close &times;
              </a>
              <div
                className="modal"
                style={{ textAlign: "center", color: "black" }}
              >
                <p>Congratulation!!!</p>
                <p>You have created your first blog</p>
                <p>You have also recieved 5 tokens as a reward</p>
                <p>Click here to claim this reward:-</p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSewltHzn8alWmEVdpmw8lbFb7GdVgO46wEhqmGTmIZXT05yTQ/viewform">
                  <button onClick={getClaim} className="claim-button">
                    Claim
                  </button>
                </a>
              </div>
            </Popup>
            <div className="blog-form">
              <form action="" className="form-blog">
                <div className="form-field">
                  <div className="field">
                    <label htmlFor="">UserName: </label>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Username"
                        onChange={(e) => setUser(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Title: </label>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Short Description: </label>
                    <div className="input_item">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Please don't use abousive language*"
                        onChange={(e) => setShort(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="">Long Description: </label>
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="5"
                      placeholder="Please don't use abousive language*"
                      onChange={(e) => setLong(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="buttons fn_desc">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="neoh_fn_buttons only_text"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddBlog;
