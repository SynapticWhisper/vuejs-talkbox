import { ref, onMounted } from 'vue';

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(true);

    onMounted(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            data.value = await response.json();
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    });

    return { data, error, isLoading };
}
