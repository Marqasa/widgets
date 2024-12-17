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
      return 'var(--gs-color-green)'
    case 'black':
    case 'green':
    case 'blue':
      return 'var(--gs-color-grey)'
  }
}
