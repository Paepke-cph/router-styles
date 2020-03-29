/*
This is the Full-height Fixed Vertical Navbar
From here https://www.w3schools.com/css/css_navbar.asp
*/

ul.header {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

ul.header li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

ul.header li a.active {
  background-color: #4caf50;
  color: white;
}

ul.header li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
.content {
  margin-left: 25%;
  padding: 1px 16px;
  height: 1000px;
}
