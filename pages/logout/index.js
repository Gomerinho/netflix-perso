import { useRouter } from 'next/router';
import { React, useEffect } from 'react';

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    const isLogged = localStorage.getItem('isLoggedIn');
    if (isLogged) {
      localStorage.removeItem('isLoggedIn');
      router.push('/login');
    } else {
      router.push('/login');
    }
  }, [router]);

  return <div>Deconnexion ...</div>;
};

export default Logout;
