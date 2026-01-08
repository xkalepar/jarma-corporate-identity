import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft, Phone, FileText, Award, Receipt, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  { image: hero1, alt: "قطيع المواشي" },
  { image: hero2, alt: "اللحوم الطازجة" },
  { image: hero3, alt: "أسطول النقل" },
  { image: hero4, alt: "الخدمات اللوجستية" },
];

const badges = [
  { icon: Award, label: "رقم الترخيص", value: "1323\\36\\2020" },
  { icon: Receipt, label: "الرقم الضريبي", value: "80210645" },
  { icon: Building2, label: "السجل التجاري", value: "1323" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative h-full section-container flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            شركة جرمه الأثرية لاستيراد المواشي و المواشي 
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            حلول استيراد موثوقة تخدم الأسواق داخل ليبيا، مع تركيز على الجودة والانضباط في الإجراءات.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="btn-secondary text-base font-semibold px-8"
              asChild
            >
              <a href="tel:0924830561">
                <Phone className="h-5 w-5 ml-2" />
                اتصل الآن
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className=" text-base font-semibold px-8"
              onClick={() => scrollToSection("#about")}
            >
              <FileText className="h-5 w-5 ml-2" />
              بيانات الشركة الرسمية
            </Button>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {badges.map((badge, index) => (
              <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                    <badge.icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/70">{badge.label}</p>
                    <p className="text-sm font-bold text-primary-foreground">{badge.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          aria-label="الشريحة السابقة"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 transition-all ${
                index === currentSlide
                  ? "bg-secondary w-8"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
              }`}
              aria-label={`الانتقال للشريحة ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          aria-label="الشريحة التالية"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
