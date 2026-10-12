/**
 * Data contract for <QuotationTemplate /> (modern layout).
 *
 * Everything here is plain JSON-serializable data (strings, numbers, arrays) —
 * safe to fetch from an API route or a DB record and pass straight in as the
 * `data` prop. No React elements/icons are ever passed in; icons are resolved
 * internally from the string keys below (see icons.tsx).
 *
 * Text fields support a tiny inline markdown subset, parsed by <Rich/>:
 *   **bold text**   -> <strong>
 *   _italic text_   -> <em>
 *   a bare https:// URL as the whole line -> rendered as a link
 */

export interface AgencyInfo {
  name: string;
  phone: string;
  email: string;
  website: string;
  /** Optional logo image URL. Falls back to a text wordmark when omitted. */
  logoUrl?: string;
}

export interface ConsultantInfo {
  name: string;
  phone: string;
  email: string;
}

export interface TripDetails {
  customerName: string;
  /** e.g. "Munnar, Thekkady, Alleppey, Kovalam" */
  destination: string;
  /** e.g. "5 Nights / 6 Days" */
  duration: string;
  nights: number;
  days: number;
  /** e.g. "21 Oct 2026" */
  travelDate: string;
  /** e.g. "4 Adults" or "2 Adults, 1 Kid" */
  travelers: string;
  /** e.g. "2 Rooms" */
  rooms: string;
  /** e.g. "Munnar → Thekkady → Alleppey → Kovalam" */
  route: string;
  preparedBy: string;
}

export interface PriceSummary {
  /** e.g. "Per Adult (x4)" */
  perPersonLabel: string;
  /** Pre-formatted, e.g. "₹10" */
  perPersonAmount: string;
  /** e.g. "Total Cost" */
  totalLabel: string;
  /** Pre-formatted, e.g. "₹40" */
  totalAmount: string;
}

/** Known service keys with a matching built-in icon. Unknown strings render with a generic icon. */
export type ServiceKey =
  | "Hotels"
  | "Tours"
  | "Transport"
  | "Flights"
  | "Activities"
  | "Meals"
  | "Guide"
  | (string & {});

export interface HotelStay {
  name: string;
  city: string;
  location: string;
  /** 1-5 */
  stars: number;
  nights: number;
  roomType: string;
  mealPlan: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  imageUrl: string;
}

export interface ItineraryNote {
  heading: string;
  lines: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  /** e.g. "Wed, 21 Oct 2026" */
  date: string;
  /** Omit when no photo has been uploaded for this day — the card lays out single-column. */
  imageUrl?: string;
  bullets: string[];
  note?: ItineraryNote;
  italicNote?: string;
  /** e.g. "Shared Transfer" / "Private Transfer" */
  transferTag?: string;
  meals: string[];
}

export interface PolicyBlock {
  inclusions: string[];
  exclusions: string[];
  payment: string[];
  cancellation: string[];
  bookingTerms: string[];
}

export interface ThankYouBlock {
  heading: string;
  subheading: string;
  message: string;
  website: string;
  /** Public shareable link to this quotation. */
  quotationUrl: string;
  /** Optional pre-rendered QR code image for quotationUrl. */
  qrImageUrl?: string;
}

export interface QuotationData {
  quotationNumber: string;
  heroImageUrl: string;
  /** Short pill label over the hero, e.g. "KERALA" */
  destinationTag: string;
  /** Main heading, e.g. "Kerala Package for Anudeep Reddy" */
  title: string;
  /** e.g. "Munnar — Thekkady — Alleppey — Kovalam" */
  subtitle: string;

  agency: AgencyInfo;
  consultant: ConsultantInfo;
  trip: TripDetails;
  price: PriceSummary;
  servicesInclude: ServiceKey[];
  hotels: HotelStay[];
  itinerary: ItineraryDay[];
  policies: PolicyBlock;
  thankYou: ThankYouBlock;
}
