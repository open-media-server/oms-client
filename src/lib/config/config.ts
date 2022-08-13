import axios from 'axios';
import type { Config } from './models';

export let config: Config;

export async function fetchConfig() {
  const { data } = await axios.get<Config>('http://127.0.0.1:8080/config.json');
  config = data;
}
