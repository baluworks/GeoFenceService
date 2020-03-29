import { WebPlugin } from '@capacitor/core';
import { GeoFenceServicePlugin } from './definitions';
export declare class GeoFenceServiceWeb extends WebPlugin implements GeoFenceServicePlugin {
    constructor();
    initialise(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getNotify(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const GeoFenceService: GeoFenceServiceWeb;
export { GeoFenceService };
