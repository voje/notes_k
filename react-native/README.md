# Learning react-native

## Useful tips
* Live reloading: update javascript without recompiling the app (state gets reset).
* Hot reloading: update javascript while app is running (state does not change). (Probably not good when building the app.)

## Useful commands
```bash
$react-native init <project_name>
$adb reverse tcp:8081 tcp:8081
$react-native run-android	#build the app on phone (first time)
$react-native start
$react-native log-android
```

## React-native environment setup
Install android sdk, react-native and run a hello world app on phone.
```bash
# install java
$sudo apt-get install openjdk-8-jdk

# install 32-bit libraries (if you're on 64-bit)
$sudo apt-get install lib32z1 lib32ncurses5 lib32stdc++6

# install android studio (thanx to Paolo Rotolo for the ubuntu package)
$sudo apt-add-repository ppa:paolorotolo/android-studio
$sudo apt-get update
$sudo apt-get install android-studio

# run /opt/android-studio/bin/studio.sh and install the right SDK.

# in ~/.bashrc, add the following lines:
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:${PATH}
#restart your terminal or run $source ~/.bashrc

# install nodejs
$sudo apt-get install -y build-essential
$curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$sudo apt-get install -y nodejs

# install react native
$sudo npm install -g react-native-cli

# install right Build Tools revision
under /home/user/Android/Sdk/tools
$android list sdk -a
$android update sdk -a -u -t <number>

# set the usb port
$lsusb
# my device was 0fce (user first part of device code xxxx:xxxx)
$echo SUBSYSTEM=="usb", ATTR{idVendor}=="0fce", MODE="0666", GROUP="plugdev" | sudo tee /etc/udev/rules.d/51-android-usb.rules

# Start react-native:
$react-native init MyApp
$cd MyApp
$react-native run-android
$react-native start

```



