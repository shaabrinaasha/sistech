<script>
  import { getBlog, likeBlog, updateBlog } from "$lib/blogs/api";
  import { goto } from "$app/navigation";

  /**
   * @type {any[]}
   */
  let blogs = [];

  const start = async function () {
    const blogsResponses = await getBlog();
    // console.log(blogsResponses);
    const blogData = blogsResponses.data;
    for (var i = 0; i < blogData.length; i++) {
      blogData[i].isUpdate = 0;
      blogData[i].newTitle = "";
      blogData[i].newContent = "";
      blogData[i].disabled = false;
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
    blogs[i].disabled = true;
    await likeBlog(blogs[i].id);
    blogs[i].like += 1;
  };

  const create = function () {
    goto("blogs/create");
  };
</script>

{#await profilesPromise}
  <p>.. wait</p>
{:then _}
  <div class="text-center">
    <button type="button" class="btn btn-dark" on:click={create}
      >Create New Blog</button
    >
  </div>
  {#each blogs as blog, i}
    <div
      class="container"
      style="background-color:#EAF4E0; margin: 20px; padding: 20px"
    >
      {#if !blog.isUpdate}
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <button
          type="button"
          class="btn btn-secondary"
          on:click={() => update(i)}>Update</button
        >
        <button
          type="button"
          class="btn btn-light"
          disabled={blog.disabled}
          on:click={() => like(i)}>Like ({blog.like})</button
        >
      {:else}
        <label for="name">Title</label> <br />
        <input
          class="form-control"
          type="text"
          bind:value={blogs[i].newTitle}
          id="title"
          name="title"
        /><br />
        <label for="desc">Content</label><br />
        <textarea
          class="form-control"
          bind:value={blogs[i].newContent}
          id="content"
          name="content"
        /><br />
        <button type="button" class="btn btn-danger" on:click={() => cancel(i)}
          >Cancel</button
        >
        <button
          type="button"
          class="btn btn-secondary"
          on:click={() => submit(i)}>Submit</button
        >
      {/if}
    </div>
  {/each}
{/await}
