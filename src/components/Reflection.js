import React, { useEffect } from "react";
import "../jquery.flipster.min.css";
import "./Reflection.css";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";
import img10 from "../img/10.png";

const Reflection = () => {
  useEffect(() => {
    // Load jQuery from CDN
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // jQuery CDN
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    // Once jQuery is loaded, load the flipster script
    jqueryScript.onload = () => {
      const flipsterScript = document.createElement("script");
      flipsterScript.src = `$../jquer.flipster.min.js`; // Path to jquer.flipster.min.js
      flipsterScript.async = true;
      document.body.appendChild(flipsterScript);

      // Initialize Flipster after both scripts are loaded
      flipsterScript.onload = () => {
        if (window.$) {
            // eslint-disable-next-line no-undef
          $(".carousel").flipster({
            style: "carousel",
            spacing: "-0.3",
          });
        }
      };
    };

    // Cleanup both scripts when the component is unmounted
    return () => {
      document.body.removeChild(jqueryScript);
      const flipsterScript = document.querySelector(`[src="${process.env.PUBLIC_URL}/jquer.flipster.min.js"]`);
      if (flipsterScript) {
        document.body.removeChild(flipsterScript);
      }
    };
  }, []);

  return (
    <div className="heros">
      <div className="carousel">
        <ul>
          <li><img src={img1} alt="Image 1" /></li>
          <li><img src={img2} alt="Image 2" /></li>
          <li><img src={img3} alt="Image 3" /></li>
          <li><img src={img4} alt="Image 4" /></li>
          <li><img src={img5} alt="Image 5" /></li>
          <li><img src={img6} alt="Image 6" /></li>
          <li><img src={img7} alt="Image 7" /></li>
          <li><img src={img8} alt="Image 8" /></li>
          <li><img src={img9} alt="Image 9" /></li>
          <li><img src={img10} alt="Image 10" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Reflection;
