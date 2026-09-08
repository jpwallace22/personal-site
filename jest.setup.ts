// jest-dom v6 dropped the /extend-expect entry point and no longer registers its
// matcher types from a bare setupFilesAfterEach specifier. Importing it from a
// file inside the TS program is what applies the global `jest.Matchers`
// augmentation to the test suite.
import "@testing-library/jest-dom"
