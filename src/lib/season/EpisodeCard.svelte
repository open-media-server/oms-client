<script lang="ts">
  import { Link } from 'svelte-routing';
  import type { Episode } from '../config/models';

  export let showId: string;
  export let seasonId: string;
  export let episode: Episode;
</script>

<div style="margin: 32px;">
  <Link to={`/${showId}/${seasonId}/${episode.id}`}>
    <img width="200px" src={episode.thumbnail} alt="thumb" />
    <br />
    Episode {episode.number} - {episode.name}
  </Link>
</div>
