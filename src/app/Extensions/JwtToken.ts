import jwt_decode from 'jwt-decode';

export function getUserRoleFromToken() {
  const token = localStorage.getItem('myData');
  
  if (token) {
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.role;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  return null;
}

