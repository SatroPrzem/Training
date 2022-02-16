<template>
  <div class="flex-box wrapper">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <form action="/" class="search">
      <input
        type="text"
        class="search__input"
        placeholder="podaj szukaną frazę"
      />
      <button class="search__btn">Wyszukaj</button>
    </form>
    <div class="settings">Ustawienia</div>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item"><a href="" class="menu__link">Home</a></li>
        <li class="menu__item"><a href="" class="menu__link">Products</a></li>
        <li class="menu__item"><a href="" class="menu__link">Future</a></li>
        <li class="menu__item"><a href="" class="menu__link">Go</a></li>
      </ul>
    </nav>
    <section class="main-articles">Artykuły główne</section>
    <section class="article-list">Lista artykułów</section>
    <footer class="footer">Stopka</footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nav {
  /* display: none; */
}
.wrapper {
  /* kontener */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  /* pozycja */
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  /* wygląd */
  font-size: 2rem;
  box-shadow: 0 0 4px #000;
  color: #fff;
  font-family: "pt sans", "roboto", "aroa", sans-serif;
  background-color: #9ebbf6;
}
.logo {
  flex-basis: 200px;
  padding: 20px 10px;
  height: 140px;
  background-color: #e7c4ff;
}
.logo img {
  display: block;
  height: 100%;
  margin: 0 auto;
}

.search {
  /* element elastyczny */
  flex-grow: 1;
  /* kontener flexbox */
  display: flex;
  align-items: center;
  justify-content: center;
}
.search__input {
  flex-basis: 60%;
  height: 30%;
  margin-right: 10px;
  padding: 0 10px;
  font-size: 1.4rem;
}
.search__input:focus {
  box-shadow: 0 0 6px 2px cadetblue;
  font-weight: bold;
}
.search__btn {
  height: 30%;
  font-size: 1.4rem;
  padding: 0 10px;
  border: 2px solid #000;
  background-color: white;
  cursor: pointer;
  transition: 0.3s;
}
.search__btn:hover {
  background-color: #000;
  color: white;
}

.settings {
  background-color: #2c704b;
}
.menu {
  flex-basis: 100%;
  height: 70px;
  padding: 5px 0 15px 80px;

  background-color: #754fce;
}
.menu__list {
  display: flex;
  list-style: none;
}
.menu__item {
  margin: 0 20px;
  font-style: 2rem;
  text-transform: uppercase;
  line-height: 4rem;
}
.menu__item:hover {
  border-bottom: 2px yellow solid;
}
.menu__item:nth-last-child(1) {
  margin-left: auto;
}
.menu__link {
  color: #fff;
  text-decoration: none;
}

.main-articles {
  flex-basis: 100%;
  /* min-height: 50vh; */
  background-color: #3663a7;
}
.article-list {
  flex-basis: 100%;
  background-color: #144185;
}
.footer {
  flex-basis: 100%;
  background-color: #111;
}
</style>
