export const useWpApi = () => {
  const {
    public: { wpUrl },
  } = useRuntimeConfig();

  //
  const get = async <T>(endpoint: string) =>
    await useFetch<T>(`${wpUrl}/wp-json/wp/v2/${endpoint}`, {
      lazy: true,
    });

  // Получаем все записи либо категории
  const getPosts = async <T>(categories?: number, page: number = 1, perPage: number = 9) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;

    if (categories) query += `&categories=${categories}`;
    console.log(query);

    return await get<T>(query);
  };

  // Получаем одну запись
  const getPost = async <T>(slug: string) => await get<T>(`posts?slug=${slug}&_embed`);

  // Получаем все категории
  const getCategories = async <T>() => await get<T>('categories');

  // Получаем одну категорию
  const getCategory = async <T>(slug: string) => await get<T>(`categories?slug=${slug}`);

  //
  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};
