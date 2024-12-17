import { z } from 'zod'

export const WidgetType = z.enum(['carbon', 'plastic', 'trees'])

export const WidgetAction = z.enum(['collects', 'plants', 'offsets'])

export const WidgetColor = z.enum(['white', 'black', 'blue', 'green', 'beige'])

export const Widget = z.object({
  action: WidgetAction,
  active: z.boolean(),
  amount: z.number(),
  id: z.number(),
  linked: z.boolean(),
  selectedColor: WidgetColor,
  type: WidgetType,
})

export const UpdateWidgetData = Widget.omit({ id: true }).partial()

export const Widgets = z.array(Widget)

export type WidgetType = z.infer<typeof Widget>

export type WidgetAction = z.infer<typeof WidgetAction>

export type WidgetColor = z.infer<typeof WidgetColor>

export type Widget = z.infer<typeof Widget>

export type Widgets = z.infer<typeof Widgets>

export type UpdateWidgetData = z.infer<typeof UpdateWidgetData>
