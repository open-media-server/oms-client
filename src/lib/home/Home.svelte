<script>
  import { config } from '../config/config';
  import Show from './ShowCard.svelte';

  let shows = config.media;
</script>

<div>
  {#each shows as show}
    <Show {show} />
  {/each}
</div>
