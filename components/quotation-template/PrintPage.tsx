import type { ReactNode } from "react";
import type { AgencyInfo } from "./types";
import { PageFooter } from "./PageFooter";
import styles from "./PrintPage.module.css";

/**
 * One page of the quotation. 210mm wide always. Most pages are only as
 * tall as the content they hold, with a 140mm floor — nothing is stretched
 * and nothing is clipped, so the footer sits directly under the content
 * instead of being stranded at the bottom of a half-empty sheet.
 *
 * The reference PDF's cover, trip-overview and thank-you pages are each a
 * fixed full A4 sheet (`fill`) and its itinerary-day/testimonials pages are
 * each a fixed 210mm square (`square`) regardless of how little content
 * they hold — both are min-heights only, so a page whose real content runs
 * longer than that floor still grows instead of clipping.
 *
 * <PrintPageSizer> measures each of these elements and writes the matching
 * `@page { size: 210mm <h>mm }` rule, which is what carries the per-page
 * height through to the printed/saved PDF.
 *
 * `hero` renders full-bleed above the padded body (only the cover page uses
 * it) — everything else sits inside the page's normal margins.
 */
export function PrintPage({
  children,
  hero,
  page,
  totalPages,
  agency,
  isLast = false,
  fill = false,
  square = false,
}: {
  children: ReactNode;
  hero?: ReactNode;
  page: number;
  totalPages: number;
  agency: AgencyInfo;
  isLast?: boolean;
  /** Keep a full A4 sheet instead of shrinking to the content (cover, trip overview, thank-you). */
  fill?: boolean;
  /** Keep a 210mm square instead of shrinking to the content (itinerary days, testimonials). */
  square?: boolean;
}) {
  return (
    <div
      data-qt-page={page}
      className={[
        styles.page,
        fill ? styles.pageFill : "",
        square ? styles.pageSquare : "",
        isLast ? styles.pageLast : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hero}
      <div className={`${styles.body} ${hero ? styles.bodyUnderHero : ""}`}>
        <div className={styles.content}>{children}</div>
        <PageFooter agency={agency} page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
