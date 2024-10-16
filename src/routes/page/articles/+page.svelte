<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="main">
  <div class="article-list">
    {#each data.articles as article}
      <div class="article-cell">
        {#if article.thumbnail}
          <div class="article-cell-thumbnail" style="background-image: url({article.thumbnail});"></div>
        {/if}
        <div class="article-info">
          <a href="{article.url}" class="article-title">{article.title}</a><br>
          <p class="article-description">{article.description}</p>
          {#if article.tags}
            <div class="article-tags">
              {#each article.tags as tag}
                <div class="article-tag">{tag}</div>
              {/each}
            </div>
          {/if}
        </div>
        <br>
      </div>
    {/each}
  </div>
  
</div>

<style>

  :root {
    --cell-height: 96px;
    --cell-content-lm: 8px;
  }

  .article-tag {
    margin: 2px;
    padding: 4px;
    background-color: #7c363e;
  }

  .article-tags {
    display: flex;
    flex-direction: row;
  }

  .article-description {
    margin: 0;
    font-size: 0.9rem;
  }

  .article-info {
    margin-left: var(--cell-content-lm);
    width: 100%;
  }

  .article-title {
    text-decoration: none;
    color: #fff;
    font-weight: bolder;
  }

  .article-cell-thumbnail {
    margin-left: var(--cell-content-lm);
    aspect-ratio: 1;
    height: 64px;
    background-position: center;
    background-size: contain;
  }

  .article-cell {
    display: flex;
    flex-direction: row;
    margin: 8px 0 8px 0;
    background-color: #2d293b;
    align-items: center;
    border-left-style: solid;
    border-left-color: #826a6b;
    border-left-width: 4px;
    padding: 8px 4px;
  }

  .main {
    padding: 12px;
    color: #fff;
  }
</style>
