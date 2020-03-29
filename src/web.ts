import { WebPlugin } from '@capacitor/core';
import { GeoFenceServicePlugin } from './definitions';

export class GeoFenceServiceWeb extends WebPlugin
  implements GeoFenceServicePlugin {
  constructor() {
    super({
      name: 'GeoFenceService',
      platforms: ['web']
    });
  }

  async initialise(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async getNotify(options: { value: string }): Promise<{ value: string }> {
    return options;
  }
}

const GeoFenceService = new GeoFenceServiceWeb();

export { GeoFenceService };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GeoFenceService);
