import { Phone, MapPin, Award, Receipt, Building2 } from "lucide-react";

const phones = ["0924830561", "09149794418", "0923661066"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">ج</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">شركة جرمه</h3>
                <p className="text-sm text-background/70">لاستيراد اللحوم والمواشي</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md">
              شركة ليبية متخصصة في استيراد اللحوم والمواشي، نهدف إلى تلبية احتياجات السوق المحلي عبر تنظيم عمليات الاستيراد وفق إجراءات واضحة.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Phone className="h-5 w-5 text-secondary" />
              أرقام الاتصال
            </h4>
            <div className="space-y-3">
              {phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="block text-background/70 hover:text-secondary transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Company Data */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-secondary" />
              بيانات الشركة
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-xs text-background/50">رقم الترخيص</p>
                  <p className="text-sm">1323\36\2020</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Receipt className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-xs text-background/50">الرقم الضريبي</p>
                  <p className="text-sm">80210645</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-xs text-background/50">السجل التجاري</p>
                  <p className="text-sm">1323</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} شركة جرمه لاستيراد اللحوم والمواشي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-sm text-background/70">germa.ly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
