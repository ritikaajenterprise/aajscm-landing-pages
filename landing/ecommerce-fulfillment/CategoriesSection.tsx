import SectionHeader from "./SectionHeader";
import CategoryFocusCarousel from "./CategoryFocusCarousel";
import { categoryImage } from "./assets";

/* ============ SECTION 10 — CATEGORY CAROUSEL ============ */
const CATEGORIES = [
  { label: "FMCG & Consumer Goods", img: categoryImage("carousel-FMCG.webp") },
  { label: "Beauty & Personal Care", img: categoryImage("carousel-Beauty.webp") },
  { label: "Home & Furniture", img: categoryImage("carousel-Home_and_Furniture.webp") },
  { label: "Apparel & Textile", img: categoryImage("carousel-Apparel.webp") },
  { label: "Mobile & Electronics", img: categoryImage("carousel-Electronics.webp") },
  { label: "Toys & Baby Products", img: categoryImage("carousel-Toy_and_Baby_Products.webp") },
  { label: "Kitchen Appliances", img: categoryImage("carousel-Kitchen.webp") },
  { label: "Luggage & Travel Essentials", img: categoryImage("carousel-Luggage.webp") },
  { label: "Books & Stationery", img: categoryImage("carousel-Book.webp") },
  { label: "Sports & Fitness", img: categoryImage("carousel-Fitness.webp") },
];

export const CategoriesSection = () => (
  <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={
          <>
            Order Fulfillment Expertise Across{" "}
            <span className="text-primary">Every Ecommerce Category</span>
          </>
        }
        description="AAJ Supply Chain Management supports diverse product categories with fulfillment workflows tailored to their storage, handling and dispatch requirements."
      />
    </div>

    <div className="mt-2 md:mt-4">
      <CategoryFocusCarousel items={CATEGORIES} />
    </div>
  </section>
);

export default CategoriesSection;
