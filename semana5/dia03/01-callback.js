/**
 * >Función que obtiene un arreglo de post y
 * >los devuelve a través del callback fn
 * >@param {*} fn(posts)
 * >posts es el arreglo de posts
 */
const obtenerPosts = async (fn) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    fn(data);
};

obtenerPosts((posts) => {
    console.log('posts' , posts);
})