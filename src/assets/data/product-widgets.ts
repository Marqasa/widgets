import type { Widget } from '@/schema/Widget'

export const PRODUCT_WIDGETS: Widget[] = [
  {
    id: 1,
    type: 'carbon',
    amount: 2,
    action: 'offsets',
    active: false,
    linked: false,
    selectedColor: 'green',
  },
  {
    id: 2,
    type: 'trees',
    amount: 15,
    action: 'plants',
    active: false,
    linked: true,
    selectedColor: 'black',
  },
  {
    id: 3,
    type: 'plastic',
    amount: 300,
    action: 'collects',
    active: true,
    linked: true,
    selectedColor: 'beige',
  },
]
