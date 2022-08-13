<script lang="ts">
  import { Link } from 'svelte-routing';
  import type { Episode } from '../config/models';

  export let showId: string;
  export let seasonId: string;
  export let episode: Episode;
</script>

<div>
  <Link to={`/${showId}/${seasonId}/${episode.id}`}>
    Episode {episode.number} - {episode.name}
  </Link>
</div>
