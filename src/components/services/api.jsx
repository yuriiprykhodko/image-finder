

 function fetchImages(query,page,KEY) {
  return  fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
        
                if (!response.ok) {
                    return Promise.reject(new Error(`нет `));
                }
                return response.json();
            })
}

export const api = {
  fetchImages,
};