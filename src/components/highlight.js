import React from "react";
import "./highlight.css";

export default class Highlight extends React.Component {
  render() {
    return (
      <div className="Highlight">
        <div className="News">
          <a href="https://www.ittf.com/tournament/5000/2019-world-championships/"><img src={require("../photos/word-championship-2019.png")} /></a>
          <div className="NewsContainer">
            <img src={require("../photos/Frame2.png")} />
            <img src={require("../photos/Frame2.png")} />
            <img src={require("../photos/Frame2.png")} />
            <img src={require("../photos/Frame2.png")} />
          </div>
        </div>
        <div className="social">
          <div className="facebook">
            <img src={require("../photos/facebook.png")} />
            <div
              class="fb-post"
              data-href="https://www.facebook.com/ITTFWorld/videos/391302171662274/?__xts__%5B0%5D=68.ARBEo-0uXGKIDcN6he09B3vIwx9PyIxZQnQoGdy3JSXrhrDVtJTuXXv2Vl3yxAThQzFkeMBWEG0ezKuv2gOlrzP0hC75Yee6kvP_4KVeYu5ONuSFlAGv980tsBvWExoKsGukQsgL4qtcFUNCF0ziUDrD6gZ0-iycwfoLMWe434zYoL81io0w4x-th5ORnYfItnYXskV7Xu1IVTavoi-FYLrxElyk8NJAVWh6CdYF2xA5BXescqdL_niyVNwW0hBq9xKToSJjV-S6R7-ByACOgTilasgXARUbYJaVFiVDxuTnjvlJxiUTtrczr2YN7TFZo7PARJEFM92tSBtZ9wWMEgNygP_Q2QToiFfVqzhN815kjRfbiWd7Q7zsyz-gIYxxeCXOMTe76tw1ta9Jo1-ECbEy9v9gKH69njZn1ARJkrHsWlJ7gBXTSDRs9GVnsiDq3ZdxRPP-t45wACgI0BGVBGJJP-fG1kdLnpaSLsnVqCSW0ADeSwR1qbEAZYGravhY6312TlBW3lXXYJg&__tn__=-R"
              data-width="350"
              data-show-text="true"
            >
              <blockquote
                cite="https://developers.facebook.com/20531316728/posts/10154009990506729/"
                class="fb-xfbml-parse-ignore"
              >
                由 <a href="https://www.facebook.com/facebook/">Facebook</a>{" "}
                发布于&nbsp;
                <a href="https://developers.facebook.com/20531316728/posts/10154009990506729/">
                  2015年8月27日周四
                </a>
              </blockquote>
            </div>
          </div>
          <div className="socialLink">
            <img src={require("../photos/social-links.png")} />
            <img id="socials" src={require("../photos/socials.png")} />
          </div>
        </div>
      </div>
    );
  }
}
