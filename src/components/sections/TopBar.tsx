import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  const phones = ["0924830561", "09149794418", "0923661066"];

  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">اتصل الآن</span>
          <div className="flex items-center gap-2">
            {phones.map((phone, index) => (
              <a
                key={index}
                href={`tel:${phone}`}
                className="flex items-center gap-1 text-sm hover:text-secondary transition-colors"
              >
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">{phone}</span>
              </a>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="btn-secondary text-xs font-semibold"
          asChild
        >
          <a href="tel:0924830561">
            <Phone className="h-3 w-3 ml-1" />
            اتصل بنا
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
