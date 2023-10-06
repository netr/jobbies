import { render } from '@testing-library/react'
import Navbar from '@/components/navbar'


describe('Render', () => {
    it('should render without crashing', () => {
        const { container } = render(<Navbar />)
        expect(container).toBeTruthy()
    })
})