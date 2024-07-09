import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { promises as fs } from 'fs';

async function getData(): Promise<Payment[]> {
    const file = await fs.readFile(process.cwd() + '/src/app/payments/payments.json', 'utf8');
    const data = JSON.parse(file);
    return data as Payment[];
}

export default async function DemoPage() {
  const data = await getData()
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
