declare module '@capacitor/core' {
  interface PluginRegistry {
    GeoFenceServicee: GeoFenceServiceePlugin;
  }
}

export interface GeoFenceServiceePlugin {
  init(options: { value: string }): Promise<{ value: string }>;
}
