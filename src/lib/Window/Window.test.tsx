import renderer from 'react-test-renderer';
import { renderHook, act } from '@testing-library/react-hooks';
import UseWindow from './Hooks/useWindow';

test('renders Window with passed props', () => {

    const { result } = renderHook(() =>
    UseWindow({ key: 'Test' })
    );

    expect(result.current.isPinned).toBe(false);
    expect(result.current.isOpen).toBe(true);
});

test('Set Window Pinned Status to True When TogglePinned called', () => {
    const { result } = renderHook(() =>
    UseWindow({ key: 'Test' })
    );

    expect(result.current.isPinned).toBe(false);

    act(() => {
        result.current.togglePinned()
    });

    expect(result.current.isPinned).toBe(true);
    expect(result.current.isOpen).toBe(true);
});

test('Verify toggleOpen does nothing if isPinned is true', () => {
    const { result } = renderHook(() =>
    UseWindow({ key: 'Test' })
    );

    expect(result.current.isPinned).toBe(false);

    act(() => {
        result.current.togglePinned();

    });

    expect(result.current.isPinned).toBe(true);
    expect(result.current.isOpen).toBe(true);

    act(() => {
        result.current.toggleOpen();

    });

    
    expect(result.current.isPinned).toBe(true);
    expect(result.current.isOpen).toBe(true);
});

test('Set Open Status to False When ToggleOpen called', () => {
    const { result } = renderHook(() =>
        UseWindow({ key: 'Test' })
    );

    expect(result.current.isPinned).toBe(false);
    expect(result.current.isOpen).toBe(true);

    act(() => {
        result.current.toggleOpen();

    });
    
    expect(result.current.isPinned).toBe(false);
    expect(result.current.isOpen).toBe(false);
});