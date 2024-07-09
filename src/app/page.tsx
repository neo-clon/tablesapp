import { BatteryCharging } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ChartDemo from '@/app/chart-demo';

export function AlertDemo() {
  return (
    <Alert>
      <BatteryCharging className="h-4 w-4" />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AlertDemo />
      <ChartDemo />
    </main>
  );
}
