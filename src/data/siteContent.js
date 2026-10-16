import {
  pageContent as pageContentEn,
} from "./pageContent"

import {
  pageContent as pageContentEs,
} from "./pageContent.es"

export const language =
  window.location.pathname === "/es" ||
  window.location.pathname.startsWith("/es/")
    ? "es"
    : "en"

export const pageContent =
  language === "es"
    ? pageContentEs
    : pageContentEn