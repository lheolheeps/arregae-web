import { Category } from '@/types';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const categoriesAtom = atom<Category[]>([]);

export const useCategoriesAtom = (initialCategories?: Category[]) => {
  const [categories, setCategories] = useAtom(categoriesAtom);
  useEffect(() => {
    if (initialCategories) setCategories(initialCategories);
  }, [])
  return {categories, setCategories};
}
