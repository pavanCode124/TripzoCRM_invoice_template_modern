import type { Testimonial } from "./types";
import { QuoteIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import styles from "./Testimonials.module.css";

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Client Testimonials" />
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <QuoteIcon width={22} height={22} className={styles.quoteIcon} />
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <span className={styles.avatar}>{t.name.charAt(0).toUpperCase()}</span>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.tripLabel}>{t.tripLabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
