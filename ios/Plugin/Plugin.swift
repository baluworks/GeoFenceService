import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(GeoFenceService)
public class GeoFenceService: CAPPlugin {
    
    @objc func initialise(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func getNotify(_ call: CAPPluginCall) {
        let value = call.getBool("notify");
        if(value ?? false) {
            self.notifyListeners("NewEvent", data: ["value":value ?? false])
        }
        else {
        }
        call.success([
            "value": value
        ])
    }
}
