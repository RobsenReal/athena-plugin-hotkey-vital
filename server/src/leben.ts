import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { VITAL_NAMES } from '@AthenaPlugins/athena-plugin-food-water/shared/enums.js';
import { VitalsSystem } from '@AthenaPlugins/athena-plugin-food-water/server/src/system.js';
import { NotifyController } from '@AthenaPlugins/athena-plugin-notifications/server/controller.js';
import { Leben_Events } from '@AthenaPlugins/athena-plugin-hotkey-vital/shared/events.js';


declare module 'alt-server' {
    interface Player {
        lebenStatus?: number;
    }
}

function finishSetHealth(target: alt.Player, value: number) {
    Athena.player.safe.addHealth(target, value, true);
    Athena.player.emit.message(target, `Neue Gesundheit: ${value}`);
}

export class Leben {
    static init() {
        alt.onClient(Leben_Events.TOGGLE, Leben.toggleLeben);
    }

    static toggleLeben(player: alt.Player) {

            if (Athena.systems.permission.hasOne('account', player, ['admin'])) {
                finishSetHealth(player, 199);
                VitalsSystem.adjustVital(player, VITAL_NAMES.FOOD, 100, true);
                VitalsSystem.adjustVital(player, VITAL_NAMES.WATER, 100, true);
                NotifyController.send(player, 2, 3, 'Vitalsystem','Leben, Essen und Wasser wiederhergestellt.');
                Athena.player.emit.soundFrontend(player, 'Goon_Paid_Small', 'GTAO_Boss_Goons_FM_Soundset');

            } else {
                NotifyController.send(player, 2, 3, 'Vitalsystem','Du hast nicht die erforderliche Berechtigung!');
        }
    }
}

