import { Beef, Dog, ClipboardCheck, PackageCheck, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Beef,
    title: "استيراد اللحوم",
    description: "استيراد مختلف أنواع اللحوم الطازجة والمجمدة وفق المعايير المطلوبة",
  },
  {
    icon: Dog,
    title: "استيراد المواشي",
    description: "استيراد المواشي الحية بمختلف أنواعها لتلبية احتياجات السوق المحلي",
  },
  {
    icon: ClipboardCheck,
    title: "تنسيق إجراءات التوريد",
    description: "تنسيق وتنظيم جميع إجراءات التوريد والاستيراد بشكل دقيق",
  },
  {
    icon: PackageCheck,
    title: "متابعة وتجهيز الطلبات",
    description: "متابعة الطلبات من البداية حتى التسليم مع ضمان الجودة",
  },
  {
    icon: Headphones,
    title: "دعم واستقبال الاستفسارات",
    description: "فريق متخصص لاستقبال استفساراتكم والرد عليها في أسرع وقت",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding gradient-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-professional group hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
