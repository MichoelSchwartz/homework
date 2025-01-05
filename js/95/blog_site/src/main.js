fetchJson('users', displayUsers);
const app = document.querySelector('#app');
const homeButton = document.querySelector('#home');
homeButton.style.display = 'none';
let tempPosts, tempName, tempUsers;

async function fetchJson(urlFrag, displayCallback, arg) {
  try {
    const r = await fetch(`https://jsonplaceholder.typicode.com/${urlFrag}`);
    const result = await r.json();

    if (!r.ok) {
      throw new Error(`${r.status} - ${r.statusText} - ${result.message}`);
    }
    console.log(result);
    displayCallback(result, arg);
  } catch (e) {
    console.log(e.message);
  }
}

function displayUsers(users) {
  app.innerHTML = '<h2>Click on a user to view their blog<h2>';
  users.map(u =>
    app.innerHTML +=
    `<div class="container user" id="${u.id}"}>
      <div class="name" ><h2>${u.name}</h2></div>
      <div class="website"><h4>Website: ${u.website}</h4></div>
      <div class="companyInfo"><h4>Company Name: ${u.company.name}</h4></div>
    </div>`
  );
  const containers = document.querySelectorAll('.container');
  containers.forEach(c => c.addEventListener('click',
    e => fetchJson(`posts?userId=${e.target.id}`, displayPosts, e.target.children[0].innerText)));
  tempUsers = users;
  myScroll();
}

function displayPosts(posts, name) {
  app.innerHTML = `<h2>${name}'s Posts:<h2>`;
  posts.map(p => app.innerHTML +=
    `<div class="container post">
      <h5>${p.title}<h5>
      <p>${p.body}<p>
      <button id=${p.id}>Show Comments</button>
    </div>`
  );
  const buttons = document.querySelectorAll('button');
  buttons.forEach(b => {
    const post = posts.find(p => p.id === Number(b.id));
    b.addEventListener('click', e => fetchJson(`comments?postId=${e.target.id}`, displayComments, post));
  });
  tempPosts = posts;
  tempName = name;
  homeButton.style.display = 'inline';
  homeButton.addEventListener('click', () => { displayUsers(tempUsers); homeButton.style.display = 'none'; });
  myScroll();
}

function displayComments(comments, post) {
  app.innerHTML = `<h2>Comments Section</h2>
                  <h2>Post:</h2>
                    <div class="container post">
                    <h5>${post.title}<h5>
                    <p>${post.body}<p>
                    <button id="hideComments">Hide Comments</button>
                  </div>
                  <h2>Comments:</h2>`;
  comments.map(c => app.innerHTML +=
    `<div class="container comment">
      <h5>${c.name}</h5>
      <h5>${c.email}</h5>
      <p>${c.body}</p>
    </div>`
  );
  const button = document.querySelector('#hideComments');
  button.addEventListener('click', () => displayPosts(tempPosts, tempName));
  myScroll();
}

function myScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

