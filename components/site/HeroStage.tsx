import { Icon } from "./Icon";

/** The home hero's animated scene: a website, a social post and a Google listing, with live notifications. */
export function HeroStage() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="mock-browser">
        <div className="mock-bar"><i /><i /><i /><em>yourbusiness.co.uk</em></div>
        <div className="mock-site">
          <b>Fresh bakes,<br />baked daily.</b>
          <div className="mock-lines"><i /><i /><i /></div>
          <div className="mock-cta"><i /><i /></div>
          <div className="mock-tiles"><i /><i /><i /></div>
        </div>
      </div>
      <div className="mock-phone">
        <div className="mock-phone-screen">
          <div className="mock-post-head"><i />yourbusiness</div>
          <div className="mock-post-img"><span>New menu<br />drops Friday</span></div>
          <div className="mock-post-foot">
            <div className="icons"><i /><i /><i /></div>
            <p><b>yourbusiness</b> Come hungry. Booking link in bio.</p>
          </div>
        </div>
      </div>
      <div className="mock-map">
        <span className="pin"><Icon name="pin" /></span>
        <div>
          <b>Your Business</b>
          <span className="stars">★★★★★</span>
          <small>Open now · Directions · Call</small>
        </div>
      </div>
      <div className="toast-stack">
        <div className="toast"><i>✉️</i>New enquiry from your website</div>
        <div className="toast"><i>⭐</i>New 5-star Google review</div>
        <div className="toast"><i>📣</i>Post published on Instagram</div>
      </div>
    </div>
  );
}
