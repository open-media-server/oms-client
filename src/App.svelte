<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import Episodes from './lib/season/Season.svelte';
  import Seasons from './lib/show/Show.svelte';
  import Shows from './lib/home/Home.svelte';
  import Episode from './lib/episode/Episode.svelte';
</script>

<Router>
  <Route path="/" component={Shows} />
  <Route path=":showId" let:params>
    <Seasons showId={params.showId} />
  </Route>
  <Route path=":showId/:seasonId" let:params>
    <Episodes showId={params.showId} seasonId={params.seasonId} />
  </Route>
  <Route path=":showId/:seasonId/:episodeId" let:params>
    <Episode
      showId={params.showId}
      seasonId={params.seasonId}
      episodeId={params.episodeId}
    />
  </Route>
</Router>
