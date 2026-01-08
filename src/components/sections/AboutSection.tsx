import { Award, Receipt, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import aboutImage from "@/assets/about-image.jpg";

const officialData = [
  { icon: Award, label: "رقم الترخيص", value: "1323\\36\\2020" },
  { icon: Receipt, label: "الرقم الضريبي", value: "80210645" },
  { icon: Building2, label: "السجل التجاري", value: "1323" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              شركة جرمه الأثرية شركة ليبية متخصصة في استيراد اللحوم والمواشي، وتهدف إلى تلبية احتياجات السوق المحلي عبر تنظيم عمليات الاستيراد وفق إجراءات واضحة، مع الاهتمام بالتوثيق والبيانات الرسمية وسهولة التواصل وتعدد نقاط الوصول من خلال العنوان الرئيسي والفروع.
            </p>

            {/* Official Data Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {officialData.map((item, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold text-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={aboutImage}
                alt="مقر الشركة"
                className="w-full h-auto object-cover shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 -z-10" />
            </div>
          </div>
        </div>

        {/* Official Company Data Box */}
        {/* <Card className="card-professional border-primary/20 bg-muted">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              بيانات الشركة الرسمية
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-loose whitespace-pre-line">
{`شركة جرمه للاستيراد اللحوم والمواشي
رقم الترخيص 1323\\36\\2020
الرقم الضريبي 80210645
السجل التجاري 1323
العنوان الرئيسي ليبيا.. سبها اوباري منطقة جرمه
على الطريق الرئيسي اوباري سبها بالقرب من
معسكر الدفاعية جرمه
تليفونات 0924830561
09149794418
0923661066
الفروع اوباري شارع البريد بالقرب من الثانوية
الغريبه بالقرب من مصرف الصحاري
جرمه مقابل الشيل`}
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default AboutSection;
