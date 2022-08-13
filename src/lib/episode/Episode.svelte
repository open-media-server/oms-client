<script lang="ts">
  import { Link } from 'svelte-routing';
  import { config } from '../config/config';

  export let showId: string;
  export let seasonId: string;
  export let episodeId: string;

  const show = config.media.find((show) => show.id.toString() === showId);
  const season = show.seasons.find(
    (season) => season.id.toString() === seasonId,
  );
  const episode = season.episodes.find(
    (episode) => episode.id.toString() === episodeId,
  );

  const url = episode.path.startsWith('http')
    ? episode.path
    : config.base_url + episode.path;
</script>

<Link to={`/${showId}/${seasonId}`}>Back</Link>

<h2>{show.name} - {season.name}</h2>
<h1>{episode.name}</h1>

<!-- svelte-ignore a11y-media-has-caption -->
<video src={url} controls width="1200px" />

<br /><br />

<a style="font-size: 14px;" href={url}>{url}</a>
