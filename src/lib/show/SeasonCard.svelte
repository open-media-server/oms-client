<script lang="ts">
  import { Link } from 'svelte-routing';

  import type { Season } from '../config/models';

  export let showId: string;
  export let season: Season;
</script>

<div style="display: inline-block; margin: 32px;">
  <Link to={`/${showId}/${season.id}`}>
    <img width="200px" src={season.thumbnail} alt="thumb" />
    <br />
    {season.name}
  </Link>
</div>
