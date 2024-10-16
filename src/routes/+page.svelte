<script lang="ts">
  import type { PageData } from "./$types";
  import * as gstate from "./state";
  export let data: PageData; 
  gstate.nav.set({ title: 'Home', route: '/' });
</script>

<div class="main">
</div>

<style>
  .main {
  }
</style>
