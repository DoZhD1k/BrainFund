import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeft } from "lucide-react";
import { Button } from "./ui/button";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant="icon" onClick={toggleSidebar}>
      <PanelLeft />
    </Button>
  );
}
