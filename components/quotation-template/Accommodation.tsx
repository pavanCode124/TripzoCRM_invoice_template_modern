import type { HotelStay } from "./types";
import { BedIcon, MapPinIcon, StarIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import styles from "./Accommodation.module.css";

function StatBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className={styles.statBox}>
      <p className={styles.statLabel}>{label.toUpperCase()}</p>
      <p className={styles.statValue}>{value}</p>
    </div>
  );
}

export function Accommodation({ hotels }: { hotels: HotelStay[] }) {
  if (hotels.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Hotel Accommodations" />

      <h3 className={styles.overviewHeading}>Accommodation Overview</h3>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Hotel</th>
              <th>City</th>
              <th>Nights</th>
              <th>Check-in</th>
              <th>Check-out</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={`${hotel.name}-${hotel.checkInDate}`}>
                <td className={styles.hotelName}>{hotel.name}</td>
                <td>{hotel.city}</td>
                <td>{hotel.nights}</td>
                <td>
                  {hotel.checkInDate}
                  {hotel.checkInTime ? ` | ${hotel.checkInTime}` : ""}
                </td>
                <td>
                  {hotel.checkOutDate}
                  {hotel.checkOutTime ? ` | ${hotel.checkOutTime}` : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.grid}>
        {hotels.map((hotel) => (
          <div key={`${hotel.name}-${hotel.checkInDate}-card`} className={styles.card}>
            <div className={styles.imageWrap}>
              <img
                className={styles.image}
                src={hotel.imageUrl}
                alt={`${hotel.name} exterior`}
              />
              <span className={styles.nightsBadge}>
                <BedIcon width={11} height={11} />
                {hotel.nights} Night{hotel.nights > 1 ? "s" : ""}
              </span>
            </div>

            <div className={styles.body}>
              <h3 className={styles.name}>{hotel.name}</h3>
              <div className={styles.stars}>
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <StarIcon key={i} width={12} height={12} />
                ))}
              </div>
              <p className={styles.location}>
                <MapPinIcon width={12} height={12} />
                {hotel.location}
              </p>

              <div className={styles.statGrid}>
                <StatBox label="Room Type" value={hotel.roomType} />
                <StatBox label="Meal Plan" value={hotel.mealPlan} />
                <StatBox label="Nights" value={hotel.nights} />
              </div>

              <div className={styles.stayRow}>
                <div className={styles.stayCol}>
                  <p className={styles.stayLabel}>CHECK-IN</p>
                  <p className={styles.stayDate}>{hotel.checkInDate}</p>
                  <p className={styles.stayTime}>{hotel.checkInTime}</p>
                </div>
                <div className={styles.stayLine} />
                <div className={`${styles.stayCol} ${styles.stayColRight}`}>
                  <p className={styles.stayLabel}>CHECK-OUT</p>
                  <p className={styles.stayDate}>{hotel.checkOutDate}</p>
                  <p className={styles.stayTime}>{hotel.checkOutTime}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
