import { useEffect, useState } from 'react';
import { fallbackCaseStudies } from '../data/fallbackContent';
import { CASE_STUDIES_QUERY } from '../lib/queries';
import { isSanityConfigured, sanityClient } from '../lib/sanity';
import type { CaseStudy } from '../types/content';

export function useCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(fallbackCaseStudies);
  const [isLoading, setIsLoading] = useState(isSanityConfigured);

  useEffect(() => {
    if (!isSanityConfigured) return;

    let active = true;
    sanityClient
      .fetch<CaseStudy[]>(CASE_STUDIES_QUERY)
      .then((results) => {
        if (active && results.length > 0) setCaseStudies(results);
      })
      .catch(() => {
        // Keep the verified local case studies available if the CMS is offline.
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { caseStudies, isLoading };
}
