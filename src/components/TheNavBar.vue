<script setup>

</script>

<template>
    <nav>
      <p>Where in the world?</p>
      <ul class="list-wrap">
        <li class="nav-item"> 
            <img src="@/assets/dark.png" alt="image">
        </li>
        <li> Dark Mode </li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 19px;
      padding-left: 80px;
      padding-right: 80px;
      background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
height: 80px;
      
    }
  

    nav p {

color: #111517;
font-family: Nunito Sans;
font-size: 24px;
font-style: normal;
font-weight: 800;
line-height: normal;
    }
    nav ul {
      display: flex;
      list-style: none;
      gap: 10px;
      color: black;
  
    }
  
    nav ul li a {
      text-decoration: none; /* Apply text-decoration to the <a> elements */
            
          color: #111517;
font-family: Nunito Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

    }
  </style>