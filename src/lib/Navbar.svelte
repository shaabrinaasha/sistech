<!-- <nav>
  <a href="/blogs/">blogzzzSSzz</a>
  <a href="/">home i guess</a>
</nav> -->
<script>
  import flower from "$lib/assets/profile/flower-icon.svg";
  import profpic from "$lib/assets/profile/shasa.png";
</script>

<nav
  class="navbar navbar-expand-lg navbar-dark"
  style="background-color: #E39B90"
>
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src={flower} width="30" height="30" alt="" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blogs/">Blogs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
