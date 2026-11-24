-----LAB#4-----
Guide Questions and Answers

1. Why do we need two separate states (`searchText` and `debouncedSearch`)?
- We need two separate states because `searchText` stores the user's input immediately, while `debouncedSearch` updates only after the user stops typing for 300 milliseconds. This prevents the application from filtering products every time a character is entered. It also helps improve performance and makes the search process more efficient.

2. What would happen if we did not include the cleanup function in the debounce useEffect?
- Without the cleanup function, previous timers would continue running even when the user types new characters. This may cause unnecessary state updates and multiple filtering operations. The cleanup function cancels the previous timer before starting a new one, ensuring that the search only updates after the user stops typing for 300 milliseconds.

3. What is the purpose of the dependency array in useEffect? What is the difference between an empty dependency array and no dependency array?
- The dependency array determines when the `useEffect` function should run. An empty dependency array (`[]`) means the effect runs after the initial render. Without a dependency array, the effect runs after every render. Using the correct dependencies helps control when an effect should execute.

4. Why should we avoid sorting the original products array directly?
- We should avoid sorting the original products array because the `sort()` method changes the original array. This may affect the original product order and cause unexpected results in the application. Instead, we use the spread operator (`[...]`) to create a copy before sorting, keeping the original data unchanged.

5. Should we store the filtered products in a separate state or calculate them during rendering? Why?
- We should calculate the filtered products during rendering because they are based on existing states such as search text, category, and sort order. There is no need to create another state because the filtered results automatically update when the related states change. This makes the code simpler and prevents unnecessary state management.
