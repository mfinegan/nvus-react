import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import UseWindow from './Hooks/useWindow'
import Window from './Window'
import { shallow } from 'enzyme'

test('renders Window with passed props', () => {
    const { result } = renderHook(() => UseWindow({ key: 'Test' }))

    expect(result.current.isPinned).toBe(false)
    expect(result.current.isOpen).toBe(true)
})

test('Set Window Pinned Status to True When TogglePinned called', () => {
    const { result } = renderHook(() => UseWindow({ key: 'Test' }))

    expect(result.current.isPinned).toBe(false)

    act(() => {
        result.current.togglePinned()
    })

    expect(result.current.isPinned).toBe(true)
    expect(result.current.isOpen).toBe(true)
})

test('Verify toggleOpen does nothing if isPinned is true', () => {
    const { result } = renderHook(() => UseWindow({ key: 'Test' }))

    expect(result.current.isPinned).toBe(false)

    act(() => {
        result.current.togglePinned()
    })

    expect(result.current.isPinned).toBe(true)
    expect(result.current.isOpen).toBe(true)

    act(() => {
        result.current.toggleOpen()
    })

    expect(result.current.isPinned).toBe(true)
    expect(result.current.isOpen).toBe(true)
})

test('Set Open Status to False When ToggleOpen called', () => {
    const { result } = renderHook(() => UseWindow({ key: 'Test' }))

    expect(result.current.isPinned).toBe(false)
    expect(result.current.isOpen).toBe(true)

    act(() => {
        result.current.toggleOpen()
    })

    expect(result.current.isPinned).toBe(false)
    expect(result.current.isOpen).toBe(false)
})

test('Render component Test', () => {
    const el = {
        i: 'Test Title',
        x: 1,
        y: 1,
        w: 4,
        h: 4,
        minW: 4,
        minH: 4,
        child: <span>Test</span>,
    }
    const comp = shallow(
        <Window
            title={el.i}
            child={el.child}
            layout={el}
            onPinned={() => alert('pinned')}
            onClosed={() => alert('closed')}
        />
    )

    expect(comp).toMatchSnapshot()
})
