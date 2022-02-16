<template>
  <div class="basicLayout">
    <header>
      <h1>Typical website!</h1>
    </header>
    <div class="container">
      <section>
        <h1>This is the main content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
          placeat necessitatibus molestias maiores doloribus obcaecati,
          praesentium eveniet inventore, quod saepe nulla itaque aspernatur eius
          quidem reiciendis. Consectetur, laborum et.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          possimus at. Atque, ut modi inventore odit laboriosam aspernatur
          laborum quod. Dolore reprehenderit facilis rem laborum necessitatibus,
          voluptatem esse repellat eligendi. Maxime qui architecto dolorem
          beatae cum, quos iure praesentium veniam odio omnis molestias earum
          obcaecati, officia cumque assumenda. Vero eum qui quasi quam ducimus
          praesentium iusto autem eos temporibus fuga.
        </p>
      </section>
      <aside>
        <h2>This is my sidebar</h2>
        <ol>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ol>
      </aside>
    </div>
    <footer>
      <p>Delectus adipisci at perferendis error</p>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@200;400;800&display=swap");
.basicLayout {
  min-height: 100vh;
  background-color: #cde7b0;
  font-family: "Sora", sans-serif;
  font-size: 18px;
  margin: 0;
}
.basicLayout header {
  background-color: #59594a;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #fff;
  letter-spacing: 4px;
  text-transform: capitalize;
  margin-bottom: 100px;
}
.basicLayout header h1 {
  font-weight: 800;
}
.basicLayout .container {
  text-align: left;
  width: 80%;
  margin: 0 auto;
}

.basicLayout section {
  width: 70%;
  float: left;
  margin-bottom: 100px;
}
.basicLayout aside {
  width: 25%;
  float: right;
}

.basicLayout footer {
  clear: both;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1em;
  background-color: #555;
  color: white;
}
</style>
