import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useSession, signIn } from 'next-auth/client'
import { NextRouter, useRouter } from 'next/router'
import { SubscribeButton } from '.'

jest.mock('next/router')
jest.mock('next-auth/client')

describe('SubscribeButton component', () => {
  it('should renders correctly', () => {
    const mockUseSession = mocked(useSession)
    mockUseSession.mockReturnValueOnce([null, false])
    render(<SubscribeButton />)

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('should redirect user to sign in when not authenticated', () => {
    const mockUseSession = mocked(useSession)
    mockUseSession.mockReturnValueOnce([null, false])
    
    const signInMocked = mocked(signIn)

    render(<SubscribeButton />)
    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalledWith('github')
  })

  it('should redirect to post when user is subscribed', () => {
    const mockUseSession = mocked(useSession)
    mockUseSession.mockReturnValueOnce([
      { user: { name: 'Deivison' }, activeSubscription: true },
      false
    ])

    const mockPush = jest.fn()

    const mockUseRouter = mocked(useRouter)
    mockUseRouter.mockReturnValueOnce({
      push: mockPush,
    } as any)

    render(<SubscribeButton />)
    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(mockPush).toHaveBeenCalledWith('/posts')
  })
})