
const KEY = '21893173-2e6903a6fb362f8aa14208207';

 function fetchHits(query,page) {
  return  fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
        
                if (!response.ok) {
                    return Promise.reject(new Error(`нет `));
                }
                return response.json();
            })
}

export const api = {
  fetchHits,
};