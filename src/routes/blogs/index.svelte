<script>
  import { getBlog, likeBlog, updateBlog } from "$lib/blogs/api";
  import { goto } from "$app/navigation";

  /**
   * @type {any[]}
   */
  let blogs = [];

  const start = async function () {
    const blogsResponses = await getBlog();
    console.log(blogsResponses);
    const blogData = blogsResponses.data;
    for (var i = 0; i < blogData.length; i++) {
      blogData[i].isUpdate = 0;
      blogData[i].newTitle = "";
      blogData[i].newContent = "";
    }
    blogs = blogsResponses.data;
  };

  let profilesPromise = start();

  // @ts-ignore
  const update = function (i) {
    blogs[i].isUpdate = 1;
    blogs[i].newTitle = blogs[i].title;
    blogs[i].newContent = blogs[i].content;
  };

  const cancel = function (i, a) {
    blogs[i].isUpdate = 0;
  };

  const submit = async function (i) {
    var blogData = {
      title: blogs[i].newTitle,
      content: blogs[i].newContent,
      id: blogs[i].id,
    };

    await updateBlog(blogData);
    window.location.reload();
  };

  const like = async function (i) {
    await likeBlog(blogs[i].id);
    blogs[i].like += 1;
  };

  const create = function () {
    goto("blogs/create");
  };
</script>

<button on:click={create}
  >gatau cara tengahin gimana but create new blog here</button
>

{#await profilesPromise}
  <p>.. wait</p>
{:then _}
  {#each blogs as blog, i}
    <div style="border: 3px solid lightblue; margin: 20px; padding: 20px">
      {#if !blog.isUpdate}
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <button on:click={() => update(i)}>Update</button>
        <button on:click={() => like(i)}>Like ({blog.like})</button>
      {:else}
        <label for="name">Title</label> <br />
        <input
          bind:value={blogs[i].newTitle}
          type="text"
          id="title"
          name="title"
        /><br />
        <label for="desc">Content</label><br />
        <textarea
          bind:value={blogs[i].newContent}
          id="content"
          name="content"
        /><br />
        <button on:click={() => cancel(i)}>Cancel</button>
        <button on:click={() => submit(i)}>Submit</button>
      {/if}
    </div>
  {/each}
{/await}
