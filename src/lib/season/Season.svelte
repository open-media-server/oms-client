<script lang="ts">
  import { Link } from 'svelte-routing';

  import { config } from '../config/config';
  import EpisodeCard from './EpisodeCard.svelte';

  export let showId: string;
  export let seasonId: string;

  const show = config.media.find((show) => show.id.toString() === showId);
  const season = show.seasons.find(
    (season) => season.id.toString() === seasonId,
  );
</script>

<h1>{show.name}</h1>
<h2>{season.name}</h2>
<div>
  <Link to={showId}>Back</Link>
  <br /><br />
  {#each season.episodes as episode}
    <EpisodeCard {showId} {seasonId} {episode} />
  {/each}
</div>
