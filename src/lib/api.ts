const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const api = {
  get: async (url: string, params?: any, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}${params ? `?${new URLSearchParams(params).toString()}` : ''}`, {
      method: 'GET',
      ...(headers && { headers }),
    });
    return res.json();
  },

  post: async (url: string, data?: any, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      ...(headers && { headers }),
      ...(data && { body: JSON.stringify(data) }),
    });
    return res.json();
  },

  patch: async (url: string, data?: any, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'PATCH',
      ...(headers && { headers }),
      ...(data && { body: JSON.stringify(data) }),
    });
    return res.json();
  },

  delete: async (url: string, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      ...(headers && { headers }),
    });
    return res.json();
  },
};

export default api;
