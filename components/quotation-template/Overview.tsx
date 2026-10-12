import type { PriceSummary, TripDetails } from "./types";
import {
  CalendarIcon,
  ClockIcon,
  BedIcon,
  RouteIcon,
  UserIcon,
  UsersIcon,
} from "./icons";
import styles from "./Overview.module.css";

function Field({
  icon: Icon,
  label,
  value,
  wide = false,
}: {
  icon: (props: { width: number; height: number }) => JSX.Element;
  label: string;
  value: string;
  wide?: boolean;
}) {
  if (!value) return null;
  return (
    <div className={wide ? styles.fieldWide : undefined}>
      <p className={styles.fieldLabel}>
        <Icon width={12} height={12} />
        {label.toUpperCase()}
      </p>
      <p className={styles.fieldValue}>{value}</p>
    </div>
  );
}

/**
 * Page 2 of the reference: a bordered white "Trip Overview" card beside a
 * dark "Investment Summary" card — distinct from the hero's own quick-fact
 * strip on page 1, and carrying a different (more complete) field set.
 */
export function Overview({
  trip,
  price,
}: {
  trip: TripDetails;
  price: PriceSummary;
}) {
  return (
    <section className={styles.grid}>
      <div className={styles.overviewCard}>
        <h2 className={styles.overviewHeading}>Trip Overview</h2>
        <div className={styles.fields}>
          <Field icon={UserIcon} label="Traveler Name" value={trip.customerName} />
          <Field icon={CalendarIcon} label="Travel Date" value={trip.travelDate} />
          <Field icon={ClockIcon} label="Duration" value={trip.duration} />
          <Field icon={UsersIcon} label="Travelers" value={trip.travelers} />
          <Field icon={BedIcon} label="Rooms" value={trip.rooms} />
          <Field icon={RouteIcon} label="Route" value={trip.route} />
          <Field icon={UserIcon} label="Prepared By" value={trip.preparedBy} wide />
        </div>
      </div>

      <div>
        <p className={styles.investmentLabel}>Investment Summary</p>
        <div className={styles.priceCard}>
          <p className={styles.totalPackageEyebrow}>Total Package</p>
          <h3 className={styles.priceHeading}>Total Package Price</h3>
          <div className={styles.priceRow}>
            <span className={styles.priceRowLabel}>{price.perPersonLabel}</span>
            <span className={styles.priceRowValue}>{price.perPersonAmount}</span>
          </div>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>{price.totalLabel}</span>
            <span className={styles.totalValue}>{price.totalAmount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
