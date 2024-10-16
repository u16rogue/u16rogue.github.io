<script lang="ts">
  import { onMount } from "svelte";
  import PopUp from "$lib/components/PopUp.svelte";
  import type { PageData } from "./$types";
  import { page } from "$app/stores";

  export let data: PageData;

  onMount(async function () {
    const popup = document.getElementById('popup-nojs');
    if (popup) popup.style.visibility = 'visible';
    if (data.name) data.name = /https{0,1}\:\/\/([\w]*)\./g.exec(window.location.href)?.[1] || data.name;
  });
</script>

<svelte:head>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐀</text></svg>">
  <title>{$page.data?.meta?.page?.title || '...'} | 🐀</title>
</svelte:head>

<PopUp
  id="popup-nojs"

  style="
    position: fixed;
    right: 5px;
    bottom: 5px;
    visibility: hidden;
    border-style: solid;
    border-width: 1px;
    color: white;
  "

  styleoftitle="
    background-color: #7c363eaa;
    padding: 6px;
  "

  styleofcontent="
    background-color: rgba(0, 0, 0, 0.4);
    padding: 4px;
  "

  title="JS Assert"
>
  If you're reading this<br>
  that means you have<br>
  JavaScript on :(
</PopUp>

<div class="main">
  <div class="left-panel">
    <div class="colorbox">{#each data.colors as color}<div class="box" style="background-color: {color};"></div>{/each}</div>
    <div class="profile-image" style="background-image: url({data.pfp});"></div>
    
    <div class="profile-drop-nav">
      {#if data.name}<p style="margin: 0;">
        {data.name}'s</p>
        <div class="profile-hdivider"></div>
      {/if}
      <div class="profile-drop-nav-selector-text">
        <a class="current-nav" href="{$page.data?.meta?.nav?.route || '/'}">{$page.data?.meta?.nav?.title || '[no title]'}</a>
        <div class="profile-drop-down">
          {#each data.nav as entry}
            {#if entry.type === 'route'}
              <a href="{entry.route}">{entry.name || entry.id}</a>
            {:else if entry.type === 'separator'}
              <hr>
            {:else}
              <a href="/">[err]</a>
            {/if}
          {/each}
        </div>
      </div>
      
    </div>
    <hr class="profile-splitter">
  </div>
  <div class="content-panel"><slot/></div>
</div>


<style>
  :root {
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
    font-family: "Comfortaa";
    --theme-background-color: #1e1e28;
    --theme-color: #c39fa1;
  }

  .current-nav {
    text-decoration: underline dotted;
    color: var(--theme-color);
  }

  .profile-drop-down > a:hover {
    text-decoration: underline dotted;
  }

  .profile-drop-down > a {
    text-decoration: none;
    color: var(--theme-color);
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .profile-hdivider {
    width: 4px;
    height: 1px;
    background-color: var(--theme-color);
    margin-left: 4px;
    margin-right: 4px;
  }

  .profile-drop-nav-selector-text:hover > .profile-drop-down {
    display: flex;
  }

  .profile-drop-down {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 8px;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
  }

  .profile-drop-nav-selector-text {
    text-decoration: underline dotted;
    cursor: pointer;
  }

  .profile-drop-nav {
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .profile-splitter {
    color: var(--theme-color);
  }

  .profile-image {
    background-position: center;
    background-size: cover;
    width: 100%;
    aspect-ratio: 1;
  }

  .left-panel {
    background-color: #2d293b;
    padding: 12px;
    color: var(--theme-color);
  }
  
  .content-panel {
    background-color: #1e1e28;
    flex-grow: 1;
    min-height: 100vh;
    overflow-y: scroll;
  }

  .colorbox {
    width: 200px;
    height: 20px;

    border-style: solid;
    border-width: 1px;

    display: flex;
    flex-direction: row;
  }

  .colorbox .box {
    flex-grow: 1;
  }

  .main {
    width:  100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
  }

  hr { padding: 0; margin: 0; color: var(--theme-color); }
</style>
