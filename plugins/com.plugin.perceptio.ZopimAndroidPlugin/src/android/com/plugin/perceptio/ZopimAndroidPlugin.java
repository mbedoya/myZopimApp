package com.plugin.perceptio;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class ZopimAndroidPlugin extends Plugin {

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action        The action to execute.
     * @param args          JSONArry of arguments for the plugin.
     * @param callbackId    The callback id used when calling back into JavaScript.
     * @return              A PluginResult object with a status and message.
     */
    public ZopimAndroidPlugin execute(String action, JSONArray args, String callbackId) {
        try {
            if (action.equals("echo")) {
                String echo = args.getString(0);
                if (echo != null && echo.length() > 0) {
                    return new PluginResult(PluginResult.Status.OK, echo);
                } else {
                    return new PluginResult(PluginResult.Status.ERROR);
                }
            } else {
                return new PluginResult(PluginResult.Status.INVALID_ACTION);
            }
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
        }
    }
}