import type { AgencyInfo, ConsultantInfo, ServiceKey, TripDetails } from "./types";
import {
  CalendarIcon,
  CompassIcon,
  MapPinIcon,
  MoonIcon,
  SunIcon,
  UsersIcon,
  resolveServiceIcon,
} from "./icons";
import styles from "./Hero.module.css";

function StatCard({
  icon: Icon,
  value,
  label,
  tone,
}: {
  icon: (props: { width: number; height: number }) => JSX.Element;
  value: string | number;
  label: string;
  tone: "brand" | "accent" | "navy";
}) {
  return (
    <div className={`${styles.statCard} ${styles[`statCard_${tone}`]}`}>
      <Icon width={17} height={17} />
      <p className={styles.statValue}>{value}</p>
      <p className={styles.statLabel}>{label.toUpperCase()}</p>
    </div>
  );
}

/**
 * The cover page's full-bleed hero — far taller than a typical banner
 * because, in the reference PDF, it is the whole first page: the quick
 * trip-fact cards, service pills and consultant line all live inside the
 * hero's own dark gradient rather than on a separate section below it.
 */
export function Hero({
  agency,
  consultant,
  quotationNumber,
  heroImageUrl,
  destinationTag,
  title,
  subtitle,
  trip,
  servicesInclude,
}: {
  agency: AgencyInfo;
  consultant: ConsultantInfo;
  quotationNumber: string;
  heroImageUrl: string;
  destinationTag: string;
  title: string;
  subtitle: string;
  trip: TripDetails;
  servicesInclude: ServiceKey[];
}) {
  return (
    <section className={styles.hero}>
      <img className={styles.image} src={heroImageUrl} alt={title} />
      <div className={styles.gradient} />

      <div className={styles.topBar}>
        <div className={styles.logo}>
          {agency.logoUrl ? (
            <img
              src={agency.logoUrl}
              alt={agency.name}
              style={{ height: 46, width: "auto" }}
            />
          ) : (
            <>
              <CompassIcon
                width={26}
                height={26}
                style={{ color: "var(--qt-navy)" }}
              />
              <span className={styles.logoText}>
                {agency.name.toUpperCase().replace(/\s+/g, "\n")}
              </span>
            </>
          )}
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeText}>
            QUOTATION #{quotationNumber}
          </span>
        </div>
      </div>

      <div className={styles.caption}>
        <p className={styles.tag}>
          <MapPinIcon width={13} height={13} />
          {destinationTag}
        </p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.statRow}>
          <StatCard icon={MoonIcon} value={trip.nights} label="Nights" tone="brand" />
          <StatCard icon={SunIcon} value={trip.days} label="Days" tone="accent" />
          <StatCard
            icon={CalendarIcon}
            value={trip.travelDate}
            label="Travel Date"
            tone="navy"
          />
          <StatCard
            icon={UsersIcon}
            value={trip.travelers}
            label="Travelers"
            tone="navy"
          />
        </div>

        {servicesInclude.length > 0 && (
          <div className={styles.pillsRow}>
            {servicesInclude.map((service) => {
              const Icon = resolveServiceIcon(service);
              return (
                <span key={service} className={styles.pill}>
                  <Icon width={15} height={15} />
                  {service}
                </span>
              );
            })}
          </div>
        )}

        <div className={styles.hairline} />

        <p className={styles.consultantLine}>
          <span className={styles.consultantLabel}>Consultant:</span>{" "}
          <span className={styles.consultantValue}>{consultant.name}</span>
          <span className={styles.consultantLabel}>Phone:</span>{" "}
          <span className={styles.consultantValue}>{consultant.phone}</span>
          <span className={styles.consultantLabel}>Email:</span>{" "}
          <span className={styles.consultantValue}>{consultant.email}</span>
        </p>
      </div>
    </section>
  );
}
