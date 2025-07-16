import { constructorReducer, addBun, addIngredient, removeIngredient, moveIngredient, clearConstructor } from '../constructorSlice';
import { TConstructorIngredient } from '../../../types/types';
import { mockBun, mockConstructorIngredient } from '../constants';
import { initialState } from '../constructorSlice';

describe('constructor slice', () => {
  it('should handle addBun', () => {
    const nextState = constructorReducer(initialState, addBun(mockBun));
    expect(nextState.bun).toEqual(mockBun);
    expect(nextState.total).toBe(400); // bun price * 2
  });

  it('should handle addIngredient', () => {
    const nextState = constructorReducer(initialState, addIngredient(mockConstructorIngredient));
    expect(nextState.ingredients).toHaveLength(1);
    expect(nextState.ingredients[0]).toEqual(mockConstructorIngredient);
    expect(nextState.total).toBe(100); // ingredient price
  });

  it('should handle removeIngredient', () => {
    const state = {
      ...initialState,
      ingredients: [mockConstructorIngredient],
      total: 100
    };
    const nextState = constructorReducer(state, removeIngredient('2'));
    expect(nextState.ingredients).toHaveLength(0);
    expect(nextState.total).toBe(0);
  });

  it('should handle moveIngredient', () => {
    const ingredient1 = { ...mockConstructorIngredient, id: '2' };
    const ingredient2 = { ...mockConstructorIngredient, id: '3' };
    const state = {
      ...initialState,
      ingredients: [ingredient1, ingredient2],
      total: 200
    };
    const nextState = constructorReducer(state, moveIngredient({ dragIndex: 0, hoverIndex: 1 }));
    expect(nextState.ingredients[0]).toEqual(ingredient2);
    expect(nextState.ingredients[1]).toEqual(ingredient1);
  });

  it('should handle clearConstructor', () => {
    const state = {
      bun: mockBun,
      ingredients: [mockConstructorIngredient],
      total: 500
    };
    const nextState = constructorReducer(state, clearConstructor());
    expect(nextState.bun).toBeNull();
    expect(nextState.ingredients).toHaveLength(0);
    expect(nextState.total).toBe(0);
  });

  it('should calculate total correctly with bun and ingredients', () => {
    const state = {
      bun: mockBun,
      ingredients: [mockConstructorIngredient],
      total: 0
    };
    const nextState = constructorReducer(state, addIngredient(mockConstructorIngredient));
    expect(nextState.total).toBe(600);
  });
}); 