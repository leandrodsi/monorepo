//
//  NetInfoModule.m
//  app
//
//  Created by Leandro Domingos da Silva on 13/12/23.
//

#import <Foundation/Foundation.h>

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NetInfoModule, RCTEventEmitter)

RCT_EXTERN_METHOD(startMonitoring)
RCT_EXTERN_METHOD(stopMonitoring)

@end
