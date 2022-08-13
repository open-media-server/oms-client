<script lang="ts">
  import { Link } from 'svelte-routing';

  import { config } from '../config/config';
  import SeasonCard from './SeasonCard.svelte';

  export let showId: string;

  const show = config.media.find((show) => show.id.toString() === showId);
</script>

<h1>{show.name}</h1>
<div>
  <Link to="/">Back</Link>
  <br /><br />
  {#each show.seasons as season}
    <SeasonCard {showId} {season} />
  {/each}
</div>
