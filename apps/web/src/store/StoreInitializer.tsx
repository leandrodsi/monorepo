'use client';

import { List } from '@repo/models';
import { useStore } from '@repo/store';
import { useRef } from 'react';

export default function StoreInitializer({ lists }: { lists: List[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState(lists);
    initialized.current = true;
  }

  return null;
}
