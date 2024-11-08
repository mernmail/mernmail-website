"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PropTypes from "prop-types";
const MATOMO_URL = `${process.env.NEXT_PUBLIC_MATOMO_URL}`;
const MATOMO_SITE_ID = `${process.env.NEXT_PUBLIC_MATOMO_SITE_ID}`;
let firstUseEffect = true;
let firstUseEffect2 = true;

function AnalyticsInternal(props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (firstUseEffect) {
      firstUseEffect = false;
    } else {
      if (firstUseEffect2) {
        firstUseEffect2 = false;
        if (props.pagesRouter) return;
      }

      // Track page view
      const _paq = (window._paq = window._paq || []);
      _paq.push(["setDocumentTitle", document.title]);
      _paq.push(["setCustomUrl", document.location]);
      _paq.push(["trackPageView"]);
      return;
    }

    // Matomo tracking code
    const _paq = (window._paq = window._paq || []);
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["disableCookies"]);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function () {
      const u = MATOMO_URL + "/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", MATOMO_SITE_ID]);
      const d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = u + "matomo.js";
      s.parentNode.insertBefore(g, s);
    })();
  }, [pathname, searchParams, props.pagesRouter]);

  return null;
}

function Analytics(props) {
  return (
    <Suspense>
      <AnalyticsInternal {...props} />
    </Suspense>
  );
}

Analytics.propTypes = {
  pagesRouter: PropTypes.bool
};

export default Analytics;
