export const fetchImage = (
  query = '',
  page = 1,
  key = '33010792-9be0a9a8fe82c8e51d7216432'
) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 600)))
    .then(result => result.json())
    .then(data => data.hits);
};

export default fetchImage;
