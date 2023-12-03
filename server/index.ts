import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { Leben } from './src/leben.js';

const PLUGIN_NAME = 'Leben';
const AUTHOR = 'Realrobsen'

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    Leben.init();

    alt.log(`~lg~${PLUGIN_NAME} wurde geladen. ${AUTHOR}`);
});
