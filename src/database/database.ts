import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import eventSchema from './schemas/event.schema';
import Event from './models/event.model';


const adapter = new SQLiteAdapter({
  schema: eventSchema,
  jsi: true, // Mejor rendimiento con JSI en React Native 0.27+
  onSetUpError: (error) => {
    console.error('Error configurando la DB:', error)
  },
})

export const database = new Database({
  adapter,
  modelClasses: [Event], // Agregar los modelos aquí
})

