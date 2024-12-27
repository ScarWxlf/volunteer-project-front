'use client'
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

import Home from '../components/home/home';
import { useNotificationStore } from '@/store/notificationStore';

export default function Main() {
  const message = useNotificationStore((state) => state.message);
  const clearMessage = useNotificationStore((state) => state.clearMessage);
  useEffect(() => {
    if (message) {
      toast.success(message, { position: 'top-right' });
      clearMessage();
    }
  }, [message]);
  return (
    <div>
      <Home/>
      <ToastContainer autoClose={3000} className='toast-position' />
    </div>
  );
}
