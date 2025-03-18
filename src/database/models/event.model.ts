import { Model } from '@nozbe/watermelondb'
import { text, field } from '@nozbe/watermelondb/decorators'

export default class Event extends Model {
  static table = 'events'

  @text('icon') icon!: string
  @text('color') color!: string
  @text('title') title!: string
  @text('lastDate') lastDate!: string
  @field('repeats') repeats!: number
  @field('lastDays') lastDays!: number
  @text('parantId') parantId!: string | undefined
}
