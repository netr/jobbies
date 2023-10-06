import { fireEvent, render } from '@testing-library/react'
import SearchBar from '@/components/navbar/search-bar'

describe('Render', () => {
    it('should render without crashing', () => {
        const { container } = render(<SearchBar />)
        expect(true).toBeTruthy()
    })
})

describe('Behavior', () => {
    it('should render the search bar', () => {
        const { getByLabelText } = render(<SearchBar />)
        expect(getByLabelText('Search')).toBeTruthy()
    })

    it('should render the search bar with the correct placeholder', () => {
        const { getByPlaceholderText } = render(<SearchBar />)
        expect(getByPlaceholderText('Search')).toBeTruthy()
    })

    it('should display the correct value when typing', () => {
        const { getByPlaceholderText } = render(<SearchBar />)
        const input = getByPlaceholderText('Search') as HTMLInputElement
        input.value = 'test'
        expect(input.value).toBe('test')
    })

    it('should redirect to the correct URL when pressing Enter', () => {
        // @ts-ignore
        delete window.location
        window.location = { href: '', assign: jest.fn() } as any

        const { getByPlaceholderText } = render(<SearchBar />)
        const input = getByPlaceholderText('Search') as HTMLInputElement

        fireEvent.change(input, { target: { value: 'test' } })
        fireEvent.keyDown(input, { key: 'Enter' }) 

        expect(window.location.href).toBe('/search?query=test')
    })

    it('should only redirect if there is a search query typed', () => {
        // @ts-ignore
        delete window.location
        window.location = { href: '', assign: jest.fn() } as any

        const { getByPlaceholderText } = render(<SearchBar />)
        const input = getByPlaceholderText('Search') as HTMLInputElement

        fireEvent.keyDown(input, { key: 'Enter' })

        expect(window.location.href).toBe('')
    })
})