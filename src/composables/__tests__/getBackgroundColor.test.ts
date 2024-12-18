import type { WidgetColor } from '@/schema/Widget'
import { describe, it, expect } from 'vitest'
import { getBackgroundColor } from '../getBackgroundColor'

describe('getBackgroundColor', () => {
  type TestCase = {
    input: WidgetColor
    expected: string
  }

  const testCases: TestCase[] = [
    { input: 'white', expected: 'var(--gs-color-white)' },
    { input: 'black', expected: 'var(--gs-color-black)' },
    { input: 'beige', expected: 'var(--gs-color-beige)' },
    { input: 'green', expected: 'var(--gs-color-green)' },
    { input: 'blue', expected: 'var(--gs-color-blue)' },
  ]

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for ${input}`, () => {
      expect(getBackgroundColor(input)).toBe(expected)
    })
  })
})
