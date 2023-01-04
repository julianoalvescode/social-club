import { format, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

class ChronosClass {
  format(date: string, options: string): string {
    if (!date) return "";
    return format(new Date(date), options, { locale: ptBR });
  }

  formatDistance(date: string): string {
    if (!date) return "";
    return formatDistance(new Date(date), Date.now(), {
      addSuffix: true,
      locale: ptBR,
    });
  }
}
export const Chronos = new ChronosClass();
