export default function savePost() {
  //All of your code starts here
const url = "http://tiny-za-server.herokuapp.com/collections/joebumMVC/";

let html = $(`
<form class="saveBlogPost" action="index.html" method="post">
  <label for="">Blog Post Title</label>
  <input class="title" type="text" placeholder="title">
  <label for="">Blog Post Body</label>
  <input class="body" type="text" placeholder="body">
  <button type="button" name="button">Save</button>
</form>
`)

$(html).find('button').on('click', (e) => {
  let title = $(html).find('.title').val();
  $(html).find('.title').val('')
  let blog_post = $(html).find('.body').val();
  $(html).find('.body').val('')
  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: url,
    data: JSON.stringify ({
      title: title,
      body: blog_post
    })
  })
})
return html;
};
