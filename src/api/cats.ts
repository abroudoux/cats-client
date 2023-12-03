// import { requestHandler } from '@/lib/requestHandler';
// import { BASE_URL } from '@/lib/keys';
// import { Cat } from '@/models/cat.model';

// interface GetCatsParams {
//     limit ? : number;
//     page ? : number;
// }

// export const fetchCats = async (params?: Record<string, any>): Promise<Cat[]> => {
//     const queryParams = new URLSearchParams(params).toString();
//     const url = `${BASE_URL}/cats${queryParams ? `?${queryParams}` : ''}`;

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch cats. Status: ${response.status}`);
//     }
  
//     const cats = await response.json();
//         return cats;
// };