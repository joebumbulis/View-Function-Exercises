export default function createContact() {
//   //All of your code starts here

// b) Create a form for a person.
// It should have a first name, last name, address, and phone number.
// It should save the person to tiny-za-server.
// After submitting the page should display, "Hello PERSON_NAME".


const url = "http://tiny-za-server.herokuapp.com/collections/joebumMVC/";
//
  let html = $(`
    <div>
    <form class="contactPerson" action="index.html" method="post">
      <label>First Name</label>
      <input class="first" type="text" placeholder="first name">
      <label>Last Name</label>
      <input class="last" type="text" placeholder="last name">
      <label>Address</label>
      <input class="address" type="text" placeholder="address">
      <label>Phone number</label>
      <input class="number" type="text" placeholder="xxx-xxx-xxxx">
      <button type="button" name="button">Save</button>
    </form>
    <div class="output"></div>
    </div>
    `)

$(html).find('button').on('click', (e) => {
  let firstName = $(html).find('.first').val();
  let lastName = $(html).find('.last').val();
  let address = $(html).find('.address').val();
  let phoneNumber = $(html).find('.number').val();
  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: url,
    data: JSON.stringify ({
      first: firstName,
      last: lastName,
      address: address,
      phone: phoneNumber
    })
  }).then(function(data, status, xhr){
    let greeting = $(`<p>Hello ${data.first} ${data.last}!</p> `);
    $(html).find('.output').append(greeting)
  })
});
return html;

}
