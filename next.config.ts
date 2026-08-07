import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
      "style-src 'self' 'unsafe-inline' https:",
      "img-src 'self' data: blob: https:",
      "media-src 'self' blob: https:",
      "font-src 'self' data: https:",
      `connect-src 'self'${process.env.NODE_ENV === "production" ? "" : " http://localhost:3032"} https:`,
      "frame-src 'self' https:",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      `form-action 'self'${process.env.NODE_ENV === "production" ? "" : " http://localhost:3032"} https:`,
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
