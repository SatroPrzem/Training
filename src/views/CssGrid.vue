<template>
  <div class="css-grid">
    <div class="first-page">
      <div class="container-1">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
        <div class="box">10</div>
      </div>
    </div>
    <div class="secund-page">
      <div class="container-2">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
        <div class="box box4">4</div>
      </div>
    </div>
    <div class="third-page">
      <div class="container-3">
        <header class="box">HEADER</header>
        <main class="box">CONTENT</main>
        <aside class="box">SIDEBAR</aside>
        <footer class="box">FOOTER</footer>
      </div>
    </div>
    <div class="fourth-page">
      <h2>Auto-fill</h2>
      <div class="container-4">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
      </div>

      <h2>Auto-fit</h2>
      <div class="container-alt-4">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style type="text/css">
body {
  font-size: 1.5rem;
  font-family: sans-serif;
}

.container-1 .box {
  background: #222;
  color: #fff;
}
.first-page,
.secund-page,
.third-page {
  min-height: 100vh;
}
.container-1 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, minmax(200px, auto));
  grid-gap: 20px;
  background: #ea47f3;
}
.container-2 {
  background: #222;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  margin: 0 auto;
}
.container-2 .box {
  background: #ea47f3;
  color: #fff;
}

.container-2 .box1 {
  grid-column: 1 / -1;
}

.container-2 .box2 {
  grid-column: 6 / span 2;
  grid-row: 3 / span 4;
}
.container-2 .box3 {
  grid-column: 1 / span 4;
  grid-row: span 2 / -2;
}
.container-2 .box4 {
  grid-column: 2 / -1;
  grid-row: 8;
}
.box {
  background: #ea47f3;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.container-3 {
  margin: 0 auto;
  background: #222;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    "header header header header header header header header"
    ". . . . . . . ."
    "content content content content content . sidebar sidebar"
    "content content content content content . sidebar sidebar"
    "content content content content content . sidebar sidebar"
    "content content content content content . sidebar sidebar"
    ". . . . . . . ."
    " footer footer footer footer footer footer footer footer";
}
.container-3 header {
  /*
            grid area shorthand
            grid-row-start: auto
            grid-column-start: auto
            grid-row-end: auto
            grid-column-end: auto
            */
  grid-area: header;
}
.container-3 main {
  grid-column: content-start / content-end;
  grid-row: content-start / 7;
}
.container-3 aside {
  grid-area: 3 / 7 / 7 / 9;
}
.container-3 footer {
  grid-area: footer;
}
.container-4 {
  background: #222;
  height: 200px;
  display: grid;
  /*grid-template-columns: repeat(10, 100px);*/
  /*grid-template-columns: repeat(10, minmax(50px, 100px));*/
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
}
.container-alt-4 {
  background: #222;
  height: 200px;
  margin-top: 20px;
  display: grid;
  /*grid-template-columns: repeat(10, 100px);*/
  /*grid-template-columns: repeat(10, minmax(50px, 100px));*/
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
}
</style>
