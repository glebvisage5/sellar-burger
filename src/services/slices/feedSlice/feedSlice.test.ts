import feedSlice, {
  getFeeds,
  initialState
} from './feedSlice';
import { expect, test, describe } from '@jest/globals';
import { mockOrders } from '../constants';

describe('тестирование редьюсера feedSlice', () => {
  describe('тестирование асинхронного экшена getFeeds', () => {
    const actions = {
      pending: {
        type: getFeeds.pending.type
      },
      rejected: {
        type: getFeeds.rejected.type,
        error: { message: 'Get feeds failed' }
      },
      fulfilled: {
        type: getFeeds.fulfilled.type,
        payload: {
          orders: mockOrders,
          total: 100,
          totalToday: 10
        }
      }
    };

    test('тест экшена getFeeds.pending', () => {
      const state = feedSlice(initialState, actions.pending);
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    test('тест экшена getFeeds.rejected', () => {
      const state = feedSlice(initialState, actions.rejected);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(actions.rejected.error.message);
    });

    test('тест экшена getFeeds.fulfilled', () => {
      const state = feedSlice(initialState, actions.fulfilled);
      expect(state.loading).toBe(false);
      expect(state.error).toBeNull();
      expect(state.orders).toEqual(mockOrders);
      expect(state.total).toBe(100);
      expect(state.totalToday).toBe(10);
    });
  });
});
