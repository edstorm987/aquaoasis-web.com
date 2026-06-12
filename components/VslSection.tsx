export function VslSection() {
  return (
    <section className="section video-band" aria-labelledby="vsl-title">
      <div className="container video-grid">
        <div className="reveal">
          <p className="eyebrow">Watch first</p>
          <h2 id="vsl-title">A quick walkthrough before you book.</h2>
          <p className="section-copy">
            A short VSL helps customers understand the offer quickly: why the
            Google profile comes first, how the one-day page removes waiting,
            and what happens before the final website goes live.
          </p>
        </div>
        <div className="video-frame reveal reveal-delay-1" aria-label="AquaOasis-Web video sales letter">
          <iframe
            title="AquaOasis-Web launch walkthrough"
            srcDoc='
              <style>
                body{margin:0;display:grid;place-items:center;min-height:100vh;background:linear-gradient(135deg,#071521,#123a5a);font-family:Arial,Helvetica,sans-serif;color:#fff}
                .wrap{text-align:center;padding:32px}
                .play{width:74px;height:74px;border-radius:999px;border:1px solid rgba(255,255,255,.34);display:grid;place-items:center;margin:0 auto 22px;background:rgba(255,255,255,.1)}
                .tri{width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:21px solid #d9b887;margin-left:5px}
                p{margin:8px 0 0;color:rgba(255,255,255,.72)}
                strong{font-size:clamp(26px,5vw,44px);line-height:1}
              </style>
              <div class="wrap">
                <div class="play" aria-hidden="true"><div class="tri"></div></div>
                <strong>AquaOasis-Web VSL</strong>
                <p>Replace this embed with your final video link.</p>
              </div>
            '
          />
        </div>
      </div>
    </section>
  );
}
