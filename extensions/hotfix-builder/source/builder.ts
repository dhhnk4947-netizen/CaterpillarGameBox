import { BuildPlugin, IBuildTaskOption } from "@cocos/creator-types/editor/packages/builder/@types/public";

export const load: BuildPlugin.load = function() {
    console.debug('custom-build-example load');
};

export const unload: BuildPlugin.load = function() {
    console.debug('custom-build-example unload');
};

export const configs:BuildPlugin.Configs = {
    'android': {
        options: {
            versionInput: {
                label: 'Version',
                description: '版本号',
                default: '1.0.0',
                render: {
                    ui: 'ui-input',
                    attributes: {
                        placeholder: '请输入版本号',
                    },
                },
                verifyRules: ['required', 'ruleVersion']
            },
        },
        verifyRuleMap: {
            ruleVersion: {
                message: '版本号格式不正确。',
                func(val: any, option: IBuildTaskOption) {
                    const versionRegex = /^\d+\.\d+\.\d+$/;
                    return versionRegex.test(val);
                }
            },
        },
        hooks:'./hooks',
    },
    'ios': {
        options: {
            versionInput: {
                label: 'Version',
                description: '版本号',
                default: '1.0.0',
                render: {
                    ui: 'ui-input',
                    attributes: {
                        placeholder: '请输入版本号',
                    },
                },
                verifyRules: ['required', 'ruleVersion']
            },
        },
        verifyRuleMap: {
            ruleVersion: {
                message: '版本号格式不正确。',
                func(val: any, option: IBuildTaskOption) {
                    const versionRegex = /^\d+\.\d+\.\d+$/;
                    return versionRegex.test(val);
                }
            },
        },
        hooks:'./hooks',
    },
};