import { QuotationTemplate } from "@/components/quotation-template";
import { sampleQuotation } from "@/lib/sampleQuotation";

/**
 * Static preview using the local sample data (lib/sampleQuotation.ts) —
 * useful when you don't have network access to TripzoCRM's public API, or
 * just want to check the template renders without depending on live data.
 */
export default function SamplePreviewPage() {
  return (
    <main className="preview-shell">
      <QuotationTemplate data={sampleQuotation} />
    </main>
  );
}
