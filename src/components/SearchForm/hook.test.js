import { renderHook, act } from '@testing-library/react-hooks'
import useForm from './hooks'

test('should change keyword', () => {
    const { result } = renderHook(() => useForm())

    act(() => {
        result.current.updateKeyword('weed')
    })

    //    expect(true).toBe(true)
    expect(result.current.keyword).toBe('weed')
})
