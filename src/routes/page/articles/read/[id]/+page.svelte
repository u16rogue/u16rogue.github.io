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

  .content { padding: 0 12px; }

  .color-bar {
    background-color: #826a6b;
    width: 4px;
    height: var(--cell-height);
  }

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
