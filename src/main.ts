import './app.css';
import App from './App.svelte';
import { fetchConfig } from './lib/config/config';

await fetchConfig();

const app = new App({
  target: document.getElementById('app'),
});

export default app;
