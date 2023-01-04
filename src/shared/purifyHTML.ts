import * as DOMPurify from "isomorphic-dompurify";

class PurifyHTMLClass {
  sanitize(html: string): string {
    return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  }
}

export const PurifyHTML = new PurifyHTMLClass();
