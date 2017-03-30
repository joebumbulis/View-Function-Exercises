import Store from './store.js'
import savePost from './savePost.js'
import createContact from './contacts_view.js'

export default function app() {
//   //All of your code starts here

// * c) Create a "blog reading app", where you have two columns.
//A list of blog posts on the side and a place to read the posts
// in the middle. When you click on a post title,
//it "opens" that post by placing its contents in the middle column,
//but does not remove the list from the page.


const url = "http://tiny-za-server.herokuapp.com/collections/joebumMVC/";
// //
  let html = $(`
    <section>
      <aside class="left-side"><ul class="posts-list"></ul></aside>
      <article class="right-side"><ul class="title"></ul><ul class="body"></ul></article>
    </section>
     `)
//
$.ajax({
    type: 'GET',
    dataType: 'json',
    url: url
}).then((data, status, xhr) => {
  console.log(status);
  data.forEach((post, i, arr) => {

    let listItem = $(`<li><a href="#${post._id}">${post.title}</a></li>`);
    let link = listItem.find('a')
    link.on('click', (e) =>{
        console.log(e.target)
        // $.ajax({
        //   type: 'GET',
        //   dataType: 'json',
        //   url: url + `${post._id}`
        // }).then((post, status, xhr) => {
          // $(html).find('.title').replaceWith();
          // $(html).find('.body').replaceWith();
            let title = $(`<li>${post.title}</li>`);
            let body = $(`<li>${post.body}</li> `)
            $(html).find('.title').html(title)
            $(html).find('.body').html(body)
          // })
        })
        $(html).find('.posts-list').append(listItem)
    })
})


  //Example of the most minimal view possible.
  let defaultView = `<h1>Hello World!</h1>`

  //The default state of this app is nothing, just an empty object.
  //  Don't worry about adding state until you need to keep track of it across views.
  let initialState = {
  };

  const store = new Store(initialState);

  const update = function (state, event, data) {
    console.log(`Update was called because the '${event}' event was fired.`);
    if (state === undefined || event === undefined) {
      console.debug("Error: Something is undefined")
      console.debug(`State: ${state} | Event: '${event}'`);
      return;
    } else {
      // Your update code goes below here

      if (event === "hello_world") {
        console.log("hello world!");
        //Always return the state;
        return state;
      }

      // Your update code goes above here
      console.debug(`Unhandled Event: '${event}'`);
      return;
    }
  };

  const render = function (state, event, data) {
    // You will want to update this render function to render
    $('#app').html(html);
  };

  // Every time an event is fired the update function will run
  //  and *then* the render function will run after that.
  store.add(update);
  store.add(render);
  store.fire("hello_world"); // Feel free to delete. This is just an example.
}
