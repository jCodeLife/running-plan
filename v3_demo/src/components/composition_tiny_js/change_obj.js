import { reactive } from 'vue';

function useChangeObj() {
    const obj = {
        name: 'Alice',
        age: 18
    }
    const alice = reactive(obj);
    function change_obj() {
        alice.name = 'tom'
        alice.age += 1
    }
    return {alice,change_obj}
}
export default useChangeObj;