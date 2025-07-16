import { TIngredient } from '../../types/types';
import { TConstructorIngredient } from '../../types/types';

export const mockIngredient: TIngredient = {
  _id: '1',
  name: 'Test Ingredient',
  type: 'main',
  proteins: 10,
  fat: 5,
  carbohydrates: 15,
  calories: 100,
  price: 200,
  image: 'test.jpg',
  image_mobile: 'test-mobile.jpg',
  image_large: 'test-large.jpg',
  __v: 0,
  count: 0
};

export const mockBun: TConstructorIngredient = {
  id: '1',
  _id: '1',
  name: 'Test Bun',
  type: 'bun',
  proteins: 10,
  fat: 5,
  carbohydrates: 15,
  calories: 100,
  price: 200,
  image: 'test.jpg',
  image_mobile: 'test-mobile.jpg',
  image_large: 'test-large.jpg',
  __v: 0
};

export const mockConstructorIngredient: TConstructorIngredient = {
  id: '2',
  _id: '2',
  name: 'Test Ingredient',
  type: 'main',
  proteins: 10,
  fat: 5,
  carbohydrates: 15,
  calories: 100,
  price: 100,
  image: 'test.jpg',
  image_mobile: 'test-mobile.jpg',
  image_large: 'test-large.jpg',
  __v: 0
};

export const mockOrder = {
  _id: '1',
  ingredients: ['ingredient1', 'ingredient2'],
  status: 'done',
  name: 'Test Order',
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  number: 1
};

export const mockOrders = [
  {
    _id: '1',
    ingredients: ['ingredient1', 'ingredient2'],
    status: 'done',
    name: 'Test Order 1',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    number: 1
  },
  {
    _id: '2',
    ingredients: ['ingredient3', 'ingredient4'],
    status: 'pending',
    name: 'Test Order 2',
    createdAt: '2024-01-02',
    updatedAt: '2024-01-02',
    number: 2
  }
];

export const mockUser = {
  name: 'Test User',
  email: 'test@example.com'
};

export const updatedMockUser = {
  name: 'Updated User',
  email: 'updated@example.com'
}; 