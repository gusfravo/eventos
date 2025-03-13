import { Model } from '@nozbe/watermelondb'
import { text } from '@nozbe/watermelondb/decorators'

export default class Event extends Model {
  static table = 'events'

  @text('icon') icon!: string
  @text('color') color!: string
  @text('title') title!: string
  @text('lastDate') lastDate!: string
  @text('repeats') repeats!: number
  @text('lastDays') lastDays!: number
  @text('parantId') parantId!: string
}
