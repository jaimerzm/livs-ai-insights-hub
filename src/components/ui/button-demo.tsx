
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

function ButtonDemo() {
  return (
    <Button>
      Button
      <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}

export { ButtonDemo };
