<template>
  <div class="tv-gry">
    <h1>overment: CSS GRID</h1>

    <div class="container">
      <div class="grid">
        <div class="grid-item grid-item-1">
          <img src="https://picsum.photos/900/600?image=14" alt="" />
        </div>
        <div class="grid-item grid-item-2">
          <img src="https://picsum.photos/900/600?image=24" alt="" />
        </div>
        <div class="grid-item grid-item-3">
          <img src="https://picsum.photos/900/600?image=34" alt="" />
        </div>
        <div class="grid-item grid-item-4">
          <img src="https://picsum.photos/900/600?image=44" alt="" />
        </div>
        <div class="grid-item grid-item-5">
          <img src="https://picsum.photos/900/600?image=54" alt="" />
        </div>
        <div class="grid-item grid-item-6">
          <img src="https://picsum.photos/900/600?image=64" alt="" />
        </div>
        <div class="grid-item grid-item-7">
          <img src="https://picsum.photos/900/600?image=74" alt="" />
        </div>
        <div class="grid-item grid-item-8">
          <img src="https://picsum.photos/900/600?image=84" alt="" />
        </div>
        <div class="grid-item grid-item-9">
          <img src="https://picsum.photos/900/600?image=94" alt="" />
        </div>
        <div class="grid-item grid-item-10">
          <img src="https://picsum.photos/900/600?image=104" alt="" />
        </div>
        <div class="grid-item grid-item-11">
          <img src="https://picsum.photos/900/600?image=114" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: #f4f4f4;
  font-family: sans-serif;
}
.tv-gry h1 {
  text-align: center;
}
.tv-gry .container {
  max-width: 1000px;
  margin: 20px auto 0;
}
.tv-gry .grid-item {
  background: #ff00fb;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  display: none;
}
.tv-gry .grid-item img {
  width: 100%;
}
.tv-gry .grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 8px;
  padding: 8px;
  background-color: #fff;
}
.tv-gry .grid-item-1 {
  grid-column: 1 / 2;
}
.tv-gry .grid-item-2 {
  grid-column: 2 / 3;
}
.tv-gry .grid-item-7 {
  grid-column: 1 / 2;
  grid-row: 2/3;
}
.grid-item-3 {
  grid-column: 2/3;
  grid-row: 2/3;
}
.tv-gry .grid-item-1,
.tv-gry .grid-item-2,
.tv-gry .grid-item-3,
.tv-gry .grid-item-7 {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 641px) {
  .tv-gry .grid {
    grid-template-columns: repeat(6, 1fr);
  }
  .tv-gry .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tv-gry .grid-item-11 {
    display: none;
  }
  .tv-gry .grid-item-1 {
    grid-column: 1 / 4;
    grid-row: 1/3;
  }
  .tv-gry .grid-item-2 {
    grid-column: 4 / -1;
    grid-row: 1/3;
  }
  .tv-gry .grid-item-7 {
    grid-column: 1 / 4;
    grid-row: 3/5;
  }
  .tv-gry .grid-item-4 {
    grid-column: 4 / -1;
    grid-row: 3/5;
  }
  .tv-gry .grid-item-5 {
    grid-column: 1 / 3;
    grid-row: 5 / span 2;
  }
  .tv-gry .grid-item-9 {
    grid-column: 3 / span 2;
    grid-row: 5 / span 2;
  }
  .tv-gry .grid-item-8 {
    grid-column: 5 / span 2;
    grid-row: 5 / span 2;
  }
  .tv-gry .grid-item-6 {
    grid-column: 1 / span 2;
    grid-row: 7 / span 2;
  }
  .tv-gry .grid-item-10 {
    grid-column: 3 / span 2;
    grid-row: 7 / span 2;
  }
  .tv-gry .grid-item-3 {
    grid-column: 5 / span 2;
    grid-row: 7 / span 2;
  }
}
@media (min-width: 1024px) {
  .tv-gry .grid-item img {
    width: 100%;
  }
  .tv-gry .grid-item-11 {
    display: flex;
  }
  .tv-gry .grid {
    padding: 4px;
    grid-template-columns: repeat(5, 192px);
    grid-template-rows: repeat(5, 112px);
  }
  .tv-gry .grid-item {
    overflow: hidden;
  }

  .tv-gry .grid-item-1 {
    grid-column: 1 / 4;
    grid-row: 1/4;
  }
  .tv-gry .grid-item-2 {
    grid-column: 4 / -1;
    grid-row: 1 / span 2;
  }
  .tv-gry .grid-item-3 {
    grid-column: 4 / 5;
    grid-row: 3 / span 1;
  }
  .tv-gry .grid-item-4 {
    grid-column: 5 / span 1;
    grid-row: 3 / span 1;
  }
  .tv-gry .grid-item-5 {
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
  }
  .tv-gry .grid-item-6 {
    grid-column: 2 / span 1;
    grid-row: 4 / span 1;
  }
  .tv-gry .grid-item-7 {
    grid-column: 3 / span 2;
    grid-row: 4 / span 2;
  }
  .tv-gry .grid-item-8 {
    grid-column: 5 / span 1;
    grid-row: 4 / span 1;
  }
  .tv-gry .grid-item-9 {
    grid-column: 1 / span 1;
    grid-row: -1 / -2;
  }
  .tv-gry .grid-item-10 {
    grid-column: 2 / span 1;
    grid-row: -1/-2;
  }
  .tv-gry .grid-item-11 {
    grid-column: 5 / span 1;
    grid-row: -1 / -2;
  }
}
@media (min-width: 1680px) {
  .tv-gry .container {
    max-width: 1300px;
  }
  .tv-gry .grid {
    grid-template-columns: repeat(5, 252px);
    grid-template-rows: repeat(5, 146px);
  }
}
</style>
