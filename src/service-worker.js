
const interval = 1000;
let countInterval;
export let online = true;
export function register() {
    countInterval = setInterval( () => {
        if (online) {
            if (!window.navigator.onLine) {
                online = false
                alert('Network error !')
            }
        } else {
            online = window.navigator.onLine
        }

    }, interval)
}