<script>
  import { createBlog } from "$lib/blogs/api";
  import { goto } from "$app/navigation";

  let initTitle = "";
  let initContent = "";

  const create = async function () {
    var initBlogData = {
      title: initTitle,
      content: initContent,
    };

    await createBlog(initBlogData);
    goto("./");
  };

  const back = function () {
    goto("./");
  };
</script>

<div
  class="container"
  style="background-color:#EAF4E0; margin: 20px; padding: 50px"
>
  <h1 class="text-center">Create New Blog</h1>
  <label for="name">Title</label> <br />
  <input
    class="form-control"
    bind:value={initTitle}
    type="text"
    id="title"
    name="title"
  /><br />
  <label for="desc">Content</label><br />
  <textarea
    class="form-control"
    bind:value={initContent}
    id="content"
    name="content"
  /><br />
  <button type="button" class="btn btn-danger" on:click={back}>Cancel</button>
  <button type="button" class="btn btn-secondary" on:click={create}
    >Create</button
  >
</div>
