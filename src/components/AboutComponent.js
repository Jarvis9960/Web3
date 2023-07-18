/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <Image src="/img/about/bajrangbali-07.jpg" height={1400} width={1000} alt=""  />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">
                Welcome to Bajrangi - A Sanctuary of Empathy and Triumph
              </h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc" style={{fontSize:"25px",color:"black"}}>
              <p>Share Your Story, Find Strength, Embrace Humanity</p>
              <p>
                In the sacred verses of the Ramayana, we find tales of different
                souls seeking guidance and solace in Lord Hanuman. Just as
                Jambavan reassured Hanuman of his true potential and Vibhishana
                confided in his trust, we, too, invite you to share your life
                stories and discover the power of empathy and resilience.
              </p>
            </div>
            <div className="desc" style={{fontSize:"25px",color:"black"}}>
              <p>Jambavans Wisdom, Vibhishana's Loyalty:</p>
              <p>
                In the spirit of mentorship and self-belief, Bajrangi welcomes
                you to confide without hesitation. Just as Hanuman supported
                Sugriva in his quest for justice and offered comfort to Sita in
                captivity, our compassionate community stands ready to lend an
                empathetic ear to your journey.
              </p>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <Image src="/img/about/bajrangbali-01.jpg" height={1400} width={1000} alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">
                Discover the Healing Power of Sharing:
              </h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc" style={{fontSize:"25px",color:"black"}}>
              <p>
                Unburden your heart and let your voice resonate with the
                triumphs and challenges that shape you. Much like Rama
                conversations with Hanuman, find solace and strength through the
                art of compassionate listening.
              </p>
              <div className="desc" style={{fontSize:"25px",color:"black"}}>
                <p>Embrace the Bonds of Trust:</p>
                <p>
                  As Vibhishana trusted Hanuman with valuable information, trust
                  our platform to uphold your dignity, anonymity, and the
                  sanctity of your stories. Let the spirit of mutual respect and
                  camaraderie inspire our collective growth.
                </p>
              </div>
              <div className="desc" style={{fontSize:"25px",color:"black"}}>
                <p>An Odyssey of Empathy:</p>
                <p>
                  Just as Hanuman unwavering support strengthened the bond
                  with Rama, find a community of empathy where souls uplift each
                  other. Share your emotions, find understanding, and offer
                  thoughtful advice - together, we transcend.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
