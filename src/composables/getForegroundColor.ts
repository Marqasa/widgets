import type { WidgetColor } from '@/schema/Widget'

/**
 * Get foreground color based on a widget color
 * @param color The widget color
 * @returns The foreground color
 */
export function getForegroundColor(color: WidgetColor): string {
  switch (color) {
    case 'white':
    case 'beige':
      return '#3B755F'
    case 'black':
    case 'green':
    case 'blue':
      return '#F9F9F9'
  }
}
