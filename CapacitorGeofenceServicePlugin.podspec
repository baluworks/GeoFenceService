
  Pod::Spec.new do |s|
    s.name = 'CapacitorGeofenceServicePlugin'
    s.version = '0.0.1'
    s.summary = 'Plugin for Tracking GeoFence Regions'
    s.license = 'MIT'
    s.homepage = 'https://github.com/baluworks/GeoFenceService.git'
    s.author = 'baluworks(Balajee chowdula)'
    s.source = { :git => 'https://github.com/baluworks/GeoFenceService.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end