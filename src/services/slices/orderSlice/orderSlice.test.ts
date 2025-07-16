import orderSlice, {
  getOrderByNumber,
  initialState
} from './orderSlice';
import { expect, test, describe } from '@jest/globals';
import { mockOrder } from '../constants';

describe('тестирование редьюсера orderSlice', () => {
  describe('тестирование асинхронного экшена getOrderByNumber', () => {
    const actions = {
      pending: {
        type: getOrderByNumber.pending.type
      },
      rejected: {
        type: getOrderByNumber.rejected.type,
        error: { message: 'Get order failed' }
      },
      fulfilled: {
        type: getOrderByNumber.fulfilled.type,
        payload: {
          orders: [mockOrder]
        }
      }
    };

    test('тест экшена getOrderByNumber.pending', () => {
      const state = orderSlice(initialState, actions.pending);
      expect(state.error).toBeNull();
      expect(state.request).toBe(true);
    });

    test('тест экшена getOrderByNumber.rejected', () => {
      const state = orderSlice(initialState, actions.rejected);
      expect(state.error).toBe(actions.rejected.error.message);
      expect(state.request).toBe(false);
    });

    test('тест экшена getOrderByNumber.fulfilled', () => {
      const state = orderSlice(initialState, actions.fulfilled);
      expect(state.error).toBeNull();
      expect(state.request).toBe(false);
      expect(state.orderByNumberResponse).toEqual(mockOrder);
    });
  });
});
