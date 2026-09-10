"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = exports.unload = exports.load = void 0;
const load = function () {
    console.debug('custom-build-example load');
};
exports.load = load;
const unload = function () {
    console.debug('custom-build-example unload');
};
exports.unload = unload;
exports.configs = {
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
                func(val, option) {
                    const versionRegex = /^\d+\.\d+\.\d+$/;
                    return versionRegex.test(val);
                }
            },
        },
        hooks: './hooks',
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
                func(val, option) {
                    const versionRegex = /^\d+\.\d+\.\d+$/;
                    return versionRegex.test(val);
                }
            },
        },
        hooks: './hooks',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sSUFBSSxHQUFxQjtJQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBRlcsUUFBQSxJQUFJLFFBRWY7QUFFSyxNQUFNLE1BQU0sR0FBcUI7SUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUZXLFFBQUEsTUFBTSxVQUVqQjtBQUVXLFFBQUEsT0FBTyxHQUF1QjtJQUN2QyxTQUFTLEVBQUU7UUFDUCxPQUFPLEVBQUU7WUFDTCxZQUFZLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSxLQUFLO2dCQUNsQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsTUFBTSxFQUFFO29CQUNKLEVBQUUsRUFBRSxVQUFVO29CQUNkLFVBQVUsRUFBRTt3QkFDUixXQUFXLEVBQUUsUUFBUTtxQkFDeEI7aUJBQ0o7Z0JBQ0QsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQzthQUMzQztTQUNKO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxXQUFXO2dCQUNwQixJQUFJLENBQUMsR0FBUSxFQUFFLE1BQXdCO29CQUNuQyxNQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztvQkFDdkMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2FBQ0o7U0FDSjtRQUNELEtBQUssRUFBQyxTQUFTO0tBQ2xCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsT0FBTyxFQUFFO1lBQ0wsWUFBWSxFQUFFO2dCQUNWLEtBQUssRUFBRSxTQUFTO2dCQUNoQixXQUFXLEVBQUUsS0FBSztnQkFDbEIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDSixFQUFFLEVBQUUsVUFBVTtvQkFDZCxVQUFVLEVBQUU7d0JBQ1IsV0FBVyxFQUFFLFFBQVE7cUJBQ3hCO2lCQUNKO2dCQUNELFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7YUFDM0M7U0FDSjtRQUNELGFBQWEsRUFBRTtZQUNYLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsV0FBVztnQkFDcEIsSUFBSSxDQUFDLEdBQVEsRUFBRSxNQUF3QjtvQkFDbkMsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUM7b0JBQ3ZDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQzthQUNKO1NBQ0o7UUFDRCxLQUFLLEVBQUMsU0FBUztLQUNsQjtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZFBsdWdpbiwgSUJ1aWxkVGFza09wdGlvbiB9IGZyb20gXCJAY29jb3MvY3JlYXRvci10eXBlcy9lZGl0b3IvcGFja2FnZXMvYnVpbGRlci9AdHlwZXMvcHVibGljXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkOiBCdWlsZFBsdWdpbi5sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnY3VzdG9tLWJ1aWxkLWV4YW1wbGUgbG9hZCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVubG9hZDogQnVpbGRQbHVnaW4ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ2N1c3RvbS1idWlsZC1leGFtcGxlIHVubG9hZCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3M6QnVpbGRQbHVnaW4uQ29uZmlncyA9IHtcbiAgICAnYW5kcm9pZCc6IHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdmVyc2lvbklucHV0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdWZXJzaW9uJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+eJiOacrOWPtycsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzEuMC4wJyxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdWk6ICd1aS1pbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl54mI5pys5Y+3JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZlcmlmeVJ1bGVzOiBbJ3JlcXVpcmVkJywgJ3J1bGVWZXJzaW9uJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZlcmlmeVJ1bGVNYXA6IHtcbiAgICAgICAgICAgIHJ1bGVWZXJzaW9uOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+eJiOacrOWPt+agvOW8j+S4jeato+ehruOAgicsXG4gICAgICAgICAgICAgICAgZnVuYyh2YWw6IGFueSwgb3B0aW9uOiBJQnVpbGRUYXNrT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25SZWdleCA9IC9eXFxkK1xcLlxcZCtcXC5cXGQrJC87XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uUmVnZXgudGVzdCh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGhvb2tzOicuL2hvb2tzJyxcbiAgICB9LFxuICAgICdpb3MnOiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHZlcnNpb25JbnB1dDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVmVyc2lvbicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfniYjmnKzlj7cnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcxLjAuMCcsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHVpOiAndWktaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeeJiOacrOWPtycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2ZXJpZnlSdWxlczogWydyZXF1aXJlZCcsICdydWxlVmVyc2lvbiddXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB2ZXJpZnlSdWxlTWFwOiB7XG4gICAgICAgICAgICBydWxlVmVyc2lvbjoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfniYjmnKzlj7fmoLzlvI/kuI3mraPnoa7jgIInLFxuICAgICAgICAgICAgICAgIGZ1bmModmFsOiBhbnksIG9wdGlvbjogSUJ1aWxkVGFza09wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uUmVnZXggPSAvXlxcZCtcXC5cXGQrXFwuXFxkKyQvO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmVyc2lvblJlZ2V4LnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBob29rczonLi9ob29rcycsXG4gICAgfSxcbn07Il19