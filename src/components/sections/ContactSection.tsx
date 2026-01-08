import { useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const phones = [
  { number: "0924830561", label: "الهاتف الأول" },
  { number: "09149794418", label: "الهاتف الثاني" },
  { number: "0923661066", label: "الهاتف الثالث" },
];

const addresses = [
  {
    title: "العنوان الرئيسي",
    lines: [
      " ليبيا.. سبها",
    ],
  },
  {
    title: "الفروع",
    lines: [
      "اوباري شارع البريد بالقرب من الثانوية",
      "الغريفة بالقرب من مصرف الصحاري",
      "جرمه مقابل الشيل",
    ],
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال الرسالة",
      description: "شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                أرسل لنا رسالة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input
                    id="name"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="أدخل رقم هاتفك"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="text-right resize-none"
                  />
                </div>
                <Button type="submit" className="w-full btn-primary" size="lg">
                  <Send className="h-5 w-5 ml-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone Cards */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  أرقام الاتصال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.number}`}
                    className="flex items-center justify-between p-4 bg-muted hover:bg-primary/10 transition-colors group"
                  >
                    <span className="text-sm text-muted-foreground">
                      {phone.label}
                    </span>
                    <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {phone.number}
                    </span>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Address Cards */}
            {addresses.map((address, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {address.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {address.lines.map((line, lineIndex) => {
                      const firstWord = line.split(" ")[0];
                      const restOfLine = line.split(" ").slice(1).join(" ");
                      return (
                        <p>
                          <span className="text-primary font-bold">
                            {firstWord}
                          </span>
                          {" "}
                          <span className="mx-2 ">
                            {restOfLine}
                          </span>
                        </p>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
