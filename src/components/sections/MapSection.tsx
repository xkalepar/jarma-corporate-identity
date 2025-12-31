import { MapPin, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MapSection = () => {
  return (
    <section id="map" className="section-padding gradient-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            الموقع على الخريطة
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        {/* Map Placeholder */}
        <Card className="card-professional overflow-hidden">
          <div className="h-96 bg-muted flex items-center justify-center relative">
            {/* Decorative Map Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Placeholder Content */}
            <Card className="relative z-10 max-w-md mx-4">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  الموقع على الخريطة
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm">
                    الخريطة غير متوفرة حالياً — سيتم إضافتها عند تزويدنا برابط الموقع أو الإحداثيات.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  ليبيا.. سبها اوباري منطقة جرمه
                </p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;
