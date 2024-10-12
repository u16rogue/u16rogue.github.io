<script lang="ts">
  export let id:    string | undefined = undefined;
  export let title: string | undefined = undefined;
  export let style: string | undefined = undefined;
  export let styleoftitle:   string | undefined = undefined;
  export let styleofcontent: string | undefined = undefined;
</script>

<div {id} class="main toggle-target" {style}>
  <div class="titlebar" style={styleoftitle}>
    <label class="title-p">{title || 'Pop Up'}<input type="checkbox" class="toggler" /></label>
  </div>
  <div style={styleofcontent}>
    <slot />
  </div>
</div>

<style>
  .main {
    width: auto;
  }

  .title-p {
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  .titlebar {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .toggler {
    display: none;
  }

  .toggle-target:has(.toggler:checked) {
    display: none;
  }
</style>
