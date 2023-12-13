//
//  RCTNetInfoModule.swift
//  app
//
//  Created by Leandro Domingos da Silva on 13/12/23.
//

import React
import Reachability

@objc(RCTNetInfoModule)
class RCTNetInfoModule: RCTEventEmitter {
  private var reachability: Reachability?
  
  override func supportedEvents() -> [String]! {
    return ["NetworkStatusChanged"]
  }
  
  @objc func startMonitoring() {
    reachability = try? Reachability()
    
    NotificationCenter.default.addObserver(self, selector: #selector(networkStatusChanged(_:)), name: .reachabilityChanged, object: nil)
    
    do {
      try reachability?.startNotifier()
    } catch {
      print("Unable to start notifier")
    }
  }
  
  @objc func stopMonitoring() {
    reachability?.stopNotifier()
    NotificationCenter.default.removeObserver(self, name: .reachabilityChanged, object: nil)
  }
  
  @objc private func networkStatusChanged(_ notification: Notification) {
    if let reachability = reachability {
      sendEvent(withName: "NetworkStatusChanged", body: ["isConnected": reachability.connection != .unavailable])
    }
  }
}
