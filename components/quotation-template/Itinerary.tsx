import type { ItineraryDay } from "./types";
import { BusIcon, UtensilsIcon } from "./icons";
import { Rich } from "./Rich";
import styles from "./Itinerary.module.css";

/**
 * One day's row — a numbered circle + a lime timeline line to its left,
 * and the day's card to its right. Rendered on its own <PrintPage/> by
 * QuotationTemplate, so the line only ever runs the height of that one page.
 */
export function DayCard({ day }: { day: ItineraryDay }) {
  return (
    <div className={styles.row}>
      <div className={styles.timeline}>
        <div className={styles.badge}>{String(day.day).padStart(2, "0")}</div>
        <div className={styles.line} />
      </div>

      <div className={styles.card}>
        <div className={styles.cardHead}>
          <p className={styles.eyebrow}>
            DAY {day.day}
            {day.location && <> &middot; {day.location.toUpperCase()}</>}
            {day.date && <> &middot; {day.date.toUpperCase()}</>}
          </p>
          <h3 className={styles.headTitle}>{day.title}</h3>
        </div>

        <div className={styles.cardBody}>
          <h4 className={styles.activityTitle}>{day.title}</h4>

          <div className={day.imageUrl ? styles.contentGrid : undefined}>
            <ul className={styles.bullets}>
              {day.bullets.map((b, i) => (
                <li key={i} className={styles.bulletItem}>
                  <span className={styles.bulletDot} />
                  <span>
                    <Rich text={b} />
                  </span>
                </li>
              ))}
            </ul>

            {day.imageUrl && (
              <div className={styles.imageWrap}>
                <img className={styles.image} src={day.imageUrl} alt={day.title} />
              </div>
            )}
          </div>

          {day.note && (
            <div className={styles.note}>
              <p className={styles.noteHeading}>{day.note.heading}</p>
              <ul className={styles.noteLines}>
                {day.note.lines.map((line, i) => (
                  <li key={i}>
                    <Rich text={line} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {day.italicNote && <p className={styles.italicNote}>{day.italicNote}</p>}

          {day.transferTag && (
            <div className={styles.transferTag}>
              <span className={styles.pill}>
                <BusIcon width={12} height={12} />
                {day.transferTag}
              </span>
            </div>
          )}
        </div>

        {day.meals.length > 0 && (
          <div className={styles.mealsRow}>
            <UtensilsIcon width={13} height={13} />
            <span className={styles.mealsLabel}>MEALS</span>
            <span>{day.meals.join(", ")}</span>
          </div>
        )}
      </div>
    </div>
  );
}
