import { useState } from "react";
import { Button } from "@/components/ui/button";

// Import gallery images
import galleryMeat1 from "@/assets/gallery-meat-1.jpg";
import galleryMeat2 from "@/assets/gallery-meat-2.jpg";
import galleryMeat3 from "@/assets/gallery-meat-3.jpg";
import galleryLivestock1 from "@/assets/gallery-livestock-1.jpg";
import galleryLivestock2 from "@/assets/gallery-livestock-2.jpg";
import galleryLivestock3 from "@/assets/gallery-livestock-3.jpg";
import galleryLogistics1 from "@/assets/gallery-logistics-1.jpg";
import galleryLogistics2 from "@/assets/gallery-logistics-2.jpg";
import gallerySupply1 from "@/assets/gallery-supply-1.jpg";
import gallerySupply2 from "@/assets/gallery-supply-2.jpg";
import gallerySupply3 from "@/assets/gallery-supply-3.jpg";

type Category = "الكل" | "اللحوم" | "المواشي" | "الخدمات اللوجستية" | "التوريد";

interface GalleryItem {
  image: string;
  caption: string;
  category: Exclude<Category, "الكل">;
}

const galleryItems: GalleryItem[] = [
  { image: galleryMeat1, caption: "فحص الجودة", category: "اللحوم" },
  { image: galleryMeat2, caption: "منتجات متنوعة", category: "اللحوم" },
  { image: galleryMeat3, caption: "لحوم طازجة", category: "اللحوم" },
  { image: galleryLivestock1, caption: "قطيع الأغنام", category: "المواشي" },
  { image: galleryLivestock2, caption: "الماشية الصحية", category: "المواشي" },
  { image: galleryLivestock3, caption: "الماعز", category: "المواشي" },
  { image: galleryLogistics1, caption: "جاهزية لوجستية", category: "الخدمات اللوجستية" },
  { image: galleryLogistics2, caption: "معايير حفظ ونقل", category: "الخدمات اللوجستية" },
  { image: gallerySupply1, caption: "شراكات موثوقة", category: "التوريد" },
  { image: gallerySupply2, caption: "توريد منظم", category: "التوريد" },
  { image: gallerySupply3, caption: "تجهيزات التوريد", category: "التوريد" },
];

const categories: Category[] = ["الكل", "اللحوم", "المواشي", "الخدمات اللوجستية", "التوريد"];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("الكل");

  const filteredItems =
    activeCategory === "الكل"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding gradient-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">المعرض</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "btn-primary"
                    : "border-border hover:bg-primary hover:text-primary-foreground"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item group aspect-square animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="gallery-overlay">
                <span className="text-primary-foreground font-medium text-center px-4">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
