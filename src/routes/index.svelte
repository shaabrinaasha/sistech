<script>
  import profpic from "$lib/assets/profile/shasa.png";
  import betis from "$lib/assets/profile/betis.png";
  import compfest from "$lib/assets/profile/compfest.jpg";
  import perak from "$lib/assets/profile/perak.png";
</script>

<div id="layout">
  <div class="container">
    <div id="isi-layout" class="row">
      <div class="col-6 my-5">
        <h1>Shabrina Nurmalitasari</h1>
        <p>Information System Student, Universitas Indonesia</p>
      </div>
      <div class="col-6 my-5">
        <img id="profpic" src={profpic} alt="" />
      </div>
    </div>
  </div>
</div>

<div>
  <div class="container my-5">
    <h2>Experience</h2>
    <div class="row">
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src={compfest} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Staff of BizzIT</h5>
            <p class="card-title">COMPFEST</p>
            <p class="card-text">
              Reached out to data scientists, engineers, and business
              development professionals to be appointed as mentors and judges
              for the event.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src={betis} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">PIC of Creative</h5>
            <p class="card-title">BETIS Fasilkom UI</p>
            <p class="card-text">
              Leading a team of 9 people in the creative team responsible for
              creating visual brand of the event through graphic design and
              video documentation.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src={perak} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Staff of Visual Design</h5>
            <p class="card-title">Pesta Rakyat Komputer</p>
            <p class="card-text">
              Designed social media content and merchandise for the event
              utilizing Figma and Adobe Illustrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  #profpic {
    height: 300px;
    width: 300px;
  }
</style>
