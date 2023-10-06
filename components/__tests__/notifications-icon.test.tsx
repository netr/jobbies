import { render } from '@testing-library/react'
import React from 'react'
import NotificationsIcon from '@/components/notifications-icon'

describe('Render', () => {
    it('should render without crashing', () => {
        const { container } = render(<NotificationsIcon count={0} />)
        expect(true).toBeTruthy()
    })
})

describe('Behavior', () => {
    it('should render the notification icon without a count', () => {
        render(<NotificationsIcon count={0} />)
        const badge = document.querySelector('[data-testid="badge"]')
        expect(badge).toBeNull()
    })

    it('should render the notification icon with a count', () => {
        render(<NotificationsIcon count={69} />)
        const badge = document.querySelector('[data-testid="badge"]')
        expect(badge?.textContent).toBe('69')
    })
})