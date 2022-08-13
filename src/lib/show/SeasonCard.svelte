<script lang="ts">
  import { Link } from 'svelte-routing';

  import type { Season } from '../config/models';

  export let showId: string;
  export let season: Season;
</script>

<div>
  <Link to={`/${showId}/${season.id}`}>{season.name}</Link>
</div>
