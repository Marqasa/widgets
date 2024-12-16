import type { WidgetColor } from '@/schema/Widget'

/**
 * Get background color based on a widget color
 * @param color The widget color
 * @returns The background color
 */
export function getBackgroundColor(color: WidgetColor): string {
  switch (color) {
    case 'white':
      return '#FFFFFF'
    case 'black':
      return '#212121'
    case 'beige':
      return '#F2EBDB'
    case 'green':
      return '#3B755F'
    case 'blue':
      return '#2E3A8C'
  }
}
