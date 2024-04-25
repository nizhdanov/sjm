// export const api = {
//   baseUrl: '~',
//   fetch: async function (path: string | URL | Request, options?: RequestInit, revalidate = false) {
//     options = {
//       ...options,
//       headers: {
//         ...options?.headers,
//         'Content-Type': 'application/json'
//       }
//     };

//     if (revalidate) {
//       options = { ...options, next: { revalidate: 3600 } };
//     }

//     const response = await fetch(`${this.baseUrl}${path}`, options);
//     return response.json();
//   }
// };
