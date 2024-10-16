<script lang="ts">
  import type { PageData } from "./$types";
  import * as gstate from "../state";
  export let data: PageData;
  gstate.nav.set({ title: 'Articles', route: '/articles' });
</script>

<div class="main">
  <div class="article-list">
    {#each data.articles as article}
      <div class="article-cell">
        {#if article.thumbnail}
          <div class="article-cell-thumbnail" style="background-image: url({article.thumbnail});"></div>
        {/if}
        <div class="article-descriptions">
          <a href="{article.url}" class="article-title">{article.title}</a><br>
          <p class="article-description">{article.description}</p>
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

  .article-description {
    margin: 0;
    font-size: 0.9rem;
  }

  .article-descriptions {
    margin-left: var(--cell-content-lm);
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
    height: var(--cell-height);
    margin: 8px 0 8px 0;
    background-color: #2d293b;
    align-items: center;
    border-left-style: solid;
    border-left-color: #826a6b;
    border-left-width: 4px;
  }

  .main {
    padding: 12px;
    color: #fff;
  }
</style>
