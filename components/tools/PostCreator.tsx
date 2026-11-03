"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "../site/Icon";
import { LeadGate } from "./LeadGate";
import {
  backgrounds,
  buildCaption,
  contentPlan,
  ctas,
  platforms,
  postTypes,
  suggestHashtags,
  tones,
  type BackgroundId,
  type Cta,
  type PlatformId,
  type PostTypeId,
  type Tone,
} from "./postContent";

function Segmented<T extends string>({ label, options, value, onChange }: {
  label: string;
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div role="group" aria-label={label} style={{ display: "grid", gap: 8 }}>
      <span style={{ fontWeight: 600, fontSize: 15 }}>{label}</span>
      <div className="seg">
        {options.map((option) => (
          <button key={option.id} type="button" aria-pressed={value === option.id} onClick={() => onChange(option.id)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const lines: string[] = [];
  for (const paragraph of text.split("\n")) {
    let line = "";
    for (const word of paragraph.split(/\s+/).filter(Boolean)) {
      const next = line ? `${line} ${word}` : word;
      if (ctx.measureText(next).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = next;
      }
    }
    lines.push(line);
  }
  return lines;
}

export function PostCreator() {
  const [platform, setPlatform] = useState<PlatformId>("instagram");
  const [type, setType] = useState<PostTypeId>("offer");
  const [tone, setTone] = useState<Tone>("Friendly");
  const [cta, setCta] = useState<Cta>("Book now");
  const [business, setBusiness] = useState("");
  const [town, setTown] = useState("");
  const [details, setDetails] = useState("");
  const [headline, setHeadline] = useState<string>(postTypes[0].headline);
  const [headlineTouched, setHeadlineTouched] = useState(false);
  const [background, setBackground] = useState<BackgroundId>("aqua");
  const [image, setImage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [customCaption, setCustomCaption] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const imageRef = useRef<string | null>(null);

  const platformInfo = platforms.find((item) => item.id === platform)!;
  const bg = backgrounds.find((item) => item.id === background)!;
  const generated = useMemo(
    () => buildCaption({ platform, type, tone, cta, business, details, hashtags: tags.slice(0, platformInfo.tagCount || 0) }),
    [platform, type, tone, cta, business, details, tags, platformInfo.tagCount],
  );
  const caption = customCaption ?? generated;
  const suggestions = suggestHashtags(business, details, town).filter((tag) => !tags.includes(tag)).slice(0, 10);
  const over = caption.length > platformInfo.limit;

  useEffect(() => () => {
    if (imageRef.current) URL.revokeObjectURL(imageRef.current);
  }, []);

  function chooseType(next: PostTypeId) {
    setType(next);
    if (!headlineTouched) setHeadline(postTypes.find((item) => item.id === next)!.headline);
  }

  function chooseImage(file: File | undefined) {
    if (imageRef.current) URL.revokeObjectURL(imageRef.current);
    const url = file ? URL.createObjectURL(file) : null;
    imageRef.current = url;
    setImage(url);
  }

  async function copyCaption() {
    try {
      await navigator.clipboard.writeText(caption);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function downloadImage() {
    const landscape = platformInfo.shape === "landscape";
    const width = landscape ? 1200 : 1080;
    const height = landscape ? 628 : 1080;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (image) {
      const img = new Image();
      img.src = image;
      await img.decode();
      const scale = Math.max(width / img.width, height / img.height);
      ctx.drawImage(img, (width - img.width * scale) / 2, (height - img.height * scale) / 2, img.width * scale, img.height * scale);
      const shade = ctx.createLinearGradient(0, 0, 0, height);
      shade.addColorStop(0, "rgba(0,0,0,0.05)");
      shade.addColorStop(1, "rgba(0,0,0,0.5)");
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, width, height);
    } else {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, bg.from);
      gradient.addColorStop(1, bg.to);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    await document.fonts.ready;
    const family = getComputedStyle(document.documentElement).getPropertyValue("--font-bricolage").trim() || "sans-serif";
    const dark = bg.light && !image;
    let size = landscape ? 84 : 110;
    ctx.font = `800 ${size}px ${family}`;
    let lines = wrapLines(ctx, headline || " ", width * 0.82);
    while (lines.length * size * 1.05 > height * 0.62 && size > 36) {
      size -= 6;
      ctx.font = `800 ${size}px ${family}`;
      lines = wrapLines(ctx, headline || " ", width * 0.82);
    }
    ctx.fillStyle = dark ? "#0b1020" : "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const lineHeight = size * 1.05;
    const top = height / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => ctx.fillText(line, width / 2, top + index * lineHeight));
    if (business.trim()) {
      ctx.font = `700 ${landscape ? 26 : 32}px ${family}`;
      ctx.textAlign = "right";
      ctx.fillText(business.trim(), width - 40, height - 44);
    }

    const link = document.createElement("a");
    link.download = `${(business.trim() || "post").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${platform}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div className="tool-shell">
      <div className="tool-panel">
        <h2>1. Your post</h2>
        <Segmented label="Platform" options={platforms} value={platform} onChange={(value) => { setPlatform(value); }} />
        <Segmented label="What kind of post?" options={postTypes} value={type} onChange={chooseType} />
        <div className="form-row">
          <label className="field">Business name<input value={business} onChange={(event) => setBusiness(event.target.value)} placeholder="e.g. Harbour Bakery" autoComplete="organization" /></label>
          <label className="field">Town <small>for local hashtags</small><input value={town} onChange={(event) => setTown(event.target.value)} placeholder="e.g. Ipswich" /></label>
        </div>
        <label className="field">What&apos;s it about?
          <textarea
            rows={3}
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            placeholder="e.g. 20% off all celebration cakes this weekend. Order by Thursday."
          />
        </label>
        <div className="form-row">
          <label className="field">Tone
            <select value={tone} onChange={(event) => setTone(event.target.value as Tone)}>
              {tones.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="field">Call to action
            <select value={cta} onChange={(event) => setCta(event.target.value as Cta)}>
              {ctas.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <h2>2. The image</h2>
        <label className="field">Headline on the image
          <input
            value={headline}
            maxLength={60}
            onChange={(event) => { setHeadline(event.target.value); setHeadlineTouched(true); }}
          />
        </label>
        <div role="group" aria-label="Background" style={{ display: "grid", gap: 8 }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>Background</span>
          <div className="swatches">
            {backgrounds.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                aria-pressed={!image && background === item.id}
                style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
                onClick={() => { setBackground(item.id); chooseImage(undefined); }}
              />
            ))}
          </div>
        </div>
        <label className="field">Or use your own photo <small>stays on your device</small>
          <input type="file" accept="image/*" onChange={(event) => chooseImage(event.target.files?.[0])} />
        </label>

        <h2>3. Caption</h2>
        {suggestions.length && platformInfo.tagCount ? (
          <div style={{ display: "grid", gap: 8 }}>
            <span style={{ fontWeight: 600, fontSize: 15 }}>Tap to add hashtags</span>
            <div className="hashtags">
              {suggestions.map((tag) => (
                <button key={tag} type="button" onClick={() => { setTags((current) => [...current, tag]); setCustomCaption(null); }}>{tag}</button>
              ))}
            </div>
          </div>
        ) : null}
        <label className="field">Your caption <small>edit as much as you like</small>
          <textarea rows={8} value={caption} onChange={(event) => setCustomCaption(event.target.value)} />
        </label>
        <p className={`counter${over ? " over" : ""}`} aria-live="polite">
          {caption.length.toLocaleString()} / {platformInfo.limit.toLocaleString()} characters{over ? ` · too long for ${platformInfo.label}` : ""}
        </p>
        <div className="btn-row">
          <button className="btn btn-primary" type="button" onClick={copyCaption}><Icon name="copy" /> {copied ? "Copied!" : "Copy caption"}</button>
          {customCaption !== null || tags.length ? (
            <button className="btn btn-ghost" type="button" onClick={() => { setCustomCaption(null); setTags([]); }}>Start caption again</button>
          ) : null}
        </div>
      </div>

      <div className="preview-wrap">
        <div className="preview" aria-label={`${platformInfo.label} post preview`}>
          <div className="preview-head">
            <span className="preview-avatar" aria-hidden="true">{(business.trim()[0] ?? "A").toUpperCase()}</span>
            <span><b>{business.trim() || "Your Business"}</b><small>{platformInfo.label} · Just now</small></span>
          </div>
          <div
            className={`preview-media${platformInfo.shape === "landscape" ? " landscape" : ""}${bg.light && !image ? " light" : ""}`}
            style={image ? undefined : { background: `linear-gradient(135deg, ${bg.from}, ${bg.to})` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- local object URL preview */}
            {image ? <><img src={image} alt="" /><span className="shade" /></> : null}
            <strong>{headline}</strong>
            {business.trim() ? <em>{business.trim()}</em> : null}
          </div>
          <div className="preview-actions" aria-hidden="true"><Icon name="heart" /><Icon name="comment" /><Icon name="send" /></div>
          <p className="preview-caption">
            {caption.split(/(\s+)/).map((part, index) => (
              part.startsWith("#") ? <span className="tag" key={index}>{part}</span> : part
            ))}
          </p>
        </div>

        {unlocked ? (
          <div className="unlocked" role="status">
            <h3 className="h-sm">Unlocked. Here you go!</h3>
            <button className="btn btn-primary" type="button" onClick={downloadImage}><Icon name="download" /> Download image (PNG)</button>
            <p><b>Your 4-week content plan</b></p>
            <div className="plan-table">
              {contentPlan(business, platformInfo.label).map((week) => (
                <div className="plan-week" key={week.week}>
                  <b>{week.week} · {week.theme}</b>
                  <ul className="tick-list" style={{ fontSize: 15 }}>{week.posts.map((post) => <li key={post}>{post}</li>)}</ul>
                </div>
              ))}
            </div>
            <p>Want us to make and post these for you? <Link className="text-link" href="/services/social-media">See social media management <Icon name="arrow" /></Link></p>
          </div>
        ) : (
          <LeadGate
            tool="Social post creator"
            title="Download the image + get a 4-week content plan"
            copy="Free. Tell us where to send it and we'll unlock the high-res image and a month of post ideas for your business."
            buttonLabel="Unlock my download"
            buildMessage={() => [
              `Platform: ${platformInfo.label}. Post type: ${postTypes.find((item) => item.id === type)!.label}. Town: ${town || "not given"}.`,
              `Headline: ${headline}`,
              `Caption:\n${caption}`,
            ].join("\n")}
            onUnlocked={() => setUnlocked(true)}
          />
        )}
      </div>
    </div>
  );
}
