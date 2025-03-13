import { ColumnSchema, TableSchema, appSchema, tableSchema } from '@nozbe/watermelondb'
import { ColumnType } from '@nozbe/watermelondb/Schema';


const typeString: ColumnType = 'string';
const typeNumber: ColumnType = 'number';

const columns: ColumnSchema[] = [
  { name: 'icon', type: typeString },
  { name: 'color', type: typeString },
  { name: 'title', type: typeString },
  { name: 'lastDate', type: typeString },
  { name: 'repeats', type: typeNumber },
  { name: 'lastDays', type: typeNumber },
  { name: 'parantId', type: typeString, isOptional: true },
];


const tables: TableSchema[] = [
  tableSchema({
    name: 'events',
    columns
  })

];

const eventSchema = appSchema({
  version: 1,
  tables
})

export default eventSchema;
