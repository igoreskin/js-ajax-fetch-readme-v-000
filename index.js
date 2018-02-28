// const app = "I don't do much.";
//
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
//
// xhr.onload = () => {
//   console.log(xhr.response);
// };
//
// xhr.onerror = () => {
//   console.log('Booo');
// };
//
// xhr.send();

// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));

const token = 'cb6647a1856aea89637419ddb0651faa5487b297'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
