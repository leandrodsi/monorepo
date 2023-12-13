package com.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Build;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class NetInfoModule extends ReactContextBaseJavaModule {
  private BroadcastReceiver networkReceiver;

  public NetInfoModule(ReactApplicationContext reactContext) {
    super(reactContext);
    registerNetworkBroadcastReceiver(reactContext);
  }

  @NonNull
  @Override
  public String getName() {
    return "NetInfoModule";
  }

  @ReactMethod
  public void startMonitoring() {}

  @ReactMethod
  public void stopMonitoring() {
    if (networkReceiver != null) {
      getReactApplicationContext().unregisterReceiver(networkReceiver);
      networkReceiver = null;
    }
  }

  private void registerNetworkBroadcastReceiver(ReactContext reactContext) {
    if (networkReceiver == null) {
      networkReceiver = new BroadcastReceiver() {
        @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
        @Override
        public void onReceive(Context context, Intent intent) {
          Boolean isConnectedNow = isConnected();
          Log.v("OOPS", "IS CONNECTED: " + isConnectedNow);
          if (isConnectedNow) {
            sendEvent(reactContext, "NetworkStatusChanged", true);
          } else {
            sendEvent(reactContext, "NetworkStatusChanged", false);
          }
        }
      };

      IntentFilter filter = new IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION);
      reactContext.registerReceiver(networkReceiver, filter);
    }
  }

  private void sendEvent(ReactContext reactContext, String eventName, boolean isConnected) {
    if (reactContext.hasCatalystInstance()) {
      reactContext
              .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
              .emit(eventName, isConnected);
    }
  }

  @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
  private boolean isConnected() {
    ConnectivityManager connectivityManager =
            (ConnectivityManager) getReactApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);

    if (connectivityManager != null) {
      NetworkInfo activeNetwork = connectivityManager.getActiveNetworkInfo();
      return activeNetwork != null && activeNetwork.isConnectedOrConnecting();
    }

    return false;
  }

  @ReactMethod
  public void addListener(String eventName) {

  }

  @ReactMethod
  public void removeListeners(Integer count) {

  }

}
