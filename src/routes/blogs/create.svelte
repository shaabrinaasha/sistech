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
</script>

<div style="border: 3px solid lightblue; margin: 20px; padding: 20px">
  <h1>Create New Blog</h1>
  <label for="name">Title</label> <br />
  <input bind:value={initTitle} type="text" id="title" name="title" /><br />
  <label for="desc">Content</label><br />
  <textarea bind:value={initContent} id="content" name="content" /><br />
  <button on:click={create}>Create</button>
</div>
