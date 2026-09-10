import { BuildHook } from "@cocos/creator-types/editor/packages/builder/@types/protected";
import { hotfix } from "./hotfix";

const PACKAGE_NAME = 'custom-build-example';

export const throwError: BuildHook.throwError = true;

export const load: BuildHook.load = async function() {
    console.log(PACKAGE_NAME,load);
};

export const onBeforeBuild: BuildHook.onBeforeBuild = async function(options) {
    // Todo some thing
    console.log(PACKAGE_NAME,'onBeforeBuild');
};

export const onBeforeCompressSettings: BuildHook.onBeforeCompressSettings = async function(options, result) {
    // Todo some thing
    console.log(PACKAGE_NAME,'onBeforeCompressSettings');
};

export const onAfterCompressSettings: BuildHook.onAfterCompressSettings = async function(options, result) {
    // Todo some thing
    console.log(PACKAGE_NAME, 'onAfterCompressSettings');
};

export const onAfterBuild: BuildHook.onAfterBuild = async function(options, result) {
    console.log(PACKAGE_NAME, 'onAfterBuild');
    const platform = options.platform;
    const versionInput = options.packages?.['hotfix-builder']?.versionInput as string | undefined;

    console.log('platform:', platform);
    console.log('versionInput:', versionInput);

    hotfix(platform, versionInput || "1.0.0", result.paths);
};

export const unload: BuildHook.unload = async function() {
    console.log(PACKAGE_NAME, 'unload');
};
