import { FileCheck, Settings, Phone, MapPin, ClipboardList, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import galleryLogistics2 from "@/assets/gallery-logistics-2.jpg";

const features = [
  {
    icon: FileCheck,
    title: "التزام بالبيانات الرسمية",
    description: "توفير جميع الوثائق والبيانات الرسمية المطلوبة بشكل دقيق ومنظم",
  },
  {
    icon: Settings,
    title: "وضوح في إجراءات العمل",
    description: "إجراءات عمل واضحة ومحددة تضمن سير العمليات بسلاسة",
  },
  {
    icon: Phone,
    title: "سهولة التواصل",
    description: "تعدد أرقام الاتصال لضمان وصولكم إلينا في أي وقت",
  },
  {
    icon: MapPin,
    title: "تواجد متعدد",
    description: "العنوان الرئيسي والفروع في مواقع متعددة لخدمتكم بشكل أفضل",
  },
  {
    icon: ClipboardList,
    title: "تنظيم عمليات الاستيراد",
    description: "تنظيم وتنسيق عمليات الاستيراد وفق معايير محددة",
  },
  {
    icon: Users,
    title: "واجهة تواصل واضحة",
    description: "واجهة تواصل واضحة للعملاء والشركاء لتسهيل التعامل",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">لماذا نحن</h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Features Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-professional group hover:-translate-y-1 transition-transform duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Side Image */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="relative">
                <img
                  src={galleryLogistics2}
                  alt="مستودعات الشركة"
                  className="w-full h-auto object-cover shadow-elevated"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6">
                  <p className="text-primary-foreground font-bold text-xl mb-2">
                    التزام وجودة
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    نعمل على تقديم أفضل الخدمات لعملائنا
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
