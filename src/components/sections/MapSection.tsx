import { MapPin, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

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
        <Card className="card-professional relative overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7311156.985471365!2d3.8836870040717835!3d26.523312399999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13cf33005c74d0c1%3A0xa4725ee18fac8847!2z2LTYsdmD2Kkg2KzYsdmF2Kkg2KfZhNin2KvYsdmK2Ycg2YTYp9iz2KrYsdin2K8g2KfZhNmF2YjYp9i02Yog2YjYp9mE2YTYrdmI2YU!5e0!3m2!1sen!2sly!4v1767876312920!5m2!1sen!2sly" width="600" height="450" style={{
            border: 0,
            width: "100%",
            borderRadius: "0.5rem"
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         <a href="https://maps.app.goo.gl/26H9zgdBkQGsQ4SN8" target="_blank">
           <Button variant="secondary" className="absolute bottom-4 right-4 flex items-center gap-2">
            عرض الموقع الكامل <MapPin size={16} />
          </Button>
         </a>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;
