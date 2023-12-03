import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api/index.js';
import { KEY_BINDS } from '@AthenaShared/enums/keyBinds.js';
import { Leben_Events } from '@AthenaPlugins/athena-plugin-hotkey-vital/shared/events.js';


export class LebenKeybind {
    static init() {
        AthenaClient.systems.hotkeys.add({
            key: KEY_BINDS.LEBEN,
            description: 'Toggle Leben',
            identifier: 'Leben-toggle',
            keyDown: LebenKeybind.toggleLeben,
        });
    }

    static toggleLeben() {
        alt.emitServer(Leben_Events.TOGGLE);
    }
}
