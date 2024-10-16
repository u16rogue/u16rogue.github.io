<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="main">
  <div class="header">
    <div class="header-content">
      <p class="header-title">{data.metadata.title}</p>
      <p class="header-description">{data.metadata.description}</p>
    </div>
  </div>

  <div class="content">
    {@html data.content.code}
  </div>
</div>

<style>

  /*------------------------------------------------------------*/

  .content { padding: 0 12px; }

  .content :global(img) {
    border-style: dashed;
    border-width: 2px;
    border-color: #826a6b;
  }

  .content :global(p) {
    margin: 0;
  }

  .content :global(a) {
    color: #5bf8ff;
    text-decoration: underline dotted;
  }

  .content :global(pre:has(code)) {
    background-color: #2d293b;
    padding: 8px;
    width: fit-content;
    border-left-style: dotted;
    border-width: 4px;
    border-color: #826a6b;
  }

  .content :global(blockquote) {
    background-color: #2d293b;
    padding: 8px;
    text-align: center;
    border-left-style: dotted;
    font-style: italic;
    width: fit-content;
    border-color: #826a6b;
  }

  .content :global(table) {
    border-style: dashed;
    border-width: 1px;
    border-color: #826a6b;
  }

  .content :global(thead) {
    font-weight: bolder;
    font-size: 1.1rem;
    background-color: #2d293b;
  }

  .content :global(tbody > tr:nth-of-type(even)) {
    background-color: #363648;
  }

  .content :global(tbody > tr:nth-of-type(odd)) {
    background-color: #3b3b5b;
  }

  .content :global(th) {
    padding: 6px;
  }

  .content :global(td) {
    padding: 4px;
  }

  /*------------------------------------------------------------*/

  .header-content {
  }

  .header-description {
    
  }

  .header-title {
    font-weight: bolder;
    font-size: 2rem;
  }

  .header-content > p {
    margin: 0;
  }

  .header {
    background-color: #2d293b;
    padding: 8px;
    border-left-style: solid;
    border-left-color: #826a6b;
    border-left-width: 6px;
  }

  .main {
    padding: 12px;
    color: #fff;
  }
</style>
