import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(GeoFenceServicee)
public class GeoFenceServicee: CAPPlugin {
    
    @objc func init(_ call: CAPPluginCall) {
        let value = call.getString("message") ?? ""
        call.success([
            "value": value
        ])
    }
}
