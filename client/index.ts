import { SYSTEM_EVENTS } from '@AthenaShared/enums/system.js';
import * as alt from 'alt-client';
import { LebenKeybind } from './src/lebenKeybind.js';

alt.onceServer(SYSTEM_EVENTS.TICKS_START, LebenKeybind.init);
