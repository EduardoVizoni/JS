const postId = 1; // ID do post para filtrar comentários

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then(response => response.json())
  .then(comments => {
    const filteredComments = comments.filter(comment => comment.body.includes('dolor'));
    filteredComments.forEach(comment => console.log(comment));
  })
  .catch(error => console.error('Erro ao buscar comentários:', error));
