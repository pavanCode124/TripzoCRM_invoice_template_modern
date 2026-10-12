import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

/**
 * The full-width dark navy bar used at the top of the Accommodation,
 * Itinerary, Testimonials and Policies pages — measured off the reference
 * PDF as a solid rounded rect with bold lime letter-spaced text, no icon.
 * `trailing` renders right-aligned (used for "5 Nights · 6 Days" on the
 * first itinerary page).
 */
export function SectionHeading({
  title,
  trailing,
}: {
  title: string;
  trailing?: ReactNode;
}) {
  return (
    <div className={styles.bar}>
      <h2 className={styles.title}>{title}</h2>
      {trailing && <span className={styles.trailing}>{trailing}</span>}
    </div>
  );
}
