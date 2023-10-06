import { render, screen } from '@testing-library/react'
import React from 'react'
import NotificationsIcon from '@/components/navbar/notifications-icon'
import '@testing-library/jest-dom'

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

    it('should be disabled when there are no notifications', async () => {
        render(<NotificationsIcon count={0} />)
        const component = await screen.findByRole('button')
        expect(component).toBeDisabled()
    })

    it('should render the notification icon with a count', () => {
        render(<NotificationsIcon count={69} />)
        const badge = document.querySelector('[data-testid="badge"]')
        expect(badge?.textContent).toBe('69')
    })

    it('should not be disabled when there are notifications', async () => {
        render(<NotificationsIcon count={69} />)
        const component = await screen.findByRole('button')
        expect(component).not.toBeDisabled()
    })
})