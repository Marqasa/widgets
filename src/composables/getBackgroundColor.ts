import type { WidgetColor } from '@/schema/Widget'

/**
 * Get background color based on a widget color
 * @param color The widget color
 * @returns The background color
 */
export function getBackgroundColor(color: WidgetColor): string {
  switch (color) {
    case 'white':
      return 'var(--gs-color-white)'
    case 'black':
      return 'var(--gs-color-black)'
    case 'beige':
      return 'var(--gs-color-beige)'
    case 'green':
      return 'var(--gs-color-green)'
    case 'blue':
      return 'var(--gs-color-blue)'
  }
}
