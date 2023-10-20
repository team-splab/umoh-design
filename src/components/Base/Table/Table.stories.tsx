import type { Meta, StoryObj } from '@storybook/react';

import { columns, Payment } from './Columns';
import { DataTable } from './DataTable';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
  // Add 20 more rows
  {
    id: 'j5f8d4g2',
    amount: 123,
    status: 'success',
    email: 'john.doe@example.com',
  },
  {
    id: 'h3k9s7f1',
    amount: 456,
    status: 'processing',
    email: 'jane.doe@example.com',
  },
  {
    id: 'p2l5t9m7',
    amount: 789,
    status: 'success',
    email: 'jimmy.smith@example.com',
  },
  {
    id: 'r4n8c2t6',
    amount: 234,
    status: 'failed',
    email: 'jessica.jones@example.com',
  },
  {
    id: 's1m7t9p3',
    amount: 567,
    status: 'success',
    email: 'peter.parker@example.com',
  },
  {
    id: 't6n2r8c4',
    amount: 890,
    status: 'processing',
    email: 'bruce.wayne@example.com',
  },
  {
    id: 'f8d4g2j5',
    amount: 123,
    status: 'success',
    email: 'clark.kent@example.com',
  },
  {
    id: 'k9s7f1h3',
    amount: 456,
    status: 'processing',
    email: 'diana.prince@example.com',
  },
  {
    id: 'l5t9m7p2',
    amount: 789,
    status: 'success',
    email: 'tony.stark@example.com',
  },
  {
    id: 'n8c2t6r4',
    amount: 234,
    status: 'failed',
    email: 'steve.rogers@example.com',
  },
  {
    id: 'm7t9p3s1',
    amount: 567,
    status: 'success',
    email: 'natasha.romanoff@example.com',
  },
  {
    id: 'n2r8c4t6',
    amount: 890,
    status: 'processing',
    email: 'thor.odinson@example.com',
  },
  {
    id: 'd4g2j5f8',
    amount: 123,
    status: 'success',
    email: 'wanda.maximoff@example.com',
  },
  {
    id: 's7f1h3k9',
    amount: 456,
    status: 'processing',
    email: 'vision@example.com',
  },
  {
    id: 't9m7p2l5',
    amount: 789,
    status: 'success',
    email: 'stephen.strange@example.com',
  },
  {
    id: 'c2t6r4n8',
    amount: 234,
    status: 'failed',
    email: 'peter.quill@example.com',
  },
  {
    id: 't9p3s1m7',
    amount: 567,
    status: 'success',
    email: 'gamora@example.com',
  },
  {
    id: 'r8c4t6n2',
    amount: 890,
    status: 'processing',
    email: 'rocket@example.com',
  },
];

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle: 'Table은 데이터 세트를 보여주는 반응형 컴포넌트입니다.',
    docs: {
      description: {
        component:
          '데이터를 행과 열로 구성된 Table 형식으로 표시할 수 있습니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="p-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;

export const DefaultTable: StoryObj<typeof Table> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Table입니다.',
      },
    },
  },
  render: args => (
    <Table {...args}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ExampleTable: StoryObj<typeof Table> = {
  parameters: {
    docs: {
      description: {
        story: `
TanStack Table을 사용한 Example Table입니다.\n
- Cell Formatters
- Auto-managed internal state
- Opt-in fully controlled state
- Sorting
- Multi Sort
- Global Filters
- Columns Filters
- Pagination
- Row Grouping
- Aggregation
- Row Selection
- Row Expansion
- Column Ordering
- Column Visibility
- Column Resizing
- Virtualizable
- Server-side/external Data
- Nested/Grouped Headers
- Footers
`,
      },
    },
  },

  render: args => {
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} {...args} />
      </div>
    );
  },
};
