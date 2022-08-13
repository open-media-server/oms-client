<script lang="ts">
  import { Link } from 'svelte-routing';

  import type { Show } from '../config/models';

  export let show: Show;
</script>

<div>
  <Link to={`/${show.id}`}>{show.name}</Link>
</div>
