var todos = [
  {
  "title": "flooring",
  "price": "10,000",
  "description": "hard wood floors",
},
{
  "movie": "John Wick Chapter 2",
  "length": "1hr"
}
]
for (var i = 0; i < todos.length; i++) {
  document.getElementById("todos").innerHTML +="<div>" + todos [i].title + "</div>"
  document.getElementById("todos").innerHTML +="<div>" + todos [i].price + "</div>"
  document.getElementById("todos").innerHTML +="<div>" + todos [i].description + "</div>"
  document.getElementById("todos").innerHTML +="<div>" + todos [i].movie + "</div>"
  document.getElementById("todos").innerHTML +="<div>" + todos [i].length + "</div>"
}
