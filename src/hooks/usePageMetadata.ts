import { useEffect } from 'react';

const DEFAULT_DESCRIPTION = 'Edikan Okon is a frontend developer building fast, accessible React products for startups and growing teams.';

export function usePageMetadata(title: string, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const fullTitle = `${title} | Edikan Okon`;
    document.title = fullTitle;
    const selectors = ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]'];
    selectors.forEach((selector) => {
      const meta = document.querySelector<HTMLMetaElement>(selector);
      if (meta) meta.content = description;
    });
    ['meta[property="og:title"]', 'meta[name="twitter:title"]'].forEach((selector) => {
      const meta = document.querySelector<HTMLMetaElement>(selector);
      if (meta) meta.content = fullTitle;
    });
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const currentUrl = window.location.href;
    if (canonical) canonical.href = currentUrl;
    if (ogUrl) ogUrl.content = currentUrl;

    return () => {
      document.title = 'Edikan Okon | Frontend Developer';
    };
  }, [description, title]);
}
