import '@testing-library/jest-dom'
import { default as createFetchMock } from 'vitest-fetch-mock'

const fetchMocker = createFetchMock(vi)

fetchMocker.enableMocks()
vi.mock('next/router')
process.env.NEXT_PUBLIC_ENV = 'local'

// This following test setup is required to mock the IntersectionObserver API, as vitest does not natively support it.
// The IntersectionObserver is used in the hook: useStickyDetection hook

class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})
