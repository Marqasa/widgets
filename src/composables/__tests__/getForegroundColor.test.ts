import type { WidgetColor } from '@/schema/Widget'
import { describe, it, expect } from 'vitest'
import { getForegroundColor } from '../getForegroundColor'

describe('getForegroundColor', () => {
  type TestCase = {
    input: WidgetColor
    expected: string
  }

  const testCases: TestCase[] = [
    { input: 'white', expected: 'var(--gs-color-green)' },
    { input: 'beige', expected: 'var(--gs-color-green)' },
    { input: 'black', expected: 'var(--gs-color-grey)' },
    { input: 'green', expected: 'var(--gs-color-grey)' },
    { input: 'blue', expected: 'var(--gs-color-grey)' },
  ]

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for ${input}`, () => {
      expect(getForegroundColor(input)).toBe(expected)
    })
  })
})
