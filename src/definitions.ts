declare module "@capacitor/core" {
  interface PluginRegistry {
    GeoFenceServicee: GeoFenceServiceePlugin;
  }
}

export interface GeoFenceServiceePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
