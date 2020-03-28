import { WebPlugin } from '@capacitor/core';
import { GeoFenceServiceePlugin } from './definitions';

export class GeoFenceServiceeWeb extends WebPlugin
  implements GeoFenceServiceePlugin {
  constructor() {
    super({
      name: 'GeoFenceServicee',
      platforms: ['web']
    });
  }

  async init(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const GeoFenceServicee = new GeoFenceServiceeWeb();

export { GeoFenceServicee };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GeoFenceServicee);
