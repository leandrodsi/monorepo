import { List } from '@repo/models';
import { create } from 'zustand';

export const useStore = create<List[]>(set => []);
