export function VslSection() {
  return (
    <section className="section video-band" aria-labelledby="vsl-title">
      <div className="container video-grid">
        <div className="reveal">
          <p className="eyebrow">Watch first</p>
          <h2 id="vsl-title">Video coming soon.</h2>
          <p className="section-copy">
            A quick walkthrough is being prepared so you can see exactly how
            AquaOasis-Web helps businesses get found, look professional, and
            start moving online without subscription lock-in.
          </p>
        </div>
        <div className="video-frame reveal reveal-delay-1" aria-label="AquaOasis-Web video sales letter">
          <iframe
            title="AquaOasis-Web launch walkthrough"
            srcDoc='
              <style>
                body{margin:0;display:grid;place-items:center;min-height:100vh;background:linear-gradient(135deg,#071521,#123a5a);font-family:Arial,Helvetica,sans-serif;color:#fff}
                .wrap{text-align:center;padding:32px}
                .play{width:74px;height:74px;border-radius:999px;border:1px solid rgba(255,255,255,.34);display:grid;place-items:center;margin:0 auto 22px;background:rgba(255,255,255,.1);transition:transform .18s ease,background .18s ease,border-color .18s ease,box-shadow .18s ease}
                .play:hover{transform:translateY(-2px) scale(1.04);background:rgba(217,184,135,.18);border-color:rgba(217,184,135,.72);box-shadow:0 20px 60px rgba(0,0,0,.24)}
                .tri{width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:21px solid #d9b887;margin-left:5px}
                p{margin:8px 0 0;color:rgba(255,255,255,.72)}
                strong{font-size:clamp(26px,5vw,44px);line-height:1}
              </style>
              <div class="wrap">
                <div class="play" aria-hidden="true"><div class="tri"></div></div>
                <strong>Video coming soon</strong>
                <p>Founder walkthrough is being prepared.</p>
              </div>
            '
          />
        </div>
      </div>
    </section>
  );
}
