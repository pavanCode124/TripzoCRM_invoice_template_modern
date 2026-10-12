import type { AgencyInfo, ConsultantInfo, ThankYouBlock } from "./types";
import styles from "./ThankYou.module.css";

function InfoBox({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className={styles.infoBox}>
      <p className={styles.infoLabel}>{label}</p>
      <p className={styles.infoValue}>{value}</p>
    </div>
  );
}

export function ThankYou({
  thankYou,
  consultant,
  agency,
}: {
  thankYou: ThankYouBlock;
  consultant: ConsultantInfo;
  agency: AgencyInfo;
}) {
  const qrSrc =
    thankYou.qrImageUrl ??
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&data=${encodeURIComponent(
      thankYou.quotationUrl
    )}`;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{thankYou.heading}</h2>
      <p className={styles.subheading}>{thankYou.subheading}</p>
      <p className={styles.message}>{thankYou.message}</p>

      <div className={styles.infoGrid}>
        <InfoBox label="YOUR CONSULTANT" value={consultant.name} />
        <InfoBox label="PHONE" value={consultant.phone} />
        <InfoBox label="EMAIL" value={consultant.email} />
        <InfoBox label="WEBSITE" value={thankYou.website} />
      </div>

      <p className={styles.agencyName}>{agency.name}</p>

      <div className={styles.qrRow}>
        <img className={styles.qrImage} src={qrSrc} alt="Scan to view this quotation online" />
      </div>
    </section>
  );
}
