
exports.load = async function () {
    const deviceConfig = await Editor.Profile.getConfig('device', 'deviceConfig', 'default');
    const devices = Array.isArray(deviceConfig)
        ? deviceConfig
        : Array.isArray(deviceConfig?.devices)
            ? deviceConfig.devices
            : null;

    if (devices) {
        if (!Array.isArray(deviceConfig)) {
            await Editor.Profile.setConfig('device', 'deviceConfig', devices, 'default');
        }
        const enableDevice = {};
        devices.forEach((info) => {
            // 做一次检查避免异常数据
            if (!info.name
                || typeof(info.width) !== 'number'
                || typeof(info.height) !== 'number'
                || typeof(info.ratio) !== 'number'
            ) {
                console.warn(`Invalid device data ${JSON.stringify(info)}`);
                return;
            }
    
            if (info.enable) {
                enableDevice[info.name] = true;
            }
        });
        await Editor.Profile.setConfig('device', 'enableDevice', enableDevice, 'default');
        console.log('fix device list success');
    }
}
