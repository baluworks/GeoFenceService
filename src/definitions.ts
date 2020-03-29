declare module '@capacitor/core' {
  interface PluginRegistry {
    GeoFenceService: GeoFenceServicePlugin;
  }
}

export interface GeoFenceServicePlugin {
  initialise(options: { value: string }): Promise<{ value: string }>;
  getNotify(options: { value: string }): Promise<{ value: string }>;
}
