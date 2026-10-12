import type { PolicyBlock } from "./types";
import {
  BanIcon,
  CheckCircleIcon,
  CreditCardIcon,
  FileTextIcon,
  XCircleIcon,
} from "./icons";
import { Rich } from "./Rich";
import { SectionHeading } from "./SectionHeading";
import styles from "./Policies.module.css";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.listItem}>
          <span className={styles.bulletDot} />
          <span>
            <Rich text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Policies({ policies }: { policies: PolicyBlock }) {
  const hasAny =
    policies.inclusions.length ||
    policies.exclusions.length ||
    policies.payment.length ||
    policies.cancellation.length ||
    policies.bookingTerms.length;
  if (!hasAny) return null;

  return (
    <section>
      <SectionHeading title="Policies" />

      {policies.inclusions.length > 0 && (
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <CheckCircleIcon width={17} height={17} className={styles.iconGood} />
            <h3>Inclusions</h3>
          </div>
          <BulletList items={policies.inclusions} />
        </div>
      )}

      {policies.exclusions.length > 0 && (
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <XCircleIcon width={17} height={17} className={styles.iconBad} />
            <h3>Exclusions</h3>
          </div>
          <BulletList items={policies.exclusions} />
        </div>
      )}

      {policies.payment.length > 0 && (
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <CreditCardIcon width={17} height={17} className={styles.iconInfo} />
            <h3>Payment Policies</h3>
          </div>
          <div className={styles.paragraphs}>
            {policies.payment.map((p, i) => (
              <p key={i} style={{ margin: 0 }}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
      )}

      {policies.cancellation.length > 0 && (
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <BanIcon width={17} height={17} className={styles.iconBan} />
            <h3>Cancellation Policies</h3>
          </div>
          <BulletList items={policies.cancellation} />
        </div>
      )}

      {policies.bookingTerms.length > 0 && (
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <FileTextIcon width={17} height={17} className={styles.iconInfo} />
            <h3>Booking Terms</h3>
          </div>
          <BulletList items={policies.bookingTerms} />
        </div>
      )}
    </section>
  );
}
