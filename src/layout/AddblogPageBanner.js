import Link from "next/link";

const AddblogPageBanner = ({ pageName }) => {
    return (
        <div className="neoh_fn_pagetitle">
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
          </div>
          <div className="pt_content">
            <div className="container">
              <h3
                className="fn_title fn_animated_text"
                data-wait={1000}
                data-speed={8}
              >
                {pageName}
              </h3>
              <p className="fn_desc" style={{color:"black",fontSize:"24px"}}>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <span className="separator">/</span>
                <span className="current">{pageName}</span>
              </p>
              <p className="fn_desc" style={{color:"black",fontSize:"24px"}}>Bajrangi - Your safe Haven for sharing. Anonymity Guaranteed! Crypto rewards to be earned 💰</p>
            </div>
          </div>
        </div>
      );
}

export default AddblogPageBanner