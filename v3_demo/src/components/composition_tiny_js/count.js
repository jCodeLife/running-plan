import { ref } from 'vue';

function useChangeCount() {
    let count = ref(0);
    function change_count() {
        count.value += 1;
    }
    return { count, change_count }
}
export default useChangeCount;