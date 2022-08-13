<script lang="ts">
  import { Link } from 'svelte-routing';

  import type { Show } from '../config/models';

  export let show: Show;
</script>

<div style="display: inline-block; margin: 32px;">
  <Link to={`/${show.id}`}>
    <img width="200px" src={show.thumbnail} alt="thumb" />
    <br />
    {show.name}
  </Link>
</div>
