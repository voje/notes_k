# Learning react-native

## Useful tips
* Live reloading: update javascript without recompiling the app (state gets reset).
* Hot reloading: update javascript while app is running (state does not change). (Probably not good when building the app.)

```bash
$react-native init <project_name>
$adb reverse tcp:8081 tcp:8081
$react-native run-android	#build the app on phone (first time)
$react-native start
$react-native log-android
```
